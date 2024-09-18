const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const flightController = require('./controller/FlightController');
const airlineController = require('./controller/AirlineController');
const aircraftTypeController = require('./controller/AircraftTypeController');
const destinationController = require('./controller/DestinationController');

const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/flights', flightController);
app.use('/api/airlines', airlineController);
app.use('/api/aircraft-types', aircraftTypeController);
app.use('/api/destinations', destinationController);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
