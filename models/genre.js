var mongoose = require('mongoose');

var GenreSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Genre = module.exports = mongoose.model('genre', GenreSchema);

// Get Genres
module.exports.getGenres = (cb, limit) => {
    Genre.find(cb).limit(limit);
};

// Add a genre
module.exports.addGenre = (genre, cb) => {
    Genre.create(genre, cb);
};

// Update a genre
module.exports.updateGenre = (id, genre, options, cb) => {
    var query = {_id:id};
    var update = {
        name: genre.name
    }
    Genre.findOneAndUpdate(query, update, options, cb);
};

// Delete a genre
module.exports.deleteGenre = (id, cb) => {
    var query = {_id:id};
    Genre.remove(query, cb);
};