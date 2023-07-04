var express = require('express');
var router = express.Router();

const { index, show, store, update, destroy, login } = require('../constrollers/userController');

/* GET users listing. */
router.get('/', index);
router.get('/:id', show)
router.post('/', store)
router.patch('/:id', update)
router.delete('/:id', destroy)
router.post('/login', login)

module.exports = router;
