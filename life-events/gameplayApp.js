import {trafficStop} from './life-events.js';

const userState = {
    name: 'senor george',
    id:'senor george',
    ethinicty: 'NH',
  
            health:80,
            money:75,
            mobility:75,
 
 };

health : { healthSate: -40,
            wealthState: +20
        }

        function setNew (user.ethnicity = NH) {
            userState.state.halth = -40;
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