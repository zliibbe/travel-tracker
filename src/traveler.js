import Trip from './trip';
import Destination from './destination';
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
    
    getUsersTrips(tripData) {
        return tripData.reduce((acc, trip) =>{
            if (trip.userID === this.id){
                acc.push(new Trip(trip))
            }
            return acc
        }, [])
    }

    getUsersDestinations(destinationData) {
        return this.trips.reduce((acc, trip) => {
            if (trip.userID === this.id){
                destinationData.filter(place =>{
                    if (trip.destinationID === place.id){
                        acc.push(new Destination(place))
                    }
                })
            }
            return acc
        }, []) 
    }

    
}
export default Traveler;