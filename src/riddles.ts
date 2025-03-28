type Riddle = {
  riddle: string,
  answer: string,
  hint: string,
  id: number 
}

function stripAnswer(answer: string) {
  const regexMatchingNonLetters = /[^[a-zA-Z]/gm;
  return answer.toString().toLowerCase().replace(regexMatchingNonLetters, "");
}

function isCorrectAnswer(attemptedAnswer: string, riddles: Riddle[]) {
  if (attemptedAnswer.toString() === "") {
    return false;
  }

  const maybeRiddle = riddles.find(
    (riddle) => stripAnswer(riddle.answer) === stripAnswer(attemptedAnswer)
  );

  return maybeRiddle !== undefined;
}

function randomRiddles() {}

export { isCorrectAnswer, randomRiddles };
export type {Riddle}
