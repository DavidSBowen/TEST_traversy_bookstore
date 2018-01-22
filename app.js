var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
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

app.put('/api/genres/:_id', (req, res) => {
    var id = req.params._id;
    var genre = req.body;
    Genre.updateGenre(id, genre, {}, (err, gen) => {
        if (err) {
            throw (err);
        } else {
            res.json(gen);
        }
    });
});

app.delete('/api/genres/:_id', (req, res) => {
    var id = req.params._id;
    Genre.deleteGenre(id, (err, g) => {
        if (err) {
            throw (err);
        } else {
            res.json(g);
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

app.put('/api/books/:_id', (req, res) => {
    var id = req.params._id;
    var book = req.body;
    Book.updateBook(id, book, {}, (err, b) => {
        if (err) {
            throw (err);
        } else {
            res.json(b);
        }
    });
});

app.delete('/api/books/:_id', (req, res) => {
    var id = req.params._id;
    Book.deleteBook(id, (err, b) => {
        if (err) {
            throw (err);
        } else {
            res.json(b);
        }
    });
});

app.listen(3000);

console.log(`App listening on port 3000`);

    // Console log every key/value of req
    // Only for testing/curiosity
    // for (const i of Object.keys(req)) {
    //     if (req.hasOwnProperty(i)) {
    //         console.log(i, req[i]);
    //     }
    // }