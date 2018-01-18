var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', (req, res) => {
    res.send('Please use /api/books or /api/genres');
});

app.listen(3000);

console.log(`App listening on port 3000`);