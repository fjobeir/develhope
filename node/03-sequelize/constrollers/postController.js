const models = require('../models')

const store = async function(req, res, next) {
    console.log("[post] store function is running")
    const { content } = req.body;
    const post = await req.user.createPost({
        content: content
    })
    res.send({
        success: true,
        post
    })
}

const destroy = async function (req, res, next) {
    const { id } = req.params
    const deleted = await models.Post.destroy({
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
}

module.exports = {
    store,
    destroy
}