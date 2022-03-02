var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
var cors = require('cors');

// ----------------
//*    Routers
// ----------------
var orderRouter = require('./routes/orders');
var usersRouter = require('./routes/users');
var inventoryRouter = require('./routes/inventory');
var gamesRouter = require('./routes/games');
var login = require('./routes/login');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// -------------
//* middlewares
// -------------
app.use(express.static(path.join(__dirname, 'client/build')));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({origin: "https://kakariko-games.herokuapp.com/", credentials: true}));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true,}));

//--------------------
//* App routes/Routers
//--------------------

app.use('/api/orders', orderRouter);
app.use('/api/users', usersRouter);
app.use('/api/inventory', inventoryRouter);
app.use('/api/games', gamesRouter);
app.use('/api/login', login.Router);

app.get('*', function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, 'client/build/')});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


