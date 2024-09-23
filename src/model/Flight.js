class Flight {
    constructor(data) {
        // Uçuş bilgileri
        this.flightNumber = data.flightNumber; // Uçuş numarası
        this.flightName = data.flightName; // Uçuş adı
        this.estimatedLandingTime = data.estimatedLandingTime; // Tahmini iniş saati
        this.expectedTimeBoarding = data.expectedTimeBoarding; // Tahmini biniş saati
        this.departureAirport = data.departureAirport; // Kalkış havalimanı kodu
        this.arrivalAirport = data.arrivalAirport; // Varış havalimanı kodu

        // Uçak bilgileri
        this.aircraftType = {
            iataMain: data.aircraftType.iataMain, // Ana IATA kodu
            iataSub: data.aircraftType.iataSub  // Alt IATA kodu
        };

        // Havayolu kodu
        this.airlineCode = data.airlineCode; // Havayolu kodu

        // Uçuş yönü
        this.flightDirection = data.flightDirection; // Uçuş yönü (örn. "A" çıkış, "B" varış)

        // Rota bilgileri
        this.route = {
            destinations: data.route.destinations || [] // Uçuşun varış noktalarının listesi
        };


    }
}

module.exports = Flight;
