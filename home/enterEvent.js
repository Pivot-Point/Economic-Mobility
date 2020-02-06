// import makeUser from '../common/User State/initialize-user.js'
import { saveUser } from '../common/User State/api.js';

const enterButton = document.getElementById('enter');

enterButton.addEventListener('click', () => {
    const inputField = document.getElementById('name');
    const userObject = {
        name: inputField.value,
        health: 100,
        wealth: 100,
        mobility: 100 };
    saveUser(userObject);
        
});
export default enterButton;