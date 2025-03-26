import { expect } from "@jest/globals";
import { isCorrectAnswer, randomRiddles } from "../riddles";

describe("isCorrectAnswer() - Check if answer taken in matches answer given, case insensitive", () => {
  test("Given correct answer, returns true", () => {
    const correctAnswer = "correctAnswer";
    const mockRiddle = [{ answer: correctAnswer }];
    const isCorrect = isCorrectAnswer(correctAnswer, mockRiddle);
    expect(isCorrect).toBeTruthy();
  });

  test("Given correct answer with mismatching grammar, returns true", () => {
    const correctAnswer = "correctAnswer";
    const mockRiddle = [{ answer: correctAnswer }];
    const isCorrect = isCorrectAnswer("123CORreCtaN  sw123er", mockRiddle);
    expect(isCorrect).toBeTruthy();
  });

  test("Given incorrect answer, returns false", () => {
    const mockRiddles = [{ answer: "not-foundd" }];
    const isCorrect = isCorrectAnswer("bad answer", mockRiddles);
    expect(isCorrect).toBe(false);
  });

  test("Given an empty answer, returns false", () => {
    const correctAnswer = isCorrectAnswer("", []);
    expect(correctAnswer).toBe(false);
  });
});
