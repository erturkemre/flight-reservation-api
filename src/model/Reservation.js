class Reservation {
    constructor(data){
        this.flightId = data.flightId;
        this.userId = data.userId;
        this.seats = data.seats;
        this.reservedAt = new Date();
    }
}

module.exports = Reservation;