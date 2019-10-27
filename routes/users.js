var express = require('express');
var router = express.Router();

const users = [
  {
    name: 'Alejandro',
    age: 21
  },
  {
    name: 'Daniel',
    age: 15
  }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('users', {users: users})
});

module.exports = router;
