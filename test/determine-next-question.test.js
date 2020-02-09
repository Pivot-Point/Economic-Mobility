import determineNextQuestion from '../game-play/determine-next-question.js';

const test = QUnit.test;

test('test determination of next question', function(assert) {
    //Arrange
    const race = {
        id: 'race'
    };

    const environmentalConditions = {
        id: 'environmental-conditions'
    };
    const genderIdentity = {
        id: 'gender-identity'
    };

    const lifeEvents = [
        race,
        genderIdentity,
        environmentalConditions,
    ];    
    
    const expected = '../game-play/?id=environmental-conditions';

    //Act
    const nextQuestion = determineNextQuestion(lifeEvents, genderIdentity);

    //Assert
    assert.equal(nextQuestion, expected);
});