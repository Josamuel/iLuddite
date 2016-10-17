const express = require('express');
const path = require('path');
// const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');

const routes = require('./routes/index');
const users = require('./routes/users');
const books = require('./routes/books');
const auth = require('./routes/auth');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use(session({secret: 'booksyall'}));

require('./config/passport')(app);

app.use('/', routes);
app.use('/users', users);
app.use('/books', books);
app.use('/auth', auth);

// 404 catcher
app.use((req, res, next) => {
  let err = new Error(`404: ${req.originalUrl} Not Found`);
  err.status = 404;
  next(err);
});

// TODO - implement more error handlers

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

module.exports = app;
