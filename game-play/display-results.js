export default function displayResults(choice, lifeEvent) {
    // connect textContent of heading and paragraph to corresponding result
    const resultSection = document.getElementById('result-section');
    resultSection.style.display = 'block';
    const resultsHeader = document.getElementById('results-header');
    const resultsDescription = document.getElementById('results-description');
    resultsHeader.textContent = `You selected: ${choice}`;
    resultsDescription.textContent = lifeEvent.result;
}