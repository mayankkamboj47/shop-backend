const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
var {User, Product} = require('./database/database');

require('./passport-config')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products')
var reviewsRouter = require('./routes/reviews')

// Connecting to mayank's database

var password = 'thisisthepassword'
mongoose.connect('mongodb+srv://root:'+password+'@cluster0.fhdc1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

app.use(cors({
  origin : 'http://localhost:3000',
  credentials : true
}));

app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret : 'shush',
  resave : false,
  saveUninitialized : false
}));

app.use(passport.initialize());
app.use(passport.session());

// Redirecting to routers

app.use('/user', usersRouter);
app.use('/products', productsRouter);
app.use('/reviews', reviewsRouter);
app.use('/', indexRouter);

app.listen(process.env.PORT || 3001)

module.exports = app;