import chai from 'chai';
import Traveler from '../src/traveler'
import Trip from '../src/trip';
import Destination from '../src/destination';
const expect = chai.expect;

describe('Trip', function() {
    let travelerOneData
    let travelerTwoData
    let traveler1
    let traveler2
    let tripData
    let trip1
    let destination1

    beforeEach(() => {
        travelerOneData = {
            "id": 1,
            "name": "Ham Leadbeater",
            "travelerType": "relaxer"
            };
        
        traveler1 = new Traveler(travelerOneData)

        tripData =  {
                "id": 71,
                "userID": 38,
                "destinationID": 28,
                "travelers": 1,
                "date": "2020/05/26",
                "duration": 11,
                "status": "pending",
                "suggestedActivities": []
                };

        destination1 = new Destination()

        trip1 = new Trip(tripData, destination1)  
    });

    it('should be a function', () => {
        expect(Traveler).to.be.a('function')
    })

    it('should have a trip id', () => {
        expect(tripData.id).to.eql(71)
    })

    it('should have a userID of the person going on the trip', () => {
        expect(trip1.userID).to.eql(38)
    })

    it('should have an destinationID for the location that the trip is going to', () => {
        expect(trip1.destinationID).to.eql(28)
    })

    it('should have a number of travelers that are going on the trip', () => {
        expect(trip1.travelers).to.eql(1)
    })

    it('should have a date that the trip starts on', () => {
        expect(trip1.date).to.eql("2020/05/26")
    })

    it('should have a duration', () => {
        expect(trip1.duration).to.eql(11)
    })

    it('should have a status', () => {
        expect(trip1.status).to.eql("pending")
    })

    it.skip('should be able to find a destination', () => {

    })

    it.skip('should be able to calculate the cost of a trip with 10% fee added', () => {

    })
})