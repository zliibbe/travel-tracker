import chai from 'chai';
import Traveler from '../src/traveler';
import Trip from '../src/trip';
import dayjs from 'dayjs';
import Destination from '../src/destination';

const expect = chai.expect;

describe('Traveler', function() {
    let travelerOneData
    let travelerTwoData
    let traveler1
    let traveler2
    let tripsData
    let destinationData

    beforeEach(() => {
        travelerOneData = {
            "id": 1,
            "name": "Ham Leadbeater",
            "travelerType": "relaxer"
            };
        travelerTwoData = {
            "id": 14,
            "name": "Ellynn Kyne",
            "travelerType": "history buff"
            }
        traveler1 = new Traveler(travelerOneData)
        traveler2 = new Traveler(travelerTwoData)
        tripsData = [{
            "id": 13,
            "userID": 14,
            "destinationID": 12,
            "travelers": 1,
            "date": "2022/02/12",
            "duration": 11,
            "status": "approved",
            "suggestedActivities": []
        },
        {
            "id": 23,
            "userID": 14,
            "destinationID": 24,
            "travelers": 6,
            "date": "2022/01/02",
            "duration": 18,
            "status": "approved",
            "suggestedActivities": []
        }]
        destinationData = [
            {
            "id": 12,
            "destination": "Wellington, New Zealand",
            "estimatedLodgingCostPerDay": 150,
            "estimatedFlightCostPerPerson": 1200,
            "image": "https://images.unsplash.com/photo-1442483221814-59f7d8b22739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            "alt": "overview of city with buildings, water and trees"
            },
            {
            "id": 24,
            "destination": "Vilnius, Lithuania",
            "estimatedLodgingCostPerDay": 65,
            "estimatedFlightCostPerPerson": 1100,
            "image": "https://images.unsplash.com/photo-1549891472-991e6bc75d1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80",
            "alt": "overhead view of a city with a hot air balloon"
            }
        ]        
      });

    it('should be a function', () => {
        expect(Traveler).to.be.a('function')
    })

    it('should instantiate Traveler', () => {
        expect(traveler1).to.be.an.instanceOf(Traveler);
    });

    it('should have an id', () => {
        expect(traveler1.id).to.eql(1)
    });

    it('should have a name', () => {
        expect(traveler1.name).to.eql('Ham Leadbeater')
    });

    it('should have a type', () => {
        expect(traveler1.type).to.eql('relaxer')
    });

    it('should start with an empty array of trips', () => {
        expect(traveler1.trips).to.be.an('array')
    });

    it('should be able to return just the travelers first name', () => {
        expect(traveler1.getFirstName()).to.equal('Ham')
    })

    it('should have a method to get all the traveler\'s trips and put them in traveler\'s trips array.', () => {
        traveler2.getUsersTrips(tripsData, destinationData);
        expect(traveler2.trips[0]).to.equal({
            "id": 13,
            "userID": 14,
            "destinationID": 12,
            "travelers": 1,
            "date": "2022/02/12",
            "duration": 11,
            "status": "approved",
            "suggestedActivities": []
        });
    });

    it('should have a method to get all the traveler\'s destinations', () => {
        testData = traveler2.getUsersDestinations(destinationData)
        expect(testData[0]).to.equal(
            {
                "id": 12,
                "destination": "Wellington, New Zealand",
                "estimatedLodgingCostPerDay": 150,
                "estimatedFlightCostPerPerson": 1200,
                "image": "https://images.unsplash.com/photo-1442483221814-59f7d8b22739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                "alt": "overview of city with buildings, water and trees"
            });
    });

    it('should have a method to calculate total amount spent on trips this current year that is calculated from trips data and includes a 10% agent\'s fee', () => {
        traveler2.trips = traveler2.getUsersTrips(tripsData, destinationData)
        let traveler2AnnualSpending = traveler2.annualSpent()
        expect(traveler2AnnualSpending).to.equal('$18,117.00')
    });
})
