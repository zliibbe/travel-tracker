import './css/base.scss';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/favicon.png'
import {fetchDataFor} from './apiCalls'
import Traveler from './traveler'

//variable initiation
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
        travelers = data[0];
        destinations = data[1];
        trips = data[2];
        console.log(travelers, "<traveleres")
    })
}

const getByID = (travelers, id) => {
    return travelers.find(user => {
        if (id === user.id) {
            console.log(user)
            return user
        }
    })
}

const getTrips = (trips) => {
    // live on traveler??
}

//eventListeners 
window.addEventListener('load', getAllData());
