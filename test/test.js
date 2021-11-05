var User = require('../database/database')
var mongoose = require('mongoose');
var password = 'binkbonk123'
mongoose.connect('mongodb+srv://karanh:' + password + '@test-db.ymyhm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

console.log(User)

var mayank = new User({
    _id: "Mayank47",
    pass_hash: "binkbonk123",
    delivery_addr: "harayana",
    ordered_items: [],
    wishlisted_items: [],
    cart_items: [],
})

mayank.save(function (error, data) {
    if (error) {
        console.error(error);
    }
    else {
        console.log("success " + data);
    }
})