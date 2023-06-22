var jwt = require('jsonwebtoken');

const generateToken = (data) => {
    return jwt.sign(data, 'QuQ1jBOuR8nX2CqxqZEREbQG0o8UI3');
}
const verifyToken = (token) => {
    var decoded = null;
    try {
        decoded = jwt.verify(token, 'QuQ1jBOuR8nX2CqxqZEREbQG0o8UI3');
    } catch (err) {
        // err
    }
    return decoded;
}
module.exports = {
    generateToken,
    verifyToken
}