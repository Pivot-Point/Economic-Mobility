export const newMakeUser = (formData) => ({
    name: formData.get('name'),
    race: formData.get('race'),
    health: 100,
    wealth: 100,
    mobility: 100,
});
