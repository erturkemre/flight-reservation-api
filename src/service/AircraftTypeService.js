const apiClient = require('../utils/apiClient');

const getAircraftTypes = async (iataSub) => {
    try {
        const response = await apiClient.get('/aircrafttypes', {
            params: {
                
                iataSub: iataSub,
                
            },
           
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching aircraft types: ${error.message}`);
    }
};

module.exports = {
    getAircraftTypes
};
