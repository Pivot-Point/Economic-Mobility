export default function makeUser(formData) {
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

