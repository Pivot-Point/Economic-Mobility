export const newMakeUser = (formData) => ({
    name: formData.get('name'),
    health: 100,
    wealth: 100,
    mobility: 100,
});

export default makeUser;