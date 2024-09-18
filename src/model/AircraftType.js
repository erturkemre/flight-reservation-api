class AircraftType {
    constructor(data) {
        this.iataMain = data.iataMain;
        this.iataSub = data.iataSub;
        this.longDescription = data.longDescription;
        this.shortDescription = data.shortDescription;
    }
}

module.exports = AircraftType;
