var mongoose = require('mongoose');
var password = 'binkbonk123'
mongoose.connect('mongodb+srv://karanh:' + password + '@test-db.ymyhm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const { Schema } = mongoose;

const userSchema = new Schema({
    _id: {
        type: String,
        alias: "user_id"
    },
    pass_hash: String,
    delivery_addr: String,
    ordered_items: [{
        product_id: String,
        date: Date
    }],
    wishlisted_items: [{
        product_id: String
    }],
    cart_items : [{
        product_id: String,
        quantity: Number
    }],
    google_id: String,
    facebook_id: String
});

const productSchema = new Schema({
    _id: {
        type: String,
        alias: "product_id"
    },
    product_name: String,
    product_category: String,
    currency: String,
    product_cost: Number,
    product_rating: Number, // 1-5
    product_desc: String,
    product_specs: [{key: String}], // Need to think about it and fix this
    product_images: [{
        url: String,
        alt: String
    }], //
    product_branch: String,
    product_num_of_reviews: Number,
    product_num_of_wishlist: Number
});

const reviewSchema = new Schema({
    _id: {
        type: String,
        alias: "review_id"
    },
    title: String,
    user_id: String,
    product_id: String,
    is_verified: Boolean,
    product_rating: Number,
    review_text: String
});

const User = mongoose.model('User', userSchema);
const Product = mongoose.model('Product', productSchema);
const Review = mongoose.model('Review', reviewSchema);

module.exports = {User, Product, Review};
