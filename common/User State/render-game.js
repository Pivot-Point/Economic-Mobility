function renderCharacter() {
    const userPrompt = document.createElement('div');
    userPrompt.classList.add('creationChoice');

    const creationTitle = document.createElement('h3');

    const questionDescription = document.createElement('p');

    userPrompt.append(creationTitle, questionDescription);

}