const apiClient = require('../utils/apiClient');

const getAircraftTypes = async () => {
    try {
        const response = await apiClient.get('/aircraftTypes');
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching aircraft types: ${error.message}`);
    }
};

module.exports = {
    getAircraftTypes
};