const apiClient = require('../utils/apiClient');


const getAirlines = async () => {
    try {
        const response = await apiClient.get('/airlines');
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching airlines: ${error.message}`);
    }
};

module.exports = {
    getAirlines
};
