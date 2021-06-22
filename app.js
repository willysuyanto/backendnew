var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var rewardRouter = require('./routes/reward');

var app = express();

const db = require('./models');

db.sequelize.sync({ force: 1 }).then(() => {
    console.log("Database dimuat ulang.");
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/reward', rewardRouter);

module.exports = app;
