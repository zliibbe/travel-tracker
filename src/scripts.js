import './css/base.scss';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/favicon.png'
import {fetchDataFor} from './apiCalls'
import Traveler from './traveler'
import Trip from './trip'
import Destination from './destination';
import domUpdates from './domUpdates';
import dayjs from 'dayjs'


//variable initiation
let user
let travelers
let destinations
let trips
let userDestinations

//querySelectors
const tripList = document.querySelector('.trip-list')
const greeting = document.querySelector('.greeting')
const annualSpending = document.querySelector('.annual-expenditure')


// function declaration
const getAllData = () => {
    return Promise.all([fetchDataFor(`travelers`), 
                        fetchDataFor('destinations'), 
                        fetchDataFor('trips')])
    .then(data => {
        travelers = data[0].travelers;
        destinations = data[1].destinations;
        trips = data[2].trips;
        user = new Traveler(getByID(travelers, '14'))
        user.trips = user.getUsersTrips(trips)//instantiate Trip class in traveler.js
        console.log(user.trips, "<<<user.trips")
        userDestinations = user.getUsersDestinations(destinations)//instantiate Dest class in traveler.js
        console.log(userDestinations, "<<<userDestinations")
        // console.log(dayjs().format("MMMM DD, YYYY"), "<<dayjs")
        user.trips.forEach(trip => {
            
        })
        
    })//.then(updateDOM())
}

const getByID = (travelers, id) => {
    return travelers.find(traveler => {
        if (parseInt(id) === traveler.id) {
            return traveler
        }
    })
}

const updateDOM = () => {
    domUpdates.userGreeting()
}

//eventListeners 
window.addEventListener('load', getAllData());
