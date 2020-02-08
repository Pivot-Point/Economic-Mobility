export const newMakeUser = (formData) => ({
    name: formData.get('name'),
    race: formData.get('race'),
    gender: '',
    location: '',
    education: '',
    health: 100,
    wealth: 100,
    mobility: 100,
});
