const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const flightController = require("./controller/flightListController");
const airlineController = require('./controller/AirlineController');
const aircraftTypeController = require('./controller/AircraftTypeController');
const destinationController = require('./controller/DestinationController');
const reservationController = require('./controller/ReservationController');

const app = express();

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  };
  
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/flights', flightController);
app.use('/api/airlines', airlineController);
app.use('/api/aircraft-types', aircraftTypeController);
app.use('/api/destinations', destinationController);
app.use('/api/reservations', reservationController);


mongoose.connect('mongodb://localhost:27017/flight_reservation', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
