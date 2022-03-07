import './css/base.scss';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/profilepic'
// import './images/favicon'
import {fetchDataFor} from './apiCalls'
import Traveler from './traveler'
import Trip from './trip'
import Destination from './destination';
import domUpdates from './domUpdates';
import dayjs from 'dayjs'

//variable initiation
let user
let travelersData
let destinationsData
let tripsData
let userDestinations

// function declaration
const getAllData = () => {
    return Promise.all([fetchDataFor(`travelers`), 
                        fetchDataFor('destinations'), 
                        fetchDataFor('trips')])
    .then(data => {
        travelersData = data[0].travelers;
        destinationsData = data[1].destinations;
        tripsData = data[2].trips;
        user = new Traveler(getByID(travelersData, '14'))
        user.trips = user.getUsersTrips(tripsData, destinationsData)//instantiate Trip class in traveler.js
        userDestinations = user.getUsersDestinations(destinationsData)//instantiate Dest class in traveler.js  
    }).then(() =>{
        updateDOM(user, user.trips, userDestinations)
    })
}

const getByID = (travelers, id) => {
    return travelers.find(traveler => {
        if (parseInt(id) === traveler.id) {
            return traveler
        }
    })
}

const updateDOM = (userData, tripsData, destinationsData) => {
    domUpdates.userGreeting(userData.getFirstName())
    domUpdates.displayAnnualSpending(userData.annualSpent())
    domUpdates.displayTrips(userData, tripsData, destinationsData)
}

//eventListeners 
window.addEventListener('load', getAllData());
