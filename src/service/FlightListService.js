const apiClient = require('../utils/apiClient');
const AirlineService = require('./AirlineService');
const DestinationService = require('./DestinationService'); 
const AircraftTypeService = require('./AircraftTypeService'); 


const getFlights = async (query = {}) => {
    try {
        const response = await apiClient.get('/flights', {
            params: {
                includedelays: 'false',
                page: query.page || 0,
                sort: query.sort || '+scheduleTime',
                scheduleDate: query.scheduleDate || new Date().toISOString().split('T')[0],
                scheduleTime: query.scheduleTime,
                flightName: query.flightName,
                flightDirection: query.flightDirection,
                airline: query.airline,
                airlineCode: query.airlineCode,
                route: query.route,
                fromDateTime: query.fromDateTime,
                toDateTime: query.toDateTime,
                searchDateTimeField: query.searchDateTimeField,
                fromScheduleDate: query.fromScheduleDate,
                toScheduleDate: query.toScheduleDate,
                isOperationalFlight: query.isOperationalFlight
        }});

        return response.data.flights || []; 
    } catch (error) {
        throw new Error(`Error fetching flights: ${error.message}`);
    }
};

const getEnrichedFlights = async (query = {}) => {
    try {
        const flightsData = await getFlights(query);
        const enrichedFlights = await Promise.all(flightsData.map(async (flight) => {
            let airline, destination, aircraftType;

            
            try {
                airline = await AirlineService.getAirlineByCode(flight.prefixIATA);
            } catch (error) {
                console.error(`Error fetching airline for code ${flight.prefixIATA}: ${error.message}`);
            }

            
            try {
                destination = await DestinationService.getDestinationByCode(flight.route.destinations[0]);
            } catch (error) {
                console.error(`Error fetching destination for code ${flight.route.destinations[0]}: ${error.message}`);
            }

            
            try {
                aircraftType = await AircraftTypeService.getAircraftTypes(flight.aircraftType.iataSub);
            } catch (error) {
                console.error(`Error fetching aircraft type for code ${flight.aircraftType.iataSub}: ${error.message}`);
            }

            return {
                ...flight,
                airlineName: airline ? airline : "Unknown Airline",
                destinationName: destination ? destination : "Unknown Destination",
                aircraftDescription: aircraftType ? aircraftType : "Unknown Aircraft",
            };
        }));

        return enrichedFlights;
    } catch (error) {
        throw new Error(`Error fetching and enriching flights: ${error.message}`);
    }
};



const getFlightDetails = async (flightId) => {
    try {
        const response = await apiClient.get(`/flights/${flightId}`);
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching flight details: ${error.message}`);
    }
};

module.exports = {
    getFlights,
    getFlightDetails,
    getEnrichedFlights
};
