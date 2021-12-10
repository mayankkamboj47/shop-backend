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
router.get('/products/toCart', async function(req,res){
  if(!req.user) return res.status(403).json(null);
  let products = req.user.cart_items.slice();
  products.push({
    product_id : req.query.product_id,
    quantity : req.query.quantity});
  console.log('Products is now',products);
  User.findOneAndUpdate({_id:req.user._id},{cart_items : products},{},function(err,data){
    if(err) return res.status(500).json(err);
    else return res.status(200);
  });
});
router.get('/products/toWishlist', async function(req,res){
  if(!req.user) return res.status(403).json(null);
  let products = req.user.wishlisted_items.slice();
  products.push({
    product_id : req.query.product_id,
  });
  User.findOneAndUpdate({_id:req.user._id},{wishlisted_items : products},{},function(err,data){
    if(err) return res.status(500).json(err);
    else return res.status(200);
  });
  Product.findOneAndUpdate({_id:req.query.product_id},{$inc : {product_num_of_wishlist : 1}},{},(err, data)=>{
    if(err){
      throw new Error(err);
    }
  })
});

router.get('/cartToOrderedItems',async function(req,res){
  if(!req.user) res.status(403).json(null);
  let user = await User.findOne({username : req.user.username});
  let today = new Date();
  user.ordered_items = user.ordered_items.concat(user.cart_items.map(item=>({product_id:item.product_id, date : today})));
  user.cart_items = [];
  await user.save();
  res.status(200).json(null);
});

router.get('/cartToWishlist/:product_id',async function(req,res){
  if(!req.user) return res.status(403).json(null);

  await User.findOneAndUpdate({username:req.user.username},{wishlisted_items : req.user.wishlisted_items.concat([{product_id : req.params.product_id}]),
  cart_items : req.user.cart_items.filter(product=>product.product_id!==req.params.product_id)});
  res.status(200).json(null);
});

router.get('/wishlistToCart/:product_id',async function(req,res){
  if(!req.user) return res.status(403).json(null);

  await User.findOneAndUpdate({username:req.user.username},{cart_items : req.user.cart_items.concat([{product_id : req.params.product_id, quantity : 1}]),
  wishlisted_items : req.user.wishlisted_items.filter(product=>product.product_id!==req.params.product_id)});
  res.status(200).json(null);
});

router.get('/removeFromWishlist/:product_id',async function(req,res){
  if(!req.user) return res.status(403).json(null);
  await User.findOneAndUpdate({username : req.user.username},{wishlisted_items : req.user.wishlisted_items.filter(product=>product.product_id!==req.params.product_id)})
  res.status(200).json(null);
});

router.get('/removeFromCart/:product_id',async function(req,res){
  await User.findOneAndUpdate({username : req.user.username},{cart_items : req.user.cart_items.filter(product=>product.product_id!==req.params.product_id)})
  res.status(200).json(null);
});

router.get('/products/:name',async function(req,res){
  console.log(req.params.name);
  res.json(
    await Product.findOne({product_name : req.params.name.toUpperCase()})
  );
});

router.get('/products/category/:name',async function(req,res){
  res.json(
    await Product.find({product_category : {$all : [req.params.name]}})
  );
});

router.get('/user',function(req,res) {
  if(!req.user) return res.status(403).json(null);
  res.json(req.user);
});

router.get('/user/ordered_items',async function(req,res){
  if(!req.user) return res.status(403).json(null);
  let ids = req.user.ordered_items.map(object => object.product_id)
  let data = (await Promise.all(ids.map(id=>Product.findOne({_id : id}))));
  data = data.map((obj,i)=>obj===null ? obj : Object.assign({date : req.user.ordered_items[i].date},obj._doc));
  res.json(data);
});
router.get('/user/wishlisted_items',async function(req,res){
  if(!req.user) return res.status(403).json(null);
  res.json(
    await Product.find({_id : {$in : req.user.wishlisted_items.map(object=>object.product_id)}})
  ) // fetch actual products from Products based on each _id of the product
});

router.get('/user/cart_items',async function(req,res){
  if(!req.user) return res.status(403).json(null);
  let ids = req.user.cart_items.map(object => object.product_id)
  let data = (await Promise.all(ids.map(id=>Product.findOne({_id : id}))));
  data = data.map((obj,i)=>obj===null ? obj : Object.assign({quantity : req.user.cart_items[i].quantity},obj._doc));
  res.json(data);
});

router.get('/user/cart_items/length',function(req,res){
  if(!req.user) return res.status(403).json(null);
  res.json(req.user.cart_items.length);
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

router.get('/user/modify',function(req,res){
  // req.user is not showing up for any method apart from /get. https://github.com/jaredhanson/passport/issues/846 
  console.log(req.query.username);
  if(!req.user) return res.status(403).json(null);
  User.findOneAndUpdate({_id : req.user._id}, req.query, {}, function (err, data) {
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

router.get('/reviews/add/:product_id',async function(req,res){
  if(!req.user) return res.status(403).json(null);
  console.log(req.params.user);
  let username = req.user.username;
  let isVerified = req.user.ordered_items.some(item=>item.product_id === req.params.product_id);
  let reviewData = {...req.query,username, isVerified, product_id : req.params.product_id}
  let review = new Review(reviewData);
  await review.save();
  res.status(200).json(reviewData);
  let reviews = (await Review.find({product_id : req.params.product_id}));
  let newRating = reviews.reduce((sum,review)=>sum+review.product_rating,0)/reviews.length;
  Product.findOneAndUpdate({_id:req.params.product_id},{product_rating:newRating, $inc : {product_num_of_reviews : 1} },{},(err,res)=>{
    if(err){
      throw new Error(err);
    }
  });
});

router.get('/reviews/:product_id',async function(req,res){
  res.json(
    await Review.find({product_id : req.params.product_id})
  )
});

router.post('/login',passport.authenticate('local'), function(req,res){
  res.redirect('/');
});

module.exports = router;
