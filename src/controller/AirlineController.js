const express = require('express');
const router = express.Router();
const AirlineService = require('../service/AirlineService');

router.get('/', async (req, res) => {
    try {
        const airlines = await AirlineService.getAirlines();
        res.json(airlines);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
