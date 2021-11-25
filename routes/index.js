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
// Index Router
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Products Router
router.get('/products',async function(req,res){
  let products = await Product.find({});
  res.json(products);
});

// User Router
//===============================================
// Single Product
router.get('/products/:name',async function(req,res){
  res.json(
    await Product.findOne({product_name : req.params.name})
  );
});

router.get('/products/category/:name',async function(req,res){
  res.json(
    await Product.find({product_category : {$all : [req.params.name]}})
  );
});
router.get('/user',function(req,res) {
  if(!req.user) return res.json('Please login');
  res.json(req.user);
});
router.get('/user/ordered_items',function(req,res){
  if(!req.user) return res.json('Please login');
  res.json(req.user.ordered_items)
});
router.get('/user/wishlisted_items',function(req,res){
  if(!req.user) return res.json('Please login');
  res.json(req.user.wishlisted_items)
});
router.get('/user/cart_items',function(req,res){
  if(!req.user) return res.json('Please login');
  res.json(req.user.cart_items)
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
router.put('/user',function(req,res){});
router.get('/reviews/:product',function(req,res){

});
router.post('reviews/:product',function(req,res){

});
router.post('/login',passport.authenticate('local'), function(req,res){
  res.redirect('/');
});

// sample route to demonstrate authentication. Remove this later !
router.get('/secret',function(req,res){ 
  if(!req.user) res.json('Please login first');
  else res.json(req.user);
});

module.exports = router;
