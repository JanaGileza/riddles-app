import { expect } from "@jest/globals";
import { isCorrectAnswer, Riddle } from "../riddles";

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
