var express = require('express');
var router = express.Router();
const models = require('../models');
const idValidator = require('../lib/validators/id-validator');
const { generateToken } = require('../lib/token');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const users = await models.User.findAll({
    include: [models.Post]
  });
  return res.send(users);
});

router.get('/:id', async function(req, res, next) {
  // const user = await models.User.findOne()
  const { id } = req.params
  if (!idValidator(id, res)) return;
  const user = await models.User.findByPk(id)
  if (user) {
    res.send({
      user
    })
  } else {
    res.send({
      message: 'User not found'
    })
  }
})

router.post('/', async function(req, res, next) {
  const { name, email, password } = req.body;
  const [user, created] = await models.User.findOrCreate(
    {
      where: {
        email: email
      },
      defaults: {
        name,
        password
      }
    })
  if (created) {
    res.send({
      message: 'Created Successfully',
      user
    })
  } else {
    res.send({
      message: 'You already have an account',
      user
    })
  }
})

router.patch('/:id', async function(req, res, next) {
  const { name, email } = req.body;
  const { id } = req.params
  if (!idValidator(id, res)) return;
  const [updatedRows] = await models.User.update({
    name,
    email 
  }, {
    where: {
      id
    }
  })
  if (updatedRows > 0) {
    res.send({
      message: 'Updated Successfully',
    })
  } else {
    res.send({
      message: 'User not found'
    })
  }
})

router.delete('/:id', async function(req, res, next) {
  const { id } = req.params
  if (!idValidator(id, res)) return;
  const deleted = await models.User.destroy({
    where: {
      id
    }
  });
  if (deleted > 0) {
    res.send({
      message: `${deleted} row(s) deleted`
    })
  } else {
    res.send({
      message: 'No rows deleted'
    })
  }
})

router.post('/login', async function(req, res, next) {
  const { email, password } = req.body;
  const user = await models.User.findOne({
    where: {
      email: email,
      password: password
    }
  })
  if (!user) return res.send({message: "Wrong username or password"});
  return res.send({
    user: user,
    token: generateToken({id: user.id})
  })
})

module.exports = router;
