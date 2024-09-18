class Flight {
    constructor(data) {
        this.flightName = data.flightName; // Uçuş adı
        this.flightNumber = data.flightNumber; // Uçuş numarası
        this.actualLandingTime = data.actualLandingTime; // İniş saati
        this.actualOffBlockTime = data.actualOffBlockTime; // Bloklardan ayrılma saati
        this.estimatedLandingTime = data.estimatedLandingTime; // Tahmini iniş saati
        this.expectedTimeBoarding = data.expectedTimeBoarding; // Tahmini biniş saati
        this.expectedTimeGateClosing = data.expectedTimeGateClosing; // Tahmini kapı kapanış saati
        this.expectedTimeGateOpen = data.expectedTimeGateOpen; // Tahmini kapı açılış saati
        this.expectedTimeOnBelt = data.expectedTimeOnBelt; // Tahmini bagajın döner bandına gelme saati
        this.departureAirport = data.departureAirport; // Kalkış havalimanı kodu
        this.arrivalAirport = data.arrivalAirport; // Varış havalimanı kodu
        this.route = data.route; // Uçuş rotası
        this.airlineCode = data.airlineCode; // Havayolu kodu
    }
}

module.exports = Flight;
