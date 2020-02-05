// import all question objects




// get user from local storage

// get query parameter from URL (this assumes that initial query parameter has been set to race)

// get question id from URL and store as variable

// find matching id using findById function (taking in search param and array)

// get form from DOM
// get results elements from DOM



// displayGame()

    // ensure that first three questions are 'user profile' questions; then ask remaining questions at random

        // create array of asked questions

        // set question array in local storage

        // if race is not in the array, then pass in raceObject; otherwise, pass in genderObject

        // if gender is not in the array, then pass in genderObject; otherwise, pass in regionObject

        // if region is not in the array, then pass in regionObject; otherwise, use getRandomQuestion function (passing in lifeEvents array) to randomly assign a question

    

// event listener on form submission

    // prevent default behavior

    // get formData object

    // use formData object to get data for generated prompt

    // updateUserObject() function:
        // update user object based on choice

    // renderChart() function:
        // Will update chart based on choice (note: we will need two arrays: one for labels, the other with the corresponding scores)

    // displayResults() function makes results appear on screen 

        // toggle on display of results section
        
        // connect textContent of heading and paragraph to corresponding result
        
        // insert corresponding image
    
    // push mutated user object back into local storage

    // if there are no remaining questions, go to results page
