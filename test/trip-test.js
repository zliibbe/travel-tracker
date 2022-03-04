import chai from 'chai';
import Traveler from '../src/traveler'
import Trip from '../src/trip';
const expect = chai.expect;

describe('Trip', function() {
    let traveler1
    let traveler2
    let travelerOneData
    let travelerTwoData

    beforeEach(() => {
        travelerOneData = {
            "id": 1,
            "name": "Ham Leadbeater",
            "travelerType": "relaxer"
            };
        travelerTwoData = {
            "id": 2,
            "name": "Rachael Vaughten",
            "travelerType": "thrill-seeker"
            };

        traveler1 = new Traveler(travelerOneData)
        traveler2 = new Traveler(travelerTwoData)

        tripData =  {
                "id": 71,
                "userID": 38,
                "destinationID": 28,
                "travelers": 1,
                "date": "2020/05/26",
                "duration": 11,
                "status": "pending",
                "suggestedActivities": []
                }
        trip1 = new Trip(tripData)
        
      });

    it.skip('should be a function', () => {
        expect(Traveler).to.be.a('function')
    })

    it.skip('should have a trip id', () => {
        expect(trave.id).to.eql(71)
    })

    it.skip('should have a userID of the person going on the trip', () => {
        expect(trip.userID).to.eql(38)
    })

    it.skip('should have an destinationID for the location that the trip is going to', () => {
        expect(trip.destinationID).to.eql(28)
    })

    it.skip('should have a number of travelers that are going on the trip', () => {
        expect(trip.travelers).to.eql(1)
    })

    it.skip('should have a date that the trip starts on', () => {
        expect(trip.date).to.eql("2020/05/26")
    })

    it.skip('should have a duration', () => {
        expect(trip.duration).to.eql(11)
    })

    it.skip('should have a status', () => {
        expect(trip.status).to.eql("pending")
    })
})