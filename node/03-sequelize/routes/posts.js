var express = require('express');
var router = express.Router();
const { store, destroy } = require('../constrollers/postController');
const { isAuthenticated } = require('../middlewares/isAuthenticated');
const { isAuthorized } = require('../middlewares/isAuthorized');


router.post('/', isAuthenticated, store)
router.delete('/:id', isAuthenticated, isAuthorized, destroy)

module.exports = router;