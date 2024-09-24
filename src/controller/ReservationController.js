const express = require('express');
const router = express.Router();
const ReservationService = require('../service/ReservationService');

router.post('/', async (req, res) => {
    try {
        
        const { flight, userId } = req.body;
        console.log('Received flight:', flight);
        console.log('Received userId:', userId);
    
        if (!flight || !userId) {
            return res.status(400).json({ message: 'Flight and userId are required' });
        }

        const reservation = await ReservationService.createReservation({ flight, userId });
        res.status(201).json(reservation);
    } catch (error) {
        res.status(500).json({ error: error.message });
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