// import all question objects
import renderQuestion from './render-question.js';
import displayResults from './display-results.js';
import lifeEvents from './life-events.js';
import findById from '../common/find-by-id.js';
import userUpdate from '../common/user-update.js';
import { saveUser } from '../common/User State/api.js';

// get continue button from DOM
const continueButton = document.getElementById('continue-button');

// get user from local storage
const user = JSON.parse(localStorage.getItem('user'));

// get form from DOM
const form = document.querySelector('form');

// get query parameter from URL
const searchParams = new URLSearchParams(window.location.search);

// get question id from URL and store as variable
const lifeEventId = searchParams.get('id');

// find matching id using findById function (taking in search param and array)
const lifeEventQuestion = findById(lifeEvents, lifeEventId);

// render question using lifeEvent ID
const section = renderQuestion(lifeEventQuestion);
// append section to form
form.appendChild(section);

// event listener on form submission
form.addEventListener('submit', (e) => {
    // prevent default behavior
    e.preventDefault();

    // get formData object
    const formData = new FormData(form);
    
    // use formData object to get data for generated prompt
    const choiceId = formData.get('option');
    console.log(lifeEventQuestion);

    // updateUserObject() function
    userUpdate (user, lifeEventQuestion, choiceId);
    // update user object based on choice
    saveUser(user);
    // make results appear on screen
    displayResults(choiceId, lifeEventQuestion);

    
    // renderChart() function:
    // Will update chart based on choice (note: we will need two arrays: one for labels, the other with the corresponding scores)
});



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
    } else {
        window.location = '../results/index.html';
    }
}
);


