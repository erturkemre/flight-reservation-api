const apiClient = require('../utils/apiClient');

const getDestinations = async () => {
    try {
        const response = await apiClient.get('/destinations');
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching destinations: ${error.message}`);
    }
};

module.exports = {
    getDestinations
};
