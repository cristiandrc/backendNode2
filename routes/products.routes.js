const express = require('express');
const router = express.Router();
const ProductService = require('../services/product.service');

const service = new ProductService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/filter', async (req, res) => {
  res.send('soy un filtro');
});

//parametros por id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.findOne(id);
  res.status(200).json({ message: 'findOne', product });
});

router.post('/', async (req, res) => {
  const data = req.body;
  const newProduct = await service.create(data);

  res.status(201).json({ message: 'Create', newProduct });
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json({
      message: 'Update',
      product,
    });
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const productDelete = await service.delete(id);
  res.json(productDelete);
});

module.exports = router;
