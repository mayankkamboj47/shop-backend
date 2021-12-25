var {User, Product, Review} = require('../database/database')
var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET users listing. */

router.get('/',function(req,res) {
  if(!req.user) return res.status(403).json(null);
  res.json(req.user);
});

router.get('/ordered_items',async function(req,res){
  if(!req.user) return res.status(403).json(null);
  let ids = req.user.ordered_items.map(object => object.product_id)
  let data = (await Promise.all(ids.map(id=>Product.findOne({_id : id}))));
  data = data.map((obj,i)=>obj===null ? obj : Object.assign({date : req.user.ordered_items[i].date},obj._doc));
  res.json(data);
});
router.get('/wishlisted_items',async function(req,res){
  if(!req.user) return res.status(403).json(null);
  res.json(
    await Product.find({_id : {$in : req.user.wishlisted_items.map(object=>object.product_id)}})
  ) // fetch actual products from Products based on each _id of the product
});

router.get('/cart_items',async function(req,res){
  if(!req.user) return res.status(403).json(null);
  let ids = req.user.cart_items.map(object => object.product_id)
  let data = (await Promise.all(ids.map(id=>Product.findOne({_id : id}))));
  data = data.map((obj,i)=>obj===null ? obj : Object.assign({quantity : req.user.cart_items[i].quantity},obj._doc));
  res.json(data);
});

router.get('/cart_items/length',function(req,res){
  if(!req.user) return res.status(403).json(null);
  res.json(req.user.cart_items.length);
});

router.post('/',function(req,res){
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
        res.status(200).json(null)
      });
    });
  });
});

router.get('/modify',function(req,res){
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

module.exports = router;
