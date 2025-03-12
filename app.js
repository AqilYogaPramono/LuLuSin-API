var express = require('express');
var path = require('path');
var logger = require('morgan');
var dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})

module.exports = app;