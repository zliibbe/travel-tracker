import dayjs from 'dayjs'

//querySelectors
const tripList = document.querySelector('.trip-list')


const domUpdates = {
    userGreeting(firstName) {
        const greeting = document.querySelector('.greeting')
        greeting.innerText = `Welcome back, ${firstName}!`
    },

    displayAnnualSpending(userAnnualSpending) {
        const annualSpending = document.querySelector('.annual-expenditure')
        annualSpending.innerText = `You've spent ${userAnnualSpending} in ${dayjs().format('YYYY')}`
    },

    displayTrips(traveler, tripsData, destinationsData) {
        traveler.getUsersTrips(tripsData, destinationsData).forEach(trip =>{
        const place = trip.findDestination(destinationsData)
        // console.log(place, "place-- in domUpdates")
        tripList.insertAdjacentHTML('beforeend',`<article class="trip">
        <img class="trip-img" src=${place.image} alt=${place.alt}> 
        <h2 class="trip-destination">${place.destination}</h2>
        <h3 clss="trip-status">Status: ${trip.status}</h3>
        <div class="trip-information">
          <p>start date: ${dayjs(trip.date).format("MMMM DD, YYYY")}</p>
          <p>duration: ${trip.duration}</p>
          <p>travelers: ${trip.travelers}</p>
          <p>cost: $${trip.cost}</p>
        </div>
      </article>`);})
    },
};

export default domUpdates;