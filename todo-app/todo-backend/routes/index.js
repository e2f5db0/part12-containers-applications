const express = require('express');
const router = express.Router();
const redis = require('../redis')

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

/* GET todo statistics. */
router.get('/statistics', async (_, res) => {
  const todoCount = await redis.getAsync('added_todos')
  if (!todoCount) {
    res.send({ 'added_todos': 0 })
  } else {
    res.send({ 'added_todos': todoCount })
  }
});

module.exports = router;
