export default function makeUser(formData) {
    // make user object
    const user = {
        name: formData.get('name'),
        race: formData.get('race'),
        gender: formData.get('gender'),
        region: formData.get('region'),
        wealth: '',
        health: '',
        uMobility: '',
    };
    return user;
}

    // make user object
export const user = {
    name: 'john',
    race: 'white',
    gender: 'male',
    region: 'south',
    wealth: 40,
    health: 10,
    uMobility: 30,
};
   

