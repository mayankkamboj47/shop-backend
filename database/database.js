var mongoose = require('mongoose');
var password = 'thisisthepassword'
mongoose.connect('mongodb+srv://root:'+password+'@cluster0.fhdc1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const passportLocalMongoose = require('passport-local-mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username : String,
    password: String,
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
userSchema.plugin(passportLocalMongoose);

const productSchema = new Schema({
    _id: {
        type: String,
        alias: "product_id"
    },
    product_name: String,   //
    product_desc: String,   //
    product_category: [String],   //
    product_images: [{  //
        url: String,
        alt: String
    }], //
    product_cost: Number,   //
    product_rating: Number, // 1-5
    product_num_of_reviews: Number,
    product_num_of_wishlist: Number
});

const reviewSchema = new Schema({
    title: String,
    username: String,
    product_id: String,
    is_verified: Boolean,
    product_rating: Number,
    review_text: String
});

const User = mongoose.model('User', userSchema);
const Product = mongoose.model('Product', productSchema);
const Review = mongoose.model('Review', reviewSchema);

module.exports = {User, Product, Review};
