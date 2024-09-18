const express = require('express');
const router = express.Router();
const FlightListService = require('../service/FlightListService');


router.get('/', async (req, res) => {
    try {
        const flights = await FlightListService.getFlights(req.query);
        res.json(flights);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


router.get('/:id', async (req, res) => {
    try {
        const flight = await FlightListService.getFlightDetails(req.params.id);
        res.json(flight);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
