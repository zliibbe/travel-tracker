import './css/base.scss';
import {fetchDataFor, postData} from './apiCalls'
import Traveler from './traveler'
import domUpdates from './domUpdates';

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
const loginSubmit = document.querySelector('.login-form');
const loginSection = document.querySelector('.login-page');
const bookSection = document.querySelector('.booking-section');
const tripSection = document.querySelector('.trip-section');
const userName = document.querySelector('#username');
const password = document.querySelector('#password');

// function declaration
const hideLogin = () => {
    domUpdates.toggleHidden(loginSection)
    domUpdates.toggleHidden(bookSection)
    domUpdates.toggleHidden(tripSection)
}

const getLoginInfo = (event) => {
    event.preventDefault()
    const traveler = userName.value.slice(0,8);
    const travelerID = userName.value.slice(8,10);
    if (traveler === 'traveler' && travelerID > 0 && travelerID < 51 && password.value === 'traveler'){
        hideLogin()
        getAllData(travelerID)
    } else {
        domUpdates.displayLoginError()
    }
}

const getAllData = (id) => {
    return Promise.all([fetchDataFor('travelers'), 
                        fetchDataFor('destinations'), 
                        fetchDataFor('trips')])
    .then(data => {
        travelersData = data[0].travelers;
        destinationsData = data[1].destinations;
        tripsData = data[2].trips;
        user = new Traveler(getByID(travelersData, id))
        user.trips = user.getUsersTrips(tripsData, destinationsData)
        userDestinations = user.getUsersDestinations(destinationsData)
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
    postData('trips', newTripRequest);
    user.trips.push(newTripRequest);
    domUpdates.newTripRequested(newTripConfirmation);
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
        updateDOM(user, user.trips, userDestinations)
    })
    e.target.reset();
}

const updateDOM = (userData, tripsData, destinationsData) => {
    domUpdates.userGreeting(userData.getFirstName())
    domUpdates.displayAnnualSpending(userData.annualSpent())
    domUpdates.displayTrips(userData, tripsData, destinationsData)
}

//eventListeners 
newTripForm.addEventListener('submit', postNewTrip);
loginSubmit.addEventListener('submit', getLoginInfo);