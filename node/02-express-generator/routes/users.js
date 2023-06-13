var express = require('express');
var router = express.Router();
const db = require('../db')

/* GET users listing. */
router.get('/', function (req, res, next) {
  db.query("SELECT * FROM users;", [], (error, result) => {
    res.send(result.rows)
  })
});
// Get single user
router.get('/:id', function (req, res, next) {
  const { id } = req.params
  let numericId = parseInt(id)
  if (isNaN(numericId)) {
    return res.send('Please select a valid id')
  }
  db.query("SELECT * FROM users JOIN posts ON users.id=posts.user_id WHERE uses.id=$1;", [numericId], (error, result) => {
    console.log(error, result)
    res.send(result)
  })
});

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

router.patch('/:id', (req, res, next) => {
  const { id } = req.params
  let numericId = parseInt(id)
  if (isNaN(numericId)) {
    return res.send('Please select a valid id')
  }
  const { name, email } = req.body
  db.query(
    "UPDATE users SET name=$2, email=$3 WHERE id=$1;",
    [numericId, name, email],
    (error, result) => {
      console.log(error)
      res.send(result)
    })
})

// Get single user
router.delete('/:id', function (req, res, next) {
  const { id } = req.params
  let numericId = parseInt(id)
  if (isNaN(numericId)) {
    return res.send('Please select a valid id')
  }
  db.query("DELETE FROM users WHERE id=$1;", [numericId], (error, result) => {
    console.log('ERROR', error)
    console.log(result)
    res.send(result)
  })
});

module.exports = router;


// MySQL, SQL Server, PostGreSQL, MariaDB, MongoDB