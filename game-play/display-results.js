export default function displayResults(choice, lifeEvent) {
    // connect textContent of heading and paragraph to corresponding result
    const resultSection = document.getElementById('result-section');
    const lifeEventImage = document.getElementById('life-event-image');
    resultSection.style.display = 'flex';
    const resultsHeader = document.getElementById('results-header');
    const resultsDescription = document.getElementById('results-description');
    lifeEventImage.src = `../assets/diversity-images/${lifeEvent.image}`;
    resultsHeader.textContent = `You selected: ${choice}`;
    resultsDescription.textContent = lifeEvent.result;
}