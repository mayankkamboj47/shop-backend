var express = require('express');
const passport = require('passport');
var router = express.Router();
var {User} = require('../database/database.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/register',function(req,res){
  console.log('Register request : ');
  console.log(req.body.username,req.body.password);
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
router.get('/secret',function(req,res){
  if(!req.user) res.json('Please login first');
  else res.json(req.user);
});
module.exports = router;
