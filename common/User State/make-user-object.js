function makeUser(formData) {
    // make user object
    formData.get('name');
    if (formData === 'white') {
        const user = {
            health: 91,
            wealth: 100,
            mobility: 100,
        };
        return user;
    }       
    else if (formData === 'black') {
        const user = {
            health:87,
            wealth:80,
            mobility:60, 
        };
        return user;
    } else if (formData === 'asian') {
        const user = {
            health:100,
            wealth:100,
            mobility:100,
        };
        return user;
    } 
    else if (formData === 'native american') {
        const user = {
            health:76,
            wealth:70,
            mobility:5 };
        return user;
    }   
    else if (formData === 'Hispanic or Latino') {
        const user = {
            health:96,
            wealth:80,
            mobility:7 };  
        return user;
    }
    else if (formData === 'Two or More Races') {
        const user = {
            health:92,
            wealth:80,
            mobility:8 };
        return user;
    } 
    else { //native hawaiian or pac islander
        const user = {
            health:80,
            wealth:75,
            mobility:7 };
        return user;
    }
    
}
export default makeUser;




