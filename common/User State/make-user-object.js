export default function makeUser(formData) {
    // make user object
    const user = {
        name: formData.get('name'),
        race: formData.get('race'),
        gender: formData.get('gender'),
        region: formData.get('region'),
        wealth: '',
        health: '',
        mobility: '',
    };
    return user;
}

