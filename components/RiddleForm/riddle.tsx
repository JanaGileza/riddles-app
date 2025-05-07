"use client";

import { isCorrectAnswer, type Riddle } from "@/lib/riddles";
import RiddlePrompt from "./RiddlePrompt/riddle-prompt";
import { useState } from "react";
import RiddleAnswer from "./RiddleAnswer/riddle-answer";
import riddlesData from "@/data/riddles.json";
import RiddleButton from "./RiddleButton/riddle-button";

const riddlesDatabase: Riddle[] = riddlesData;

function RiddleForm({ riddle }: { riddle: Riddle | undefined }) {
  const [attemptedAnswer, setAttemptedAnswer] = useState<string>("");

  function onAnswerInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setAttemptedAnswer(e.target.value);
  }

  function onSubmitForm(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    // the user clicked the button
    // check the answer using isCorrectAnswer
    const userAnsweredCorrectly = isCorrectAnswer(
      attemptedAnswer,
      riddlesDatabase
    );
    alert(
      `You submitted '${attemptedAnswer}' as your answer! It was ${userAnsweredCorrectly}`
    );

    // if correct, update the UI accordingly!
    // otherwise, numberOfAttemptedAnswers ++
  }

  return (
    <div>
      <h2>Riddle</h2>
      <RiddlePrompt riddle={riddle} />
      <RiddleAnswer onInputCallback={onAnswerInputChange} />
      <RiddleButton onClickCallback={onSubmitForm} />
    </div>
  );
}

export default RiddleForm;
