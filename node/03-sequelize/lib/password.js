var bcrypt = require('bcryptjs');

const hashPassword = (password) => {
    var salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

const verifyPassword = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword)
}

module.exports = {
    hashPassword,
    verifyPassword
}