//===============================================
// Boilerplate (Express + Routers)

var express = require('express');
var router = express.Router();


//===============================================
// Passport for Authentication
const passport = require('passport');

//===============================================
// User Model from Database
var {User, Product, Review} = require('../database/database.js');

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

  let ids = req.user.ordered_items.map(object => object.product_id)

  res.json(
    await Product.find({_id : {$some : ids}});
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

router.put('/user',function(req,res){
  if(!req.user) return res.json('Please login');
  User.findOneAndUpdate({_id : req.user._id}, req.body, {}, function (err, data) {
    if (err) {
        return res.status(500).send(err);
    }
    if (!data) {
        return res.status(404).end();
    }
    return res.status(200).send(data);
  });
});

router.get('/reviews', function (req,res){
  if(!req.user) return res.json('Please login');
  res.render('review', {title : "Post a Review"})
});

router.get('/reviews/:product_id',async function(req,res){
  res.json(
    await Review.find({product_id : req.params.product_id})
  )
});

router.post('/reviews/:product_id',async function(req,res){ // Fix this
  if(!req.user) return res.json('Please login');
  console.log(req.params.user)
  let username = req.user.username;
  let isVerified = req.user.ordered_items.some(item=>item.product_id === req.params.product_id);
  let review = new Review({...req.body,username, isVerified, product_id : req.params.product_id});
  await review.save();
  res.status(200).json(null);
});

router.post('/login',passport.authenticate('local'), function(req,res){
  res.redirect('/');
});

module.exports = router;
