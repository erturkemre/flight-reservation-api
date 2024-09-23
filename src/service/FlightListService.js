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
                ...query
            }
        });

        return response.data.flights || []; 
    } catch (error) {
        throw new Error(`Error fetching flights: ${error.message}`);
    }
};

const getEnrichedFlights = async (query = {}) => {
    try {
        const flightsData = await getFlights(query);
        
        const enrichedFlights = await Promise.all(flightsData.map(async flight => {
            const airline = await AirlineService.getAirlineByCode(flight.prefixIATA);
            const destination = await DestinationService.getDestinationByCode(flight.route.destinations[0]);
            const aircraftType = await AircraftTypeService.getAircraftTypes(flight.aircraftType.iataSub);

            return {
                ...flight,
                airlineName: airline ? airline : "Unknown Airline",
                destinationName: destination ? destination : "Unknown Destination",
                aircraftDescription: aircraftType ? aircraftType.longDescription : "Unknown Aircraft",
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
