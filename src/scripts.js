import './css/base.scss';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/favicon.png'
import {fetchDataFor} from './apiCalls'
import Traveler from './traveler'

//variable initiation
let user
let traveler
let travelers
let destinations
let trips

//querySelectors


// function declaration
const getAllData = () => {
    return Promise.all([fetchDataFor(`travelers`), 
                        fetchDataFor('destinations'), 
                        fetchDataFor('trips')])
    .then(data => {
        travelers = data[0].travelers;
        destinations = data[1].destinations;
        trips = data[2].trips;
        user = getByID(travelers, '1')
        console.log(user, "<<USER")
    })
}

const getByID = (travelers, id) => {
    return travelers.find(traveler => {
        if (parseInt(id) === traveler.id) {
            return traveler
        }
    })
}

const getTrips = (trips) => {
    // live on traveler??
}

//eventListeners 
window.addEventListener('load', getAllData());
