const startButton = document.getElementById('start-button');

startButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.location = '../game-play/?id=race';
});
