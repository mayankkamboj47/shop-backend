var express = require('express');
var router = express.Router();
const passport = require('passport');
var {User, Product, Review} = require('../database/database.js');

router.get('/', (req, res) => {
  res.send("You're at root")
})

router.get('/users', async function(req, res) {
  let users = await User.find({})
  res.send(users);
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


router.get('/search/autosuggest/:query',async function(req,res){
  let queryExp = new RegExp(req.params.query,'i');
  let products = await Product.find({
    product_name : {$regex : queryExp}
  });
  let fuzzyProducts = (await Product.find({
    product_desc : {$regex : queryExp}
  })).filter(product=>!products.some(p=>p.product_id===product.product_id));

  res.send([...products,...fuzzyProducts].map(product=>product.product_name));
});

router.get('/search/:query',async function(req,res){
  let queryExp = new RegExp(req.params.query,'i');
  let products = await Product.find({product_name : {
    $regex : queryExp
  }});
  let fuzzyProducts = (await Product.find({
    product_desc : {$regex : queryExp}
  })).filter(product=>!products.some(p=>p.product_id===product.product_id));
  res.send([...products , ...fuzzyProducts]);
});



router.post('/login',passport.authenticate('local', {
  failureRedirect: '/login',
  successRedirect: '/'
}))

module.exports = router;
