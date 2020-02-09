import userUpdate from '../common/user-update.js';

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
        id:'EducationEvent',
        title:'Degrees of Education',
        image:'',
        description:`Research shows that the greatest single correlation of high income is the education level of one's parents.
        The Fed study showed that income, earnings, and wealth increased with education levels.`,
        choices:[{
            id:'high-school',
            description:'High School or GED',
            result:'',
            health: 5,
            wealth: 5,
            mobility: 5,
        }]
    };
    const choiceId = 'high-school';
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
    const updatedUser = userUpdate(user, event, choiceId);

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(updatedUser, expected);
});


test('test user race updates', function(assert) {
    //Arrange
    const user = {
        name: 'john',
        race: '',
        gender: 'male',
        region: 'south',
        wealth: 50,
        health: 40,
        mobility: 60,
    };
    const event = {
        id:'race',
        title:'Degrees of Education',
        image:'',
        description:`Research shows that the greatest single correlation of high income is the education level of one's parents.
        The Fed study showed that income, earnings, and wealth increased with education levels.`,
        choices:[{
            id:'Black',
            description:'A person having origins in any of the black racial groups of Africa; has no Hispanic or Latino origins.',
            result:'',
            health: 10,
            wealth: 10,
            mobility: 10,
        }]
    };
    const choiceId = 'Black';
    const expected = 
    {
        name: 'john',
        race: 'Black',
        gender: 'male',
        region: 'south',
        wealth: 60,
        health: 50,
        mobility: 70,
    };

    //Act 
    const updatedUser = userUpdate(user, event, choiceId);

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(updatedUser, expected);
});
