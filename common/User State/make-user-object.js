function makeUser(formData) {
    // make user object
    name: formData.get('name'),
    if (formData === 'white') {
        const user = {
        health: 91,
        wealth: 100,
        uMobility: 100,
    }} else if (formData === 'black') {
        const user = {
        health:87,
        money:80,
        mobility:60, 
    }} else if (formData === 'asian') {
        const user ={
        health:100,
        money:100,
        mobility:100,
    }} else if (formData === 'native american') {
        const user ={
        health:76,
        money:70,
        mobility:50,
    }} else if (formData === 'Hispanic or Latino') {
        const user ={
        health:96,
        money:80,
        mobility:75,
    }} else if (formData === 'Two or More Races') {
        const user ={
        health:92,
        money:80,
        mobility:80,
    }} else if (formData === 'Native Hawaiian or Other Pacific Islander') {
        const user ={
        health:80,
        money:75,
        mobility:75,
        }
    };
    return user;
}



