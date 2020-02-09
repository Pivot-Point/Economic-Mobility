// import all question objects
import renderQuestion from './render-question.js';
import displayResults from './display-results.js';
import lifeEvents from './life-events.js';
import findById from '../common/find-by-id.js';
import userUpdate from '../common/user-update.js';
import { saveUser } from '../common/User State/api.js';
import { myChart } from '../common/User State/status-bar.js';

// display chart
myChart;

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

// render prompt
const promptSection = renderQuestion(lifeEventQuestion);

// append prompt to form
form.appendChild(promptSection);

// event listener on form submission
form.addEventListener('submit', (e) => {
    // prevent default behavior
    e.preventDefault();

    // get formData object
    const formData = new FormData(form);

    // use formData object to get data for generated prompt
    const choiceId = formData.get('option');

    // update user object based on choice
    userUpdate(user, lifeEventQuestion, choiceId);

    // save user in local storage
    saveUser(user);

    // make results appear on screen
    displayResults(choiceId, lifeEventQuestion);

    // make button disappear
    const questionSubmitButton = document.getElementById('question-submit-button');
    questionSubmitButton.style.display = 'none';

});

// get index of question in array
let questionIndex = lifeEvents.indexOf(lifeEventQuestion);

// incremement index and use corresponding id to direct window to next prompt
continueButton.addEventListener('click', () => {
    questionIndex++;
    if (questionIndex < lifeEvents.length) {
        window.location = '../game-play/?id=' + lifeEvents[questionIndex].id;
    } else {
        window.location = '../results/index.html';
    }
});
