const Reservation = require('../model/reservationModel');

const createReservation = async ({ flightId, userId, seats }) => {
    try {
        const newReservation = new Reservation({
            flightId,
            userId,
            seats,
            reservedAt: new Date()
        });
        return await newReservation.save();
    } catch (error) {
        throw new Error(`Error saving reservation: ${error.message}`);
    }
};

const getAllReservation = async () => {
    try {
        return await Reservation.find();
    } catch (error) {
        throw new Error(`Error fetching reservations: ${error.message}`);
    }
}

module.exports = {
    createReservation, getAllReservation
};