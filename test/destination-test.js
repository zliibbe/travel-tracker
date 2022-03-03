import chai from 'chai';
const expect = chai.expect;

describe('Traveler', function() {
    let destination1;
    let destination2;

    beforeEach(() => {
        destination1 = {
            "id": 1,
            "destination": "Lima, Peru",
            "estimatedLodgingCostPerDay": 70,
            "estimatedFlightCostPerPerson": 400,
            "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
            "alt": "overview of city buildings with a clear sky"
            };
        destination2 = {
            "id": 2,
            "destination": "Stockholm, Sweden",
            "estimatedLodgingCostPerDay": 100,
            "estimatedFlightCostPerPerson": 780,
            "image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            "alt": "city with boats on the water during the day time"
            };
      });

    it('should be a function', () => {
        expect(Destination).to.be.a('function');
    })

    it('should instantiate Destination', () => {
        expect(destination1).to.be.an.instanceOf(Destination);
    });

    it('should have a destination id', () => {
        expect(destination1.id).to.eql(1);
        expect(destination2.id).to.eql(2);
    })

    it('should have an destination', () => {
        expect(destination1.id).to.eql("Lima, Peru");
        expect(destination2.id).to.eql("Stockholm, Sweden");
    })

    it('should have an estimated lodging cost per day in dollars', () => {
        expect(destination1.estimatedLodgingCostPerDay).to.eql(70);
        expect(destination2.estimatedLodgingCostPerDay).to.eql(100);
    });

    it('should estimate flight cost per person in dollars', () => {
        expect(destination1.estimatedLodgingCostPerDay).to.eql(400);
        expect(destination2.estimatedLodgingCostPerDay).to.eql(780);
    });

    it('should have an image contained in a URL', () => {
        expect(destination1.image).to.eql("https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80");
    })

    it('should have an alt tag for image', () => {
        expect(destination1.alt).to.eql("city with boats on the water during the day time");
    })
})