
//healthState, wealthState, mobility
//we need event listener to call this function on click

export default function userUpdate(user, event, choiceId) {
    if (event.id === 'race') {
        user.race = choiceId;
    }
    if (event.id === 'Gender') {
        user.gender = choiceId;
    }
    if (event.id === 'Geographic-Environmental-Conditions') {
        user.location = choiceId;
    }

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
