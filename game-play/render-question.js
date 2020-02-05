export default function renderQuestion(questionObject) 
{
    const sectionContainer = document.createElement('section');

    const userPromptDiv = document.createElement('div');
    userPromptDiv.classList.add('user-prompt');

    const creationTitle = document.createElement('h3');

    const questionDescription = document.createElement('p');

    userPromptDiv.append(creationTitle, questionDescription);

    const optionsDiv = document.createElement('div');
    optionsDiv.classList.add('options');

// iterate through choices
    questionObject.choices.forEach(choice => {
        console.log(choice);
        const optionsLabel = document.createElement('label');
        const optionsRadio = document.createElement('input');
        optionsRadio.type = 'radio';
        optionsRadio.name = 'option';
        optionsRadio.required = true;
        optionsRadio.value = choice.id;
        optionsLabel.append(choice.description);
        console.log(optionsLabel)
    }
    );

    sectionContainer.append(userPromptDiv, optionsDiv);

    return sectionContainer;
}