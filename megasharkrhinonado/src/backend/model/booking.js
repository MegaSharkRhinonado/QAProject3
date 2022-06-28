const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SEATID_SCHEMA = new Schema({
    seatID: {
        type: String,
        required: [true, "Seat needs an ID"]
    },
    price: {
        type: Number,
        required: [true, "Seat needs a price"]
    },
    booked: {
        type: Boolean,
        required: [true, "Seat needs a booked value"]
    }
});

const PAYMENT_INFO_SCHEMA = new Schema({
    amount: {
        type: Number,
        required: [true, "Payment needs an amount"]
    },
    paid: {
        type: Boolean
    }
});

const BOOKINGS_SCHEMA = new Schema({
    movieTitle: {
        type: String,
        required: [true, "Booking needs a Movie Title"]
    },
    email: {
        type: String,
        RegExp: "/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/",
        required: [true, "Booking needs an Email"]
    },
    date: {
        type: String,
        required: [true, "Booking needs a Date"]
    },
    time: {
        type: String,
        required: [true, "Booking needs a Time"]
    },
    children: {
        type: Number
    },
    seatID: [SEATID_SCHEMA],
    payment: [PAYMENT_INFO_SCHEMA]
});

const Booking = mongoose.model("Booking", BOOKINGS_SCHEMA);
module.exports = Booking;
