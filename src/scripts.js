import './css/base.scss';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/profilepic'
// import './images/favicon'
import {fetchDataFor, postData} from './apiCalls'
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

//querySelectors
const tripDate = document.querySelector('.date-input');
const tripNumOfDays = document.querySelector('.number-of-days-input');
const tripNumOfTravelers = document.querySelector('.number-of-travelers-input');
const tripDestination = document.querySelector('.destination-input');
const newTripForm = document.querySelector('.new-trip-form');
const newTripConfirmation = document.querySelector('.new-trip-confirmation');

// function declaration
const getAllData = () => {
    return Promise.all([fetchDataFor(`travelers`), 
                        fetchDataFor('destinations'), 
                        fetchDataFor('trips')])
    .then(data => {
        travelersData = data[0].travelers;
        destinationsData = data[1].destinations;
        tripsData = data[2].trips;
        user = new Traveler(getByID(travelersData, '38'))
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

const postNewTrip = (e) => {
    e.preventDefault();
    const newTripRequest = {
        id: tripsData.length+1,
        userID: user.id, 
        destinationID: parseInt(tripDestination.value),
        travelers: parseInt(tripNumOfTravelers.value), 
        date: tripDate.value.replaceAll('-', '/'),
        duration: parseInt(tripNumOfDays.value), 
        status: 'pending', 
        suggestedActivities: [],
    }
    postData('trips', newTripRequest);//POST trip to server
    user.trips.push(newTripRequest);//push trip to user's trips array
    domUpdates.newTripRequested(newTripConfirmation)//display post success & then hide this msg
    Promise.all([fetchDataFor(`travelers`), 
                        fetchDataFor('destinations'), 
                        fetchDataFor('trips')])
    .then(data => {
        travelersData = data[0].travelers;
        destinationsData = data[1].destinations;
        tripsData = data[2].trips;
        user.trips = user.getUsersTrips(tripsData, destinationsData)
        userDestinations = user.getUsersDestinations(destinationsData)
    }).then(() =>{
        updateDOM(user, user.trips, userDestinations)//redisplay new info to DOM
    })
    e.target.reset();
}

const updateDOM = (userData, tripsData, destinationsData) => {
    domUpdates.userGreeting(userData.getFirstName())
    domUpdates.displayAnnualSpending(userData.annualSpent())
    domUpdates.displayTrips(userData, tripsData, destinationsData)
}

//eventListeners 
window.addEventListener('load', getAllData());
newTripForm.addEventListener('submit', postNewTrip);
