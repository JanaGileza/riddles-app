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
  if (currentRiddle === undefined) {
    const randomIndex = Math.floor(Math.random() * riddlesDatabase.length);
    return riddlesDatabase[randomIndex];
  }

  let currentIndex = 0;
  const allowedIndexes = [];
  const skipIndex = riddlesDatabase.indexOf(currentRiddle);
  while (currentIndex < riddlesDatabase.length) {
    if (currentIndex !== skipIndex) {
      allowedIndexes.push(currentIndex);
    }
    currentIndex++;
  }
  const randomIndex =
    allowedIndexes[Math.floor(Math.random() * allowedIndexes.length)];
  return riddlesDatabase[randomIndex];
}

export { getRandomRiddle, isCorrectAnswer };
export type { Riddle };
