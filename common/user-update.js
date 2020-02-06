
//healthState, wealthState, mobility
export default function userUpdate(user, event) {
    user.wealth = user.wealth + event.wealth;
    user.health = user.health + event.health;
    user.mobility = user.mobility + event.mobility; return user;  
}