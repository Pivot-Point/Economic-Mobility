
// initiate states
let healthState;
let wealthState;
let mobility;

// push user's health, wealth and mobility states into array
export default function statusArray(user) {
    const returnArray = [];
    healthState = user.health;
    returnArray.push(healthState);
    wealthState = user.wealth;
    returnArray.push(wealthState);
    mobility = user.mobility;
    returnArray.push(mobility);
    return returnArray;
}