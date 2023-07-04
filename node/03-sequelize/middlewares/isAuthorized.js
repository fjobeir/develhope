const idValidator = require("../lib/validators/id-validator");
const { Post } = require('../models')

const isAuthorized = async function(req, res, next) {
    const postId = req.params.id
    if (!idValidator(postId, res)) return;
    const post = await Post.findByPk(postId)
    if (!post) return res.send({message: "Invalid post id"})
    if (post.userId === req.user.id) {
        return next();
    }
    res.status(403)
    return res.send({
        message: "You are not allowed to delete the post"
    })
}

module.exports = {isAuthorized}