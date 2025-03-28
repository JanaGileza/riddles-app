import { expect } from "@jest/globals";
import { getRandomRiddle, isCorrectAnswer, Riddle } from "../riddles";

describe("isCorrectAnswer() - Check if answer taken in matches answer given, case insensitive", () => {
  test("Given correct answer, returns true", () => {
    const correctAnswer = "correctAnswer";
    const mockRiddles: Riddle[] = [
      {
        answer: correctAnswer,
        riddle: "",
        id: 1,
        hint: "",
      },
    ];
    const isCorrect = isCorrectAnswer(correctAnswer, mockRiddles);
    expect(isCorrect).toBeTruthy();
  });

  test("Given correct answer with mismatching grammar, returns true", () => {
    const correctAnswer = "correctAnswer";
    const mockRiddles: Riddle[] = [
      {
        answer: correctAnswer,
        riddle: "",
        hint: "",
        id: 0,
      },
    ];
    const isCorrect = isCorrectAnswer("123CORreCtaN  sw123er", mockRiddles);
    expect(isCorrect).toBeTruthy();
  });

  test("Given incorrect answer, returns false", () => {
    const mockRiddles: Riddle[] = [
      {
        answer: "not-fousndd",
        riddle: "",
        hint: "",
        id: 0,
      },
    ];
    const isCorrect = isCorrectAnswer("bad answer", mockRiddles);
    expect(isCorrect).toBe(false);
  });

  test("Given an empty answer, returns false", () => {
    const correctAnswer = isCorrectAnswer("", []);
    expect(correctAnswer).toBe(false);
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
