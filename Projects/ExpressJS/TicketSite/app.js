var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const sqlite3 = require('sqlite3').verbose(); // Import the sqlite3 library

// Create a new SQLite database or open an existing one
const db = new sqlite3.Database('Ticket.db');
// Read and execute the schema.sql file
const fs = require('fs');
const schemaSql = fs.readFileSync('schema.sql', 'utf8');

// Run the schema creation SQL commands
db.serialize(() => {
  db.exec(schemaSql, (err) => {
    if (err) {
      console.error('Error executing schema:', err.message);
    } else {
      console.log('Schema created successfully.');
    }
  });
});

// Close the database connection
db.close((err) => {
  if (err) {
    console.error('Error closing database:', err.message);
  } else {
    console.log('Database connection closed.');
  }
});

var indexRouter = require('./routes');
var loginRouter = require('./routes/login');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/users', usersRouter);

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
