const express = require('express');
const router = express.Router();

//users?limit=123123&offset=12313
router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  }
  res.send('no hay parametros');
});

module.exports = router;
