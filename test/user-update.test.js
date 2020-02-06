import userUpdate from '../common/user-update.js';
// import example from '../src/example.js';

const test = QUnit.test;

test('test user update', function(assert) {
    //Arrange
    const user = {
        name: 'john',
        race: 'white',
        gender: 'male',
        region: 'south',
        wealth: 50,
        health: 40,
        mobility: 60,
    };
    const event = {
        id:'associate',
        description:'Associates Degree',
        result:'',
        health: 5,
        wealth: 5,
        mobility: 5,
    };

    const expected = 
    {
        name: 'john',
        race: 'white',
        gender: 'male',
        region: 'south',
        wealth: 55,
        health: 45,
        mobility: 65,
    };
    //Act 
    const updatedUser = userUpdate(user, event);

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(updatedUser, expected);
});
