//===============================================
// Boilerplate (Express + Routers)

var express = require('express');
var router = express.Router();

//===============================================
// Passport for Authentication
const passport = require('passport');

//===============================================
// User Model from Database
var {User, Product} = require('../database/database.js');

//===============================================
// 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/user',function(req,res){
  User.register(new User({
    username : req.body.username,
    delivery_addr : '43A, Chandni Chowk, New Delhi',
    ordered_items : [],
    wishlisted_items : [],
    cart_items : [],
    google_id : '',
    facebook_id : ''
  }), req.body.password, function(error, account){
    if(error){
      console.log(error);
      return res.json('Error : '+error);
    }
    passport.authenticate('local')(req,res,function(){
      req.session.save(function(err){
        if(err){
          return next(err);
        }
        res.redirect('/');
      });
    });
  });
});
router.post('/login',passport.authenticate('local'), function(req,res){
  res.redirect('/');
});

router.get('/products',async function(req,res){
  let products = await Product.find({});
  res.json(products);
});
// sample route to demonstrate authentication. Remove this later !
router.get('/secret',function(req,res){ 
  if(!req.user) res.json('Please login first');
  else res.json(req.user);
});

module.exports = router;
