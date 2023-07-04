const { verifyToken } = require('../lib/token');
const models = require('../models');

const isAuthenticated = async function (req, res, next) {
    console.log("isAuthenticated is running")
    const authorization = req.headers?.authorization;
    if (!authorization) return res.send({ message: "You are not authenticated" });
    const token = authorization.split(' ')[1];
    const decoded = verifyToken(token);
    if (!decoded) return res.send({ message: "Invalid token" });
    const user = await models.User.findByPk(decoded.id);
    if (!user) return res.send({ message: "An error occurred, try again later" });
    req.user = user;
    next();
}

module.exports = {
    isAuthenticated
}