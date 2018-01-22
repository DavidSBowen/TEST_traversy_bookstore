var mongoose = require('mongoose');

var StringRequiredModel = {type:String,required:true};

var BookSchema = mongoose.Schema({
    title:StringRequiredModel,
    genre:StringRequiredModel,
    description:StringRequiredModel,
    author:StringRequiredModel,
    publisher:StringRequiredModel,
    pages:{
        type: Number,
        required: false
    },
    image_url:StringRequiredModel,
    buy_url:StringRequiredModel
});

// Set variable for exports
var Book = module.exports = mongoose.model('book', BookSchema);

// Get books
module.exports.getBooks = (cb, limit) => {
    Book.find(cb).limit(limit);
};

// Get book by id
module.exports.getBookById = (id, cb) => {
    Book.findById(id, cb);
};

module.exports.addBook = (book, cb) => {
    Book.create(book, cb);
};

// Update a book
module.exports.updateBook = (id, book, options, cb) => {
    var query = {_id:id};
    var update = {
        title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages,
        image_url: book.image_url,
        buy_url: book.buy_url
    }
    Book.findOneAndUpdate(query, update, options, cb);
};

// Delete a genre
module.exports.deleteBook = (id, cb) => {
    var query = {_id:id};
    Book.remove(query, cb);
};