var express = require('express');
const { verifyToken } = require('../lib/token');
var router = express.Router();
const models = require('../models')

router.post('/', async function(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) return res.send({message: "You are not authenticated"});
    const token = authorization.split(' ')[1];
    const decoded = verifyToken(token);
    if (!decoded) return res.send({message: "You are not authenticated"});
    const user = await models.User.findByPk(decoded.id);
    if (!user) return res.send({message: "An error occurred, try again later"});
    const { content } = req.body;
    const post = await user.createPost({
        content: content
    })
    res.send({
        success: true,
        post
    })
})

module.exports = router;