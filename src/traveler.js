class Traveler {
    constructor(traveler) {
        this.id = traveler.id
        this.name = traveler.name
        this.type = traveler.travelerType
        this.trips = []
    }

    getFirstName() {
        let fullName = this.name.split(' ')
        return fullName[0]
    }
    
    // getTrips(travelerID) {
    //     
    // }

    getDestinations(travelerID) {

    }
}

export default Traveler;