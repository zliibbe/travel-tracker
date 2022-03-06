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
    
    getTrips(travelerID, trips) {
        return trips = trips.reduce((acc, trip) =>{
            if (trip.userID === travelerID){
                acc.push(trip)
            }
            return acc
        }, [])
    }

    getDestinations(tripHx, destinations) {
        return tripHx.reduce((acc, trip) => {
            if (trip.userID === this.id){
                destinations.filter(destination =>{
                    if (trip.destinationID === destination.id){
                        acc.push(destination)
                    }
                })
            }
            return acc
        }, []) 
    }

    annualSpending() {
        
    }
}
export default Traveler;