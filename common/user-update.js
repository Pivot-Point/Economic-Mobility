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
    const choices = event.choices;
    choices.forEach(choice => {
        if (choice.id === choiceId) {
            user.wealth = user.wealth + choice.wealth;
            user.health = user.health + choice.health;
            user.mobility = user.mobility + choice.mobility;
        }
    });

    return user;  
}
