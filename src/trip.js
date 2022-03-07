
class Trip {
    constructor(tripObj, destinationsData) {
        this.id = tripObj.id
        this.userID = tripObj.userID
        this.destinationID = tripObj.destinationID
        this.travelers = tripObj.travelers
        this.date = tripObj.date
        this.duration = tripObj.duration
        this.status = tripObj.status
        this.suggestedActivities = tripObj.suggestedActivities
        this.cost = this.costOfTrip(destinationsData)
    }

    findDestination(destinationsData) {
        // console.log(destinationsData, "destinationsData###")
        // console.log(destinationsData, "DestData(in trip.js)")
        return destinationsData.find(destination => destination.id === this.destinationID)
    }

    costOfTrip(destinationData) {
        const destinationObj = this.findDestination(destinationData)
        const flightCost = destinationObj.estimatedFlightCostPerPerson * this.travelers
        const lodgingCost = destinationObj.estimatedLodgingCostPerDay * this.duration * this.travelers
        // console.log(destinationObj, flightCost, lodgingCost, "destination | flightCost | lodingCost")
        return Math.round(1.1 * (flightCost + lodgingCost))
    }
}

export default Trip;