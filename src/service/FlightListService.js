const apiClient = require('../utils/apiClient');


const getFlights = async (query) => {
    try {
        
        const response = await apiClient.get('/flights', {
            params: {
                includedelays: 'false',
                page: query.page || 0,
                sort: query.sort || '+scheduleTime',
                ...query 
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching flights: ${error.message}`);
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
    getFlightDetails
};
