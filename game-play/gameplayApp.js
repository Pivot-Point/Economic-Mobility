//name input from previous welcome page
    //passes name to local storage

//grab the name from local storage
function pullUserName () {
    const playerJSON = localStorage.getItem('user');
    if (!playerJSON) return null;
    const user = JSON.parse(playerJSON);
    return user;
}

//ethnicty selection button
    //passses race object into the create character function
const ethnicityButton = document.getElementById('race')

//gender selection button 
    //passes gender object into create character object

//region selection button
    //passses region into character creation object


// create function for character creation page submit button

function createCharacter (nameInput, ethnictyInput, backgroundInput, genderInput) {
    const charcterObject = {
        //ethnicity selection
        id: race.choices[i].id,
        description:race.choices[i].description,
        result: race.choices[i].result,
        health: race.choices[i].health,
        wealth: race.choices[i].wealth,
        mobility: race.choices[i].mobility,

        //gender selection
        gender: 
    };



}

 //find a user profile to set intial gameplay state
    function pullUserJSON () {
        const playerJSON = localStorage.getItem('user');
        if (!playerJSON) return null;
        const user = JSON.parse(playerJSON);
        return user;
    }

    // take mutated gameplay (player) state and setting to local storage
    function pushJSON(user) {
        const playerJSON = JSON.stringify(user);
        //'user' is a key for local storage syntax not the og variable
        localStorage.setItem('user', playerJSON);
    }





    function renderQuestion () {

    }

 {

 }