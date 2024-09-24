const Reservation = require('../model/Reservation');

const createReservation = async ({ flight, userId }) => {
    try {
        console.log('Received flight:', flight);
        console.log('Received userId:', userId);
        const newReservation = new Reservation({
            flight,
            userId,
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