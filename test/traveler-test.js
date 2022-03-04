import chai from 'chai';
import Traveler from '../src/traveler';
const expect = chai.expect;

describe('Traveler', function() {
    let travelerOneData
    let travelerTwoData
    let traveler1
    let traveler2

    beforeEach(() => {
        travelerOneData = {
            "id": 1,
            "name": "Ham Leadbeater",
            "travelerType": "relaxer"
            };
        traveler1 = new Traveler(travelerOneData)
        
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
        expect(traveler1.trips).to.be.an('array')
    });

    it('should be able to return just the travelers first name', () => {
        expect(traveler1.getFirstName()).to.equal('Ham')
    })

    it('should be able to get a traveler by ID', () => {
        expect(traveler1.getByID()).to.equal({
            "id": 1,
            "name": "Ham Leadbeater",
            "travelerType": "relaxer",
            "this.trips": []
            })
    });

    it.skip('should have a method to calculate total amount spent on trips this year which is calculated from trips data and includes a 10% agent\'s fee', () => {

    });
})
