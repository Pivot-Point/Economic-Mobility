export default function userUpdate(user, event, choiceId) {
    // add race, gender and location selections to user object
    if (event.id === 'race') {
        user.race = choiceId;
    }
    if (event.id === 'Gender') {
        user.gender = choiceId;
    }
    if (event.id === 'Geographic-Environmental-Conditions') {
        user.location = choiceId;
    }
    // update user state (health, wealth, mobility) based on input
    event.choices.forEach(({ 
        id, 
        wealth, 
        health, 
        mobility,
    }) => {
        if (id === choiceId) {
            user.wealth += wealth;
            user.health += health;
            user.mobility += mobility;
        }
    });

    return user;  
}
