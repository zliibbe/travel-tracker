import './css/base.scss';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/favicon.png'
import {fetchDataFor} from './apiCalls'
import Traveler from './traveler'
import Trip from './trip'
import Destination from './destination';
import domUpdates from './domUpdates';

//variable initiation
let user
let travelers
let destinations
let trips
let userDestinations

//querySelectors
const tripList = document.querySelector('.trip-list')


// function declaration
const getAllData = () => {
    return Promise.all([fetchDataFor(`travelers`), 
                        fetchDataFor('destinations'), 
                        fetchDataFor('trips')])
    .then(data => {
        travelers = data[0].travelers;
        destinations = data[1].destinations;
        trips = data[2].trips;
        user = new Traveler(getByID(travelers, '1'))
        user.trips = user.getTrips(user.id, trips)
        userDestinations = user.getDestinations(user.trips, destinations)
        console.log(userDestinations)//<instantiate destination class with this data
        // PSEUDO: display each destination on page
        // NEED HTML structure to do that... |Do that and come back to here...
        // ...THEN build out annualSpending in Traveler Class
    })
}

const getByID = (travelers, id) => {
    return travelers.find(traveler => {
        if (parseInt(id) === traveler.id) {
            return traveler
        }
    })
}


//eventListeners 
window.addEventListener('load', getAllData());
