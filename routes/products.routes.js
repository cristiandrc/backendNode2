const express = require('express');
const router = express.Router();
const ProductService = require('../services/product.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('../schemas/product.schema');

const service = new ProductService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/filter', async (req, res) => {
  res.send('soy un filtro');
});

//parametros por id
router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.status(200).json({ message: 'findOne', product });
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const data = req.body;
    const newProduct = await service.create(data);

    res.status(201).json({ message: 'Create', newProduct });
  }
);

router.patch(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json({
        message: 'Update',
        product,
      });
    } catch (err) {
      next(err);
    }
  }
);

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const productDelete = await service.delete(id);
  res.json(productDelete);
});

module.exports = router;
