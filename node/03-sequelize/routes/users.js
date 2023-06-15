var express = require('express');
var router = express.Router();
const models = require('../models');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const users = await models.User.findAll({
    include: [models.Post]
  });
  return res.send(users);
});

module.exports = router;
