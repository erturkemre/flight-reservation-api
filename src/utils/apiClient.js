const axios = require('axios');


const apiClient = axios.create({
    baseURL: 'https://api.schiphol.nl/public-flights', 
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'app_id': '1839141d',       
        'app_key': '5248295d0dd6bf73742379241dbad3f1',   
        'ResourceVersion': 'v4'
    }
});

module.exports = apiClient;
