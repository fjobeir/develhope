var express = require('express');
var router = express.Router();
const db = require('../db')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


// insert, delete, update, select, join

router.post('/', function (req, res, next) {
  const { name, email, password } = req.body
  // INSERT INTO tableName (id, name, email password) VALUES ($1, $2, $3, $4)
  db.query(
    "INSERT INTO users (id, name, email, password) VALUES ($1, $2, $3, $4)",
    [1, name, email, password],
    (error, result) => {
      if (error) throw error;
      console.log(result)
    })

  res.send('Hi')
})

// methods: get, post, patch, delete
// CRUD: Create, Read, Update, Delete

module.exports = router;


// MySQL, SQL Server, PostGreSQL, MariaDB, MongoDB