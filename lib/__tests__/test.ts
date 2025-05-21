import { getRandomRiddle, isCorrectAnswer, Riddle } from "../riddles";

describe("isCorrectAnswer() - Check if answer taken in matches answer given, case insensitive", () => {
  test("Given correct answer, returns true", () => {
    const correctAnswer = "correctAnswer";
    const currentRiddle = "";
    const mockRiddles: Riddle[] = [
      {
        answer: correctAnswer,
        riddle: currentRiddle,
        id: 1,
        hint: "",
      },
    ];
    const isCorrect = isCorrectAnswer(
      correctAnswer,
      mockRiddles,
      currentRiddle
    );
    expect(isCorrect).toBeTruthy();
  });

  test("Given correct answer with mismatching grammar, returns true", () => {
    const correctAnswer = "correctAnswer";
    const currentRiddle = "";
    const mockRiddles: Riddle[] = [
      {
        answer: correctAnswer,
        riddle: currentRiddle,
        hint: "",
        id: 0,
      },
    ];
    const isCorrect = isCorrectAnswer(
      "123CORreCtaN  sw123er",
      mockRiddles,
      currentRiddle
    );
    expect(isCorrect).toBeTruthy();
  });

  test("Given incorrect answer, returns false", () => {
    const currentRiddle = "";
    const mockRiddles: Riddle[] = [
      {
        answer: "not-fousndd",
        riddle: currentRiddle,
        hint: "",
        id: 0,
      },
    ];
    const isCorrect = isCorrectAnswer("bad answer", mockRiddles, currentRiddle);
    expect(isCorrect).toBe(false);
  });

  test("Given an empty answer, returns false", () => {
    const correctAnswer = isCorrectAnswer("", [], "");
    expect(correctAnswer).toBe(false);
  });

  test("Given correct answer to another riddle, returns false", () => {
    const currentRiddle = "correct riddle";
    const mockRiddles: Riddle[] = [
      {
        answer: "correct",
        riddle: currentRiddle,
        hint: "",
        id: 0,
      },
      {
        answer: "incorrect",
        riddle: "incorrect riddle",
        hint: "",
        id: 1,
      },
    ];
    const isCorrect = isCorrectAnswer("incorrect", mockRiddles, currentRiddle);
    expect(isCorrect).toBe(false);
  });
});

describe("getRandomRiddle() - Check if the riddles are randomizing properly, not repeating the previous riddle shown", () => {
  test("Given that the user has not yet received a riddle, identify that no riddle has been given and get a new riddle from the entire array", () => {
    const mockRiddles: Riddle[] = [
      {
        riddle: "this is mock riddle 1",
        answer: "this is a mock answer",
        hint: "",
        id: 0,
      },
      {
        riddle: "this is mock riddle 2",
        answer: "this is another mock answer",
        hint: "",
        id: 1,
      },
      {
        riddle: "this is mock riddle 3",
        answer: "this is the mock answer",
        hint: "",
        id: 2,
      },
    ];
    const currentRiddle = getRandomRiddle(undefined, mockRiddles);
    expect(currentRiddle).toBeDefined();
  });

  test("Given the player has already received a riddle, the next riddle will be a new riddle", () => {
    const mockRiddles: Riddle[] = [
      {
        riddle: "this is mock riddle 1",
        answer: "this is a mock answer",
        hint: "",
        id: 0,
      },
      {
        riddle: "this is mock riddle 2",
        answer: "this is another mock answer",
        hint: "",
        id: 1,
      },
      {
        riddle: "this is mock riddle 3",
        answer: "this is the mock answer",
        hint: "",
        id: 2,
      },
    ];
    const nextRiddle = getRandomRiddle(mockRiddles[2], mockRiddles);
    expect(nextRiddle).toBeDefined();
  });
});
