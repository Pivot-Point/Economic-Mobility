export function renderQuestion(questionObject) 
{
    const sectionContainer = document.createElement('section');

    const userPromptDiv = document.createElement('div');
    userPromptDiv.classList.add('user-prompt');

    const creationTitle = document.createElement('h3');

    creationTitle.textContent = questionObject.title;

    const questionDescription = document.createElement('p');
    
    questionDescription.textContent = questionObject.description; 

    userPromptDiv.append(creationTitle, questionDescription);
    sectionContainer.append(userPromptDiv);

    const buttonDiv = document.createElement('div');
    const questionSubmitButton = document.createElement('button');
    questionSubmitButton.id = 'question-submit-button';

    questionSubmitButton.textContent = 'Submit';

    buttonDiv.appendChild(questionSubmitButton); 

    const optionsDiv = document.createElement('div');
    optionsDiv.classList.add('options');

    
    // iterate through choices
    questionObject.choices.forEach(choice => {
        const optionsLabel = document.createElement('label');
        const optionsRadio = document.createElement('input');
        optionsRadio.type = 'radio';
        optionsRadio.name = 'option';
        optionsRadio.required = true;
        optionsRadio.value = choice.id;
        optionsLabel.append(choice.id, optionsRadio);
        sectionContainer.append(optionsLabel);
    }  
    
    );
    
    sectionContainer.appendChild(optionsDiv);
    sectionContainer.appendChild(buttonDiv);
    
    return sectionContainer;
}

export function renderResults(questionObject) 
{
    questionObject.choices.forEach(choice =>
      {
        const resultsSection = document.getElementById('result-section');
        const resultsDiv = document.getElementById('results-container');


      }  )
    const resultsSection = document.getElementById('result-section');
    const resultsDiv = document.getElementById('results-container');

    const resultsHeader = document.createElement('h3');
    const resultsDescription = document.createElement('p');

resultsSection.append(resultsDiv);
resultsDiv.append(resultsHeader);
resultsHeader.append(resultsDescription);
