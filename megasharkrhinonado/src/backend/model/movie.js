const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Added error responses for testing purposes
const MOVIE_SHOWINGS_SCHEMA = new Schema({
    date: {
        type: String,
        message: "{VALUE} is not supported",
        required: [true, "Date is required"]
    },
    time: {
        type: String,
        message: "{VALUE} is not supported",
        required: [true, "Time is required"]
    }
});

const MOVIE_REVIEW_SCHEMA = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    comment: {
        type: String,
        max: [200, "Comment can be no longer than 200 characters"]
    },
    numberRating: {
        type: String,
        enum: ["1", "2", "3", "4", "5"],
        message: "{VALUE} is not supported. Must be a Number between 1 and 5",
        required: [true, "Rating is required"]
    }
})

const MOVIE_SCHEMA = new Schema({
    movieTitle: {
        type: String,
        required: [true, "Movie Title is required"]
    },
    rating: {
        type: String,
        enum: ["U", "PG", "12A", "12", "15", "18"],
        required: [true, "Movie rating is required: U, PG, 12A, 12, 15, 18"]
    },
    description: {
        type: String,
        max: 250,
        min: 10,
        required: [true, "Movie description is required"]
    },
    movieImage: {
        type: String,
        required: [true, "Movie Image is required"]
    },
    actors: {
        type: [String],
        required: [true, "Movie actors are required"]
    },
    directors: {
        type: [String],
        required: [true, "Movie directors are required"]
    },
    releaseDate: {
        type: Date,
        required: [true, "Movie release date is required"]

    },
    runtime: {
        type: String,
        required: [true, "Movie runtime is required"]
    },
    movieShowings: [MOVIE_SHOWINGS_SCHEMA],
    movieReviews: [MOVIE_REVIEW_SCHEMA]
});

const Movie = mongoose.model('Movie', MOVIE_SCHEMA);
module.exports = Movie;