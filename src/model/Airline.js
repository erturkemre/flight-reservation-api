class Airline {
    constructor(data) {
        this.iata = data.iata;
        this.icao = data.icao;
        this.nvls = data.nvls;
        this.publicName = data.publicName;
    }
}

module.exports = Airline;
