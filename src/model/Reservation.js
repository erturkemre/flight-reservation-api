const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    flight: {
        type: Object, 
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    reservedAt: {
        type: Date,
        default: Date.now,
    },
});

const Reservation = mongoose.model('Reservation', ReservationSchema);

module.exports = Reservation;
