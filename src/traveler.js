import Trip from './trip';
import Destination from './destination';
import dayjs from 'dayjs';
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
    //use this to get array of Trips
    getUsersTrips(tripsData, destinationsData) {
        return tripsData.reduce((acc, trip) =>{
            if (trip.userID === this.id){
                acc.push(new Trip(trip, destinationsData))
                // console.log(trip, "<<<trip from getUsersTrip in traveler.js")
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

    annualSpent(){
        let annualCost = this.trips.reduce((totalCost, trip) => {
            if (trip.status === "approved" && trip.date.includes(dayjs().format("YYYY"))){
                totalCost += trip.cost
            }
            return totalCost
        }, 0)
       
        let cost = Math.ceil(annualCost).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          });
        return cost
    }
}
export default Traveler;