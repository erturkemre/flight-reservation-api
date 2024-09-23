const express = require('express');
const router = express.Router();


router.post('/', async (req, res) => {
    try {
        const { flightId, userId, seats } = req.body;
        const result = await ReservationService.createReservation({ flightId, userId, seats });
        res.status(201).json({ message: 'Reservation successful', reservation: result });
    } catch (error) {
        res.status(500).json({ message: 'Error making reservation', error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const reservations = await ReservationService.getAllReservation();
        res.json(reservations);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;