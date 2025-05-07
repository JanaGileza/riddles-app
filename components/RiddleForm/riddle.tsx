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

  function onAnswerInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setAttemptedAnswer(e.target.value);
  }

  function onHintMouseEnter(e: React.MouseEvent<HTMLElement>) {
    setHintRequested(true);
    console.log("mouse entered");
  }

  function onHintMouseExit(e: React.MouseEvent<HTMLElement>) {
    setHintRequested(false);
    console.log("mouse exit");
  }

  function onSubmitForm(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (attemptedAnswer === "") {
      return;
    }
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
