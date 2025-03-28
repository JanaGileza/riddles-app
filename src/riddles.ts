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
  let riddlesSubset = undefined;
  if (currentRiddle === undefined) {
    riddlesSubset = riddlesDatabase;
  } else {
    riddlesSubset = riddlesDatabase.filter(
      (riddle) => riddle === currentRiddle
    );
  }

  const randomIndex = Math.floor(Math.random() * (riddlesSubset.length - 1));
  const newRandomRiddle = riddlesSubset[randomIndex];
  return newRandomRiddle;
}

export { getRandomRiddle, isCorrectAnswer };
export type { Riddle };
