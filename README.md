# Travel Tracker

Travel Tracker is a site that uses pre-existing information for travelers, trips, and destinations stored in a local server to display information. There is an initial login page and then the user can view currently pending or approved trips. The user can also request a trip, which will be sent to the travel agency for approval. 

This site is a project built during Mod 2 of [Turing School of Software & Design](https://frontend.turing.edu/) and the project spec can be found [here](https://frontend.turing.edu/projects/travel-tracker.html).

### Goals
* Use OOP to drive the code design and implementation
* Work with and learn SCSS
* Gain familiarity with GitHub project board
### Wins
- Implementing and using [Day.js](https://day.js.org/)
- Implementing code review and pull requests
- Accessibiliy, tabbale by keyboard
### Challenges
- Post request
- Managing project board digitally
- Learning and using SCSS
  
## How to Run

1. Clone down this repo to your machine using `git clone [remote-address] [what you want to name the repo]` where `[remote-address]` represents the address you are copying from (e.g. SSH or HTTP) and `[what you want to name the repo]` is a string of what you would like to call your local copy. 
2. Clone the server repo [here](https://github.com/turingschool-examples/travel-tracker-api).
3. Then install the library dependencies. Run:

```bash
npm install
```
4. In the terminal, run:

```bash
npm start
```
Go to `http://localhost:8080/` in your browser to view your code running in the browser.

## Features
Login: When the page loads you will see a login form. To log in, enter `traveler` followed by a number between 1 and 50 in the username field (e.g. `traveler38`). The password for all users is `travel`.

User Dashboard: Once logged in, a user can see all of their trips displayed.  The header also includes the stats on how much they've spent on trips this year.

Book a Trip: A booking form is displayed in the left sidebar in desktop view. Users can fill out this form to request a new trip. Once submitted, the trip shows up in the list of trips with a status of 'pending'. The traveler must wait for the trip to be approved by the Travel Agency (are those still a thing?!).

--- 
## Contributers
- Primary contributer: [Zach Liibbe](https://github.com/zliibbe)

- Support with pull requests and code review:
  - [Andrew Musselman](https://github.com/Andrew-Musselman)
  - [Caleb Haizlett](https://github.com/CHaiz15)

- Project Mangaer for [Turing](https://frontend.turing.edu/):
  - [Scott Ertmer](https://github.com/sertmer)
  
### Future Work

- [ ]  Iteration 4 from [project spec](https://frontend.turing.edu/projects/travel-tracker.html) addressing Agent 
- [ ]  Add favicon to site
- [ ]  Spruce up UX with icons/images for buttons, headers, etc.
- [ ]  Add Delete Network Request Functionality via X buttons in upper righthand corners of each trip
## Technologies Used
- Javascript
- HTML
- CSS / SCSS
- Webpack
- Test Driven Development
- Mocha
- Chai
- day.js
- API
- local server
 --- 
