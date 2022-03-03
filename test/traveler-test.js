import chai from 'chai';
const expect = chai.expect;

describe('Traveler', function() {
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
      });

    it('should be a function', () => {
        expect(Traveler).to.be.a('function')
    })

    it('should instantiate Traveler', () => {
        expect(traveler1).to.be.an.instanceOf(Traveler);
    });

    it('should have an id', () => {
        expect(traveler1.id).to.eql(1)
        expect(traveler2.id).to.eql(2)
    })

    it('should have a name', () => {
        expect(traveler1.name).to.eql('Ham Leadbeater')
        expect(traveler2.name).to.eql('Rachael Vaughten')
    })

    it('should have a type', () => {
        expect(traveler1.type).to.eql('relaxer')
        expect(traveler2.type).to.eql('thrill-seeker')
    })

    it('should start with an empty array of trips', () => {
        expect(traveler1.trips).to.eql([])
        expect(traveler1.trips).to.eql([])
    })

    it('should be able to return just the travelers first name', () => {
        expect(traveler1.getFirstName()).to.equal('Ham')
    })

    it('should be able to get traveler by ID', () => {
        expect(traveler1.getByID()).to.equal(1)
        expect(traveler2.getByID()).to.equal(2)
    })
})