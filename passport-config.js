const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose')
var password = 'thisisthepassword'
mongoose.connect('mongodb+srv://root:'+password+'@cluster0.fhdc1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
var {User, Product} = require('./database/database');

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());