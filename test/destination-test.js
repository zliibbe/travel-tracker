import chai from 'chai';
const expect = chai.expect;
import Destination from '../src/destination'

describe('Destination', function() {
    let destination1;
    let destination2;
    let destinationData1;
    let destinationData2;

    beforeEach(() => {
        destinationData1 = {
            "id": 1,
            "destination": "Lima, Peru",
            "estimatedLodgingCostPerDay": 70,
            "estimatedFlightCostPerPerson": 400,
            "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
            "alt": "overview of city buildings with a clear sky"
            };
        destinationData2 = {
            "id": 2,
            "destination": "Stockholm, Sweden",
            "estimatedLodgingCostPerDay": 100,
            "estimatedFlightCostPerPerson": 780,
            "image": "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            "alt": "city with boats on the water during the day time"
            };
        destination1 = new Destination(destinationData1)
        destination2 = new Destination(destinationData2)
      });

    it('should be a function', () => {
        expect(Destination).to.be.a('function');
    })

    it('should instantiate Destination', () => {
        expect(destination1).to.be.an.instanceOf(Destination);
    });

    it('should have a destination id', () => {
        expect(destination1.id).to.eql(1);
    })

    it('should have an destination', () => {
        expect(destination1.destination).to.eql("Lima, Peru");
    })

    it('should have an estimated lodging cost per day in dollars', () => {
        expect(destination1.estimatedLodgingCostPerDay).to.eql(70);
    });

    it('should estimate flight cost per person in dollars', () => {
        expect(destination1.estimatedFlightCostPerPerson).to.eql(400);
    });

    it('should have an image contained in a URL', () => {
        expect(destination1.image).to.eql("https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80");
    })

    it('should have an alt tag for image', () => {
        expect(destination1.alt).to.eql("overview of city buildings with a clear sky");
    })
})