export default function determineNextQuestion(lifeEvents, lifeEventQuestion) {
    // get index of question in array
    let questionIndex = lifeEvents.indexOf(lifeEventQuestion);
    questionIndex++;

    if (questionIndex < lifeEvents.length) {
        const nextQuestion = '../game-play/?id=' + lifeEvents[questionIndex].id;
        return nextQuestion;
    }
}
