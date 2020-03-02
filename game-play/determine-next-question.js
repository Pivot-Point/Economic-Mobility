export default function determineNextQuestion(lifeEvents, lifeEventQuestion) {
    // get index of question in array
    let questionIndex = lifeEvents.indexOf(lifeEventQuestion);
    questionIndex++;

    // nice piece of logic!
    if (questionIndex < lifeEvents.length) {
        // nice dynamic indexing
        const nextQuestion = '../game-play/?id=' + lifeEvents[questionIndex].id;
        return nextQuestion;
    }
}
