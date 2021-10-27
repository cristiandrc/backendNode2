const express = require('express');
const router = express.Router();
const UserService = require('../services/user.service');

const service = new UserService();

//users?limit=123123&offset=12313

router.get('/', (req, res) => {
  const users = service.find();

  res.status(200).json(users);
});

router.get('/:id', (req, res) => {
  const user = service.findOne(req.params.id);

  res.status(200).json(user);
});

router.post('/', (req, res) => {
  const newUser = service.create(req.body);
  res.status(201).json(newUser);
});

router.patch('/:id', (req, res) => {
  const updateUser = service.update(req.params.id, req.body);
  res.status(200).json(updateUser);
});

router.delete('/:id', (req, res) => {
  const userDelete = service.delete(req.params.id);
  res.status(200).json(userDelete);
});

module.exports = router;
