const startButton = document.getElementById('start-button');

startButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.pathname = '/Economic-Mobility/game-play/?id=race';
});
