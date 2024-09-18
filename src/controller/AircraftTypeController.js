const express = require('express');
const router = express.Router();
const AircraftTypeService = require('../service/AircraftTypeService');


router.get('/', async (req, res) => {
    try {
        const aircraftTypes = await AircraftTypeService.getAircraftTypes();
        res.json(aircraftTypes);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
