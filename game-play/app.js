// import all question objects

  //Need specific objects (i.e. import 'race' object) Look at Colls file structure. 


// get user from local storage
    //Look at JSON function.

// get query parameter from URL (this assumes that initial query parameter has been set to race)
    //We would need to pull a specific ID from the splash page. 



// get question id from URL and store as variable

// find matching id using findById function (taking in search param and array)

// get form from DOM
// get results elements from DOM

// displayGame()

    // ensure that first three questions are 'user profile' questions; then ask remaining questions at random

    //We will iterate through an array. 

        // create array of asked questions
            //Coll has outlined this type of array in lifeEvents.js and medicalIssueOutcomes.js

            ==================================================================================== TABLEED
        // set question array in local storage
            //We have function to acomplish this. 

        // if race is not in the array, then pass in raceObject; otherwise, pass in genderObject
            //

        // if gender is not in the array, then pass in genderObject; otherwise, pass in regionObject

        // if region is not in the array, then pass in regionObject; otherwise, use getRandomQuestion function (passing in lifeEvents array) to randomly assign a question
==========================================================================================================================================
    
// event listener on form submission -- Will look at the Event Listener - Needs to update state -

    // prevent default behavior

    // get formData object

    // use formData object to get data for generated prompt

    // updateUserObject() function:
        // update user object based on choice -- 

    
    // renderChart() function:
        // Will update chart based on choice (note: we will need two arrays: one for labels, the other with the corresponding scores)

    // displayResults() function makes results appear on screen 

        // toggle on display of results section
        
        // connect textContent of heading and paragraph to corresponding result
        
        // insert corresponding image
    
    // push mutated user object back into local storage

    // if there are no remaining questions, go to results page

//The continue button will generate the next question.
