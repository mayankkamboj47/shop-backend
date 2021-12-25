var express = require('express')
var router = express.Router()
const passport = require('passport')
var {User, Product, Review} = require('../database/database.js')

router.get('/', function (req,res){
    if(!req.user) return res.json('Please login');
    res.render('review', {title : "Post a Review"})
});
  
router.get('/add/:product_id',async function(req,res){
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
  
router.get('/:product_id',async function(req,res){
    res.json(
        await Review.find({product_id : req.params.product_id})
    )
});

module.exports = router