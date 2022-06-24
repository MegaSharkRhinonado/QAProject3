const router = require('express').Router();
const Booking = require('../model/booking');

router.get('/bookings/getAll', async (request, response, next) => {
    response.status(200).json(await Booking.find());
});

router.get('/bookings/get/:id', async (request, response, next) => {
    const id = request.params.id;
    const booking = await Booking.findById(id);

    if (booking) {
        return response.json(await Booking.findById(id));
    } else {
        return next({
            statusCode: 404,
            message: `Booking with id:${id} not found`
        });
    }
});

router.get('/bookings/get/:movieTitle/:date/:time', async (request, response, next) => {
    const booking = await Booking.find({ movieTitle: request.params.movieTitle, date: request.params.date, time: request.params.time });
    console.log(booking);
    if (booking) {
        return response.json(await Booking.find({ movieTitle: request.params.movieTitle, date: request.params.date, time: request.params.time }));
    } else {
        return next({
            statusCode: 404,
            message: `Booking with that Movie Title, Time and Date not found`
        });
    }
});

router.post('/bookings/post', async (request, response, next) => {
    try {
        if (Object.keys(request.body).length == 0) return next({
            statusCode: 400,
            message: `Body cannot be empty`
        });

        const newBooking = new Booking(request.body);
        await newBooking.save();
        response.status(201).json(newBooking);
    } catch (err) {
        next(err);
    }
});

router.put('/bookings/put/:id', async (request, response, next) => {
    try {
        if (Object.keys(request.body).length == 0) return next({
            statusCode: 400,
            message: `Body cannot be empty`
        });

        const booking = await Booking.updateOne({ _id: request.params.id }, request.body);

        if (booking) {
            return response.status(200).json(await Booking.findById(request.params.id));
        } else {
            return next({
                statusCode: 404,
                message: `Booking with id:${id} not found`
            });
        }
    } catch (err) {
        next(err);
    }
});

router.delete('/bookings/:id', async (request, response, next) => {
    const booking = await Booking.findByIdAndDelete(request.params.id);

    if (booking) {
        return response.status(200).json(booking);
    } else {
        return next({
            statusCode: 404,
            message: `Booking with id:${id} not found`
        });
    }
});

module.exports = router;