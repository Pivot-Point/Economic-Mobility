function renderGames(selectionObject) {
    const sectionContainer = document.createElement('section');

    const userPrompt = document.createElement('div');
    userPrompt.classList.add('user-prompt');

    const creationTitle = document.createElement('h3');

    const questionDescription = document.createElement('p');

    userPrompt.append(creationTitle, questionDescription);

    const optionsDiv = document.createElement('div');
    optionsDiv.classList.add('options');

//place in for loop or for each to iterate through our choices 
    selectionObject.choices.forEach(choice => {
        const optionsLabel = document.createElement('label');
        const optionsRadio = document.createElement('input');
        optionsRadio.type = 'radio';
        optionsRadio.name = 'option';
        optionsRadio.required = true;
        optionsRadio.value = choice.id;
        optionsLabel.appendChild(optionsRadio);

    }
    )
    //race.choices.forEach
    sectionContainer.append(userPrompt, optionsDiv);

    return sectionContainer;
}