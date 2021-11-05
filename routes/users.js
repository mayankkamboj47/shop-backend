var {User, Product, Review} = require('../database/database')
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res) {
  let users = await User.find({})
  res.send(users);
});



module.exports = router;
