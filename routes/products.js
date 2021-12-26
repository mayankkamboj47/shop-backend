var express = require('express')
var router = express.Router()
const passport = require('passport')
var {User, Product, Review} = require('../database/database.js')

// Get All Products
router.get('/',async function(req,res){
    try {
        let products = await Product.find({});
        res.json(products);
        console.log("Products Found!")
    } catch(err) {
        res.send(err)
    }
  });

// Single Product
router.get('/toCart', async function(req,res){
    if(!req.user) return res.status(403).json(null);
    try {
        let products = req.user.cart_items.slice();
        products.push({
        product_id : req.query.product_id,
        quantity : req.query.quantity});
        console.log('Products is now',products);
        User.findOneAndUpdate({_id:req.user._id},{cart_items : products},{},function(err,data){
        });
        res.send(products)
    } catch(err) {
        res.send(err)
    }
});

router.get('/toWishlist', async function(req,res){
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

router.get('/:name',async function(req,res){
    console.log(req.params.name);
    res.json(
      await Product.findOne({product_name : req.params.name.toUpperCase()})
    );
  });
  
  router.get('/category/:name',async function(req,res){
    res.json(
      await Product.find({product_category : {$all : [req.params.name]}})
    );
  });

  
module.exports = router