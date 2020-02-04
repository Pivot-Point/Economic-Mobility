import characterObject from './character-object.js';
import makeUser from './make-user-object.js';


// get DOM
const userRaceForm = document.getElementById('user-race-form');

// initialize user using form data
const json = localStorage.getItem('user');
const user = JSON.parse(json);



// When the user submits form
userRaceForm.addEventListener('submit', (e) => {
    // Prevent default behavior
    e.preventDefault();

    // Make a new form data object
    const formData = new FormData(userRaceForm);

    // Create user object??
    const userProfile = makeUser(formData);

    // Put the form data object into local storage
    localStorage.setItem('user', JSON.stringify(userProfile));

    // Redirect user to next question with query params
    
});
