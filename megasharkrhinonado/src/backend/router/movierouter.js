const router = require("express").Router();
const Movie = require('../model/movie');

router.get('/movies/getAll', async(request, response, next) => {
    response.status(200).json(await Movie.find());
});

router.get('/movies/get/:id', async(request, response, next) => {
    const id = request.params.id;
    const movie = await Movie.findById(id);

    if (movie) {
        return response.json(await Movie.findById(id));
    } else {
        return next ({
            statusCode: 404,
            message: `Movie with id:${id} not found`
        });
    }
});

router.post('/movies/post', async(request, response, next) => {
    try {
        if (Object.keys(request.body).length == 0) return next ({
            statusCode: 400,
            message: `Body cannot be empty`
        });
        
        const newMovie = new Movie(request.body);
        await newMovie.save();
        response.status(201).json(newMovie);
    } catch (err) {
        next (err);
    }    
});

router.put('/movies/put/:id', async(request, response, next) => {
    try {
        if (Object.keys(request.body).length == 0) return next ({
            statusCode: 400,
            message: `Body cannot be empty`
        });

        const movie = await Movie.updateOne({ _id: request.params.id }, request.body);

        if (movie) {
            return response.status(200).json(await Movie.findById(request.params.id));
        } else {
            return next ({
                statusCode: 404,
                message: `Movie with id:${id} not found`
            });
        }
    } catch (err) {
        next(err);
    }
});

router.delete('/movies/delete/:id', async(request, response, next) => {
    const movie = await Movie.findByIdAndDelete(request.params.id);

    if (movie) {
        return response.status(200).json(movie);
    } else {
        return next ({
            statusCode: 404,
            message: `Movie with id:${id} not found`
        });
    }
});

module.exports = router;