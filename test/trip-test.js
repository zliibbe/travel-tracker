import chai from 'chai';
import {Traveler} from '../src/traveler'
const expect = chai.expect;

describe('Trip', function() {
    let traveler1
    let traveler2

    beforeEach(() => {
        traveler1 = {
            "id": 1,
            "name": "Ham Leadbeater",
            "travelerType": "relaxer"
            };
        traveler2 = {
            "id": 2,
            "name": "Rachael Vaughten",
            "travelerType": "thrill-seeker"
            };
        trip =  {
                "id": 71,
                "userID": 38,
                "destinationID": 28,
                "travelers": 1,
                "date": "2020/05/26",
                "duration": 11,
                "status": "pending",
                "suggestedActivities": []
                }
        
      });

    it('should be a function', () => {
        expect(Traveler).to.be.a('function')
    })

    it('should have an id', () => {
        expect(trip.id).to.eql(71)
    })

    it('should have an id', () => {
        expect(trip.id).to.eql(71)
    })

}