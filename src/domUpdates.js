import dayjs from 'dayjs'

//querySelectors
const tripList = document.querySelector('.trip-list');
const newTripConfirmation = document.querySelector('.new-trip-confirmation')

const domUpdates = {
    userGreeting(firstName) {
        const greeting = document.querySelector('.greeting')
        greeting.innerText = `Welcome back, ${firstName}!`
    },

    displayAnnualSpending(userAnnualSpending) {
        const annualSpending = document.querySelector('.annual-expenditure')
        annualSpending.innerText = `You've spent ${userAnnualSpending} in ${dayjs().format('YYYY')}.`
    },

    displayTrips(traveler, tripsData, destinationsData) {
        traveler.getUsersTrips(tripsData, destinationsData).forEach(trip =>{
        const place = trip.findDestination(destinationsData)
        tripList.insertAdjacentHTML('beforeend',
        `<article tabindex='0' class="trip">
        <div class="trip-container">
        <div class="trip-heading-container">
            <div class="trip-headings">    
                <h2 class="trip-destination">${place.destination}</h2>
                <h3 class="trip-status">Status: ${trip.status}</h3>
        </div>    
        <div class="trip-information">
            <p>start date: ${dayjs(trip.date).format("MMMM DD, YYYY")}</p>
            <p>duration: ${trip.duration}</p>
            <p>travelers: ${trip.travelers}</p>
            <p>cost: $${trip.cost}</p>
        </div>
        </div>
        <img class="trip-img" src=${place.image} alt=${place.alt}>
        </div>    
      </article>`);})
    },
    toggleHidden(element) {
        console.log("element % toggleHidden & newTripRequested:", element)
        element.classList.toggle("hidden");
    },
    newTripRequested(element) {
        this.toggleHidden(element)
        setTimeout(() =>{this.toggleHidden(element)}, 3000)
    }
};

export default domUpdates;