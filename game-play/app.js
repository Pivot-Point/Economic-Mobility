// import all question objects
import renderQuestion from './render-question.js';
import displayResults from './display-results.js';
import lifeEvents from './life-events.js';
import findById from '../common/find-by-id.js';
import userUpdate from '../common/user-update.js';
import { saveUser } from '../common/User State/api.js';
import statusBar from '../common/User State/status-bar.js';

// get continue button from DOM
const continueButton = document.getElementById('continue-button');

// get user from local storage
const user = JSON.parse(localStorage.getItem('user'));

// get bar chart
statusBar(user);

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

    // update user object based on choice
    userUpdate (user, lifeEventQuestion, choiceId);

    // save user in local storage
    saveUser(user);

    // get bar chart
    statusBar(user);

    // make results appear on screen
    displayResults(choiceId, lifeEventQuestion);

    // make button disappear
    const questionSubmitButton = document.getElementById('question-submit-button');
    questionSubmitButton.style.display = 'none';

});


continueButton.addEventListener('click', () => {
    // direct window to next prompt using query paramz
    if (lifeEventQuestion.id === 'race') {
        window.location = '../game-play/?id=' + 'Gender';
    } else if (lifeEventQuestion.id === 'Gender') {
        window.location = '../game-play/?id=' + 'Geographic-Environmental-Conditions';
    } else if (lifeEventQuestion.id === 'Geographic-Environmental-Conditions') {
        window.location = '../game-play/?id=' + 'EducationEvent';
    } else if (lifeEventQuestion.id === 'EducationEvent') {
        window.location = '../game-play/?id=' + 'employement-issue';
    } else if (lifeEventQuestion.id === 'employement-issue') {    
        window.location = '../results/index.html';
    }
}
);


