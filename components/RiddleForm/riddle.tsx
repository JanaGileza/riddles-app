"use client";

import { isCorrectAnswer, type Riddle } from "@/lib/riddles";
import RiddlePrompt from "./RiddlePrompt/riddle-prompt";
import { useState } from "react";
import RiddleAnswer from "./RiddleAnswer/riddle-answer";
import riddlesData from "@/data/riddles.json";
import RiddleButton from "./RiddleButton/riddle-button";
import RiddleHint from "./RiddleHover/riddle-hover";

const riddlesDatabase: Riddle[] = riddlesData;

function RiddleForm({ riddle }: { riddle: Riddle | undefined }) {
  const [attemptedAnswer, setAttemptedAnswer] = useState<string>("");
  const [hintRequested, setHintRequested] = useState<boolean>(false);
  const [guessCounter, setGuessCount] = useState<number>(0);
  const MAX_GUESS_COUNT = 3;

  function onAnswerInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setAttemptedAnswer(e.target.value);
  }

  function onHintMouseEnter(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    setHintRequested(true);
    console.log("mouse entered");
  }

  function onHintMouseExit(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    setHintRequested(false);
    console.log("mouse exited");
  }

  function onSubmitForm(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (attemptedAnswer === "") {
      return;
    }
    const userAnsweredCorrectly = isCorrectAnswer(
      attemptedAnswer,
      riddlesDatabase
    );

    if (userAnsweredCorrectly) {
      alert("You have answered correctly! Click 'next' to try a new riddle!");
    } else {
      const currentGuessCount = guessCounter + 1;
      setGuessCount(currentGuessCount);
      alert(
        `You have answered incorrectly! Click 'OK' to try again. You have ${
          MAX_GUESS_COUNT - currentGuessCount
        } guesses left!`
      );
      if (currentGuessCount >= MAX_GUESS_COUNT) {
        alert("You have answered incorrectly! You have no more guesses.");
      } else {
      }
    }
    alert(
      `You submitted '${attemptedAnswer}' as your answer! It was ${userAnsweredCorrectly}`
    );

    // if correct, update the UI accordingly!
    // otherwise, numberOfAttemptedAnswers ++
  }

  const hintIfHovering = hintRequested ? riddle?.hint : undefined;

  return (
    <div>
      <h2>Riddle</h2>
      <RiddlePrompt riddle={riddle} />
      <RiddleAnswer onInputCallback={onAnswerInputChange} />
      <RiddleButton onClickCallback={onSubmitForm} />
      <RiddleHint
        onMouseEnterCallback={onHintMouseEnter}
        onMouseLeaveCallback={onHintMouseExit}
      />
      <p>{hintIfHovering}</p>
    </div>
  );
}

export default RiddleForm;
