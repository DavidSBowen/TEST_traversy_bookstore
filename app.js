var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

var Genre = require('./models/genre');
var Book = require('./models/book');

// Start server
// ~/Mongo/bin/mongod --dbpath ~/Mongo/data/db

// Connect to server
// mongo --host 127.0.0.1:27017

//connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', (req, res) => {
    res.send('Please use /api/books or /api/genres');
});

app.get('/api/genres', (req, res) => {

    // Console log every key/value of req
    // Only for testing/curiosity
    // for (const i of Object.keys(req)) {
    //     if (req.hasOwnProperty(i)) {
    //         console.log(i, req[i]);
    //     }
    // }

    Genre.getGenres((err, genres) => {
        if (err) {
            throw (err);
        } else {
            res.json(genres);
        }
    });
});

app.post('/api/genres', (req, res) => {

    var genre = req.body;
    Genre.addGenre(genre, (err, genre) => {
        if (err) {
            throw (err);
        } else {
            res.json(genre);
        }
    });
});

app.put('/api/genres/:id', (req, res) => {

    var genre = req.body;
    Genre.addGenre(genre, (err, genre) => {
        if (err) {
            throw (err);
        } else {
            res.json(genre);
        }
    });
});

app.get('/api/books', (req, res) => {
    Book.getBooks((err, books) => {
        if (err) {
            throw (err);
        } else {
            res.json(books);
        }
    });
});

app.get('/api/books/:_id', (req, res) => {
    Book.getBookById(req.params._id, (err, book) => {
        if (err) {
            throw (err);
        } else {
            res.json(book);
        }
    });
});

app.post('/api/books', (req, res) => {

    var book = req.body
    Book.addBook(book, (err, book) => {
        if (err) {
            throw (err);
        } else {
            res.json(book);
        }
    });
});

app.listen(3000);

console.log(`App listening on port 3000`);