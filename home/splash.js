const startButton = document.getElementById('start-button');

startButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.pathname = '/game-play/?id=race';
});
