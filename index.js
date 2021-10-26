const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/products', (req, res) => {
  const limit = req.query.size || 10;
  const products = [];
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

//parametros por id
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id, name: 'Product 2', price: 12 });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({ categoryId, productId });
});

//users?limit=123123&offset=12313
app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  }

  res.send('no hay parametros');
});

app.listen(port, () => {
  console.log('listen en http://localhost:3000');
});
