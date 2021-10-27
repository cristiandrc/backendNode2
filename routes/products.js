const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get('/', (req, res) => {
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

router.get('/filter', (req, res) => {
  res.send('soy un filtro');
});

//parametros por id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  id === '999'
    ? res.status(404).json({ massage: 'Not Found' })
    : res.status(200).json({ id, name: 'Product 2', price: 12 });
});

router.post('/', (req, res) => {
  const data = req.body;

  res.status(201).json({ message: 'Create', data });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Update',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'Delete',
    id,
  });
});

module.exports = router;
