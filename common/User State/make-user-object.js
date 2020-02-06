function makeUser(formData) {
    // make user object
    formData.get('name');
    if (formData === 'white') {
        const user = {
            health: -9,
            wealth: 0,
            mobility: 0,
        };
        return user;
    }       
    else if (formData === 'black') {
        const user = {
            health:-13,
            wealth:-20,
            mobility:-40, 
        };
        return user;
    } else if (formData === 'asian') {
        const user = {
            health:0,
            wealth:0,
            mobility:0,
        };
        return user;
    } 
    else if (formData === 'native american') {
        const user = {
            health:-24,
            wealth:-30,
            mobility:-50 };
        return user;
    }   
    else if (formData === 'Hispanic or Latino') {
        const user = {
            health:-4,
            wealth:-20,
            mobility:-7 };  
        return user;
    }
    else if (formData === 'Two or More Races') {
        const user = {
            health:-8,
            wealth:-20,
            mobility:-8 };
        return user;
    } 
    else { //native hawaiian or pac islander
        const user = {
            health:-20,
            wealth:-25,
            mobility:-30 };
        return user;
    }
    
}
export default makeUser;




