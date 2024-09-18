const express = require('express');
const router = express.Router();
const DestinationService = require('../service/DestinationService');


router.get('/', async (req, res) => {
    try {
        const destinations = await DestinationService.getDestinations();
        res.json(destinations);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
