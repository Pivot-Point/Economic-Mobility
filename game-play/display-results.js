import findById from '../common/find-by-id.js';

export default function displayResults(choiceId, lifeEvent) {
    const choice = findById(lifeEvent.choices, choiceId);
    // connect textContent of heading and paragraph to corresponding result
    const resultSection = document.getElementById('result-section');
    const lifeEventImage = document.getElementById('life-event-image');
    resultSection.style.display = 'flex';
    const resultsHeader = document.getElementById('results-header');
    const resultsDescription = document.getElementById('results-description');
    const individualResult = document.getElementById('individual-result-text');
    lifeEventImage.src = `../assets/diversity-images/${lifeEvent.image}`;
    resultsHeader.textContent = `You selected: ${choiceId}`;
    resultsDescription.textContent = choice.description;
    individualResult.textContent = choice.result;
}