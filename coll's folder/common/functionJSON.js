const json = localStorage.getItem('user');
const user = JSON.parse(json);

function pushJSON(user) {
    const playerJSON = JSON.stringify(user);
    //'user' is a key for local storage syntax not the og variable
    localStorage.setItem('user', playerJSON);
}

function pullUserJSON () {
    const playerJSON = localStorage.getItem('user');
    if (!playerJSON) return null;
    const user = JSON.parse(playerJSON);
    return user;