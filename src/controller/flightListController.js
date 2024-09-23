const express = require('express');
const router = express.Router();
const FlightListService = require('../service/FlightListService');
const Flight = require('../model/Flight');
const { default: axios } = require('axios');

router.get('/', async (req, res) => {
    try {
        const flightDataList = await FlightListService.getEnrichedFlights(req.query);
        if (!Array.isArray(flightDataList)) {
            return res.status(500).send('Invalid data format');
        }
        //const flights = flightDataList.map(flightData => new Flight(flightData));
        //res.json(flights);
        res.json(flightDataList);
    } catch (error) {
        res.status(500).send(error.message);
    }
}); 





 

router.get('/:id', async (req, res) => {
    try {
        const flightData = await FlightListService.getFlightDetails(req.params.id);
        //const flight = new Flight(flightData);
        //res.json(flight);
        res.json(flightData);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
