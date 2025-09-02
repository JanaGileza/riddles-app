import { getRandomRiddle, isCorrectAnswer, Riddle } from "../riddles";
import { areInputsValid, sanitizeUserInput } from "../userInput";

describe("sanitizeUserInput() - check that the input received is being sanitized, preventing any malicious code being ran in textInput boxes", () => {
  test("Given input including non-alphabetical and non-numeric characters, the input will be returned sanitized", () => {
    const name = "Random name! Input{}?";
    const email = "R@and.om.email@here.com!!!!";
    const body = "Random body where if()else()run dASTArdLY code!!!???";
    const sanitizedInput = sanitizeUserInput({ name, email, body });
    console.log(
      "SANITIZED BODY:",
      sanitizeUserInput({ name, email, body }).body
    );
    expect(sanitizedInput).toEqual({
      name: "Random%20name!%20Input%7B%7D%3F",
      email: "R%40and.om.email%40here.com!!!!",
      body: "Random%20body%20where%20if()else()run%20dASTArdLY%20code!!!%3F%3F%3F",
    });
  });
});

describe("areInputsValid() - check that the fields are not empty and can be processed as valid input", () => {
  test("Given empty fields, returns false", () => {
    const name = "";
    const email = "";
    const body = "";
    const invalidInput = areInputsValid({ name, email, body });
    expect(invalidInput).toBe(false);
  });

  test("Given valid fields, returns true", () => {
    const name = "Name";
    const email = "name@email.com";
    const body =
      "do - a deer, a female deer. re, a drop of golden sun. Mi, a name I call myself!! Fa, a lon gl0ng w4y to run!!11!!";
    const invalidInput = areInputsValid({ name, email, body });
    expect(invalidInput).toBeTruthy();
  });
});

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
