function stripAnswer(answer) {
  const regexMatchingNonLetters = /[^[a-zA-Z]/gm;
  return answer.toString().toLowerCase().replace(regexMatchingNonLetters, "");
}

function isCorrectAnswer(attemptedAnswer, riddles) {
  if (attemptedAnswer.toString() === "") {
    return false;
  }

  const maybeRiddle = riddles.find(
    ({ answer }) => stripAnswer(answer) === stripAnswer(attemptedAnswer)
  );

  return maybeRiddle !== undefined;
}

function randomRiddles() {}

export { isCorrectAnswer, randomRiddles };
