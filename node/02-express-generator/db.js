const Pool = require('pg').Pool

const db = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '123456',
    database: 'afost-blog',
    port: 5432
})

module.exports = db
