// import all question objects
import renderQuestion from './render-question.js';
import lifeEvents from './life-events.js';
import findById from '../common/find-by-id.js';

// get continue button from DOM
const continueButton = document.getElementById('continue-button');

//set life events object into local storage.
const eventJSON = localStorage.setItem('life-events', JSON.stringify(lifeEvents));

// get user from local storage

// get form from DOM
const form = document.querySelector('form');

// get query parameter from URL
const searchParams = new URLSearchParams(window.location.search);

// get question id from URL and store as variable
const lifeEventId = searchParams.get('id');

// find matching id using findById function (taking in search param and array)
const lifeEventQuestion = findById(lifeEvents, lifeEventId);
console.log(lifeEventQuestion);
// render question using lifeEvent ID
const section = renderQuestion(lifeEventQuestion);

const userRaceForm = document.getElementById('user-race-form');
userRaceForm.appendChild(section);

// event listener on form submission
form.addEventListener('submit', (e) => {
    // prevent default behavior
    e.preventDefault();

    // get formData object
    const formData = new FormData(form);
    
    // use formData object to get data for generated prompt
    const choiceId = formData.get('option');

    // push mutated user object back into local storage
    // if there are no remaining questions, go to results page
    //The continue button will generate the next question.

    // updateUserObject() function:
    // update user object based on choice -- Coll and Dorje function

    // make results appear on screen
    const displayResults = () => {

        // connect textContent of heading and paragraph to corresponding result

        //<div class="results-container">
        // <h3 id="results-header"></h3>
        //<p id="results-description"></p>
        //</div>

        // toggle on display of results 
        const resultsSection = document.getElementById('result-section');
        const resultsDiv = document.getElementById('results-container');
        const resultsHeader = document.getElementById('results-header');

        // connect textContent of heading and paragraph to corresponding result

        // insert corresponding image?

    }
    // renderChart() function:
    // Will update chart based on choice (note: we will need two arrays: one for labels, the other with the corresponding scores)
})



continueButton.addEventListener('click', () => {
    if (lifeEventQuestion.id === 'race') {
        window.location = '../game-play/?id=' + 'Gender';
    } else if (lifeEventQuestion.id === 'Gender') {
        window.location = '../game-play/?id=' + 'Geographic-Environmental-Conditions';
    } else if (lifeEventQuestion.id === 'Geographic-Environmental-Conditions') {
        window.location = '../game-play/?id=' + 'EducationEvent';
    } else if (lifeEventQuestion.id === 'EducationEvent') {
        window.location = '../game-play/?id=' + 'traffic-event';
    } else if (lifeEventQuestion.id === 'traffic-event') {
        window.location = '../game-play/?id=' + 'arm-injury';
    } else if (lifeEventQuestion.id === 'arm-injury') {
        window.location = '../game-play/?id=' + 'housing-choice';
    } else if (lifeEventQuestion.id === 'housing-choice') {
        window.location = '../game-play/?id=' + 'employment-issue';
    } else {
        window.location = '../results.html';
    }
}
);


