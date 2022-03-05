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
    
    getTrips(trips, travelerID) {
        return trips = trips.reduce((acc, trip) =>{
            if (trip.userID === travelerID){
                console.log(trip, "inside IF")
                acc.push(trip)
            }
            return acc
        }, [])
    }

    // getDestinations(travelerID) {

    // }
}

export default Traveler;