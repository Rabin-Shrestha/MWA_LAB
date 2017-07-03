var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var validator=require('express-validator');
var index = require('./routes/index');
var users = require('./routes/users');
var news=require('./routes/newsletter');
var thankyou=require('./routes/thankyou');
var csrf=require('csurf');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));

// For validation purpose
app.use(validator());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//for security token
app.use(csrf({cookie:true}));

app.use('/', index);
app.use('/users', users);
app.use('/newsletter',news);
app.use('/thankyou',thankyou);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development\
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(5000);

module.exports = app;
