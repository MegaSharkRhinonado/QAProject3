const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const movierouter = require('./router/movierouter');
const bookingrouter = require('./router/bookingrouter');

const DATABASE = 'megasharkrhinonado';
const DB_URI = `mongodb://localhost:27017/${DATABASE}`;;
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(movierouter);
app.use(bookingrouter);


function main() {
    mongoose.connect(DB_URI, {}, function (err) {
        if (err) {
            throw err;
        } else {
            console.log('Connected to database');
            app.listen(PORT, () => console.log('Up and running'));
        }
    });
}

app.use(function (error, request, response, next) {
    if (error.name === 'ValidationError') error.statusCode = 400;

    response.status(error.statusCode || 500)
            .send(error.message || "Something went wrong...");
});

main();