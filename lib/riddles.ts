type Riddle = {
  riddle: string;
  answer: string;
  hint: string;
  id: number;
};

type RiddlesDatabase = Riddle[];

function stripAnswer(answer: string) {
  const regexMatchingNonLetters = /[^[a-zA-Z]/gm;
  return answer.toString().toLowerCase().replace(regexMatchingNonLetters, "");
}

function isCorrectAnswer(
  attemptedAnswer: string,
  riddlesDatabase: RiddlesDatabase
) {
  if (attemptedAnswer.toString() === "") {
    return false;
  }

  const maybeRiddle = riddlesDatabase.find(
    (riddle) => stripAnswer(riddle.answer) === stripAnswer(attemptedAnswer)
  );

  return maybeRiddle !== undefined;
}

function getRandomRiddle(
  currentRiddle: Riddle | undefined,
  riddlesDatabase: RiddlesDatabase
) {
  const db = new Set(riddlesDatabase);
  const curr = new Set([currentRiddle]);
  const subsetWithoutCurrent = [db.difference(curr)];
  const randomIndex = Math.random() * (subsetWithoutCurrent.length - 1);
  return subsetWithoutCurrent[randomIndex];
}

export { getRandomRiddle, isCorrectAnswer };
export type { Riddle };
