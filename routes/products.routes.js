const express = require('express');
const router = express.Router();
const ProductService = require('../services/product.service');

const service = new ProductService();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('soy un filtro');
});

//parametros por id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.status(200).json({ message: 'findOne', product });
});

router.post('/', (req, res) => {
  const data = req.body;
  const newProduct = service.create(data);

  res.status(201).json({ message: 'Create', newProduct });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.json({
    message: 'Update',
    product,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const productDelete = service.delete(id);
  res.json(productDelete);
});

module.exports = router;
