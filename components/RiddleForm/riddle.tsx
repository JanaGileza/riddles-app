"use client";

import { isCorrectAnswer, type Riddle } from "@/lib/riddles";
import RiddlePrompt from "./RiddlePrompt/riddle-prompt";
import { useState } from "react";
import RiddleAnswer from "./RiddleAnswer/riddle-answer";
import riddlesData from "@/data/riddles.json";
//import RiddleButton from "./RiddleButton/riddle-button";
import RiddleHint from "./RiddleHover/riddle-hover";
import RiddleDialog, { CloseButtonData } from "./RiddleDialog/riddle-dialog";

const riddlesDatabase: Riddle[] = riddlesData;

function RiddleForm({ riddle }: { riddle: Riddle | undefined }) {
  const [attemptedAnswer, setAttemptedAnswer] = useState<string>("");
  const [hintRequested, setHintRequested] = useState<boolean>(false);
  const [guessCounter, setGuessCount] = useState<number>(0);
  const [dialogDescription, setDialogDescription] = useState<string>("");
  const [currentTitle, setTitle] = useState<string>("");
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

  function onUserClickedSubmit(open: boolean) {
    if (open) {
      onSubmitForm();
    }
  }

  function onSubmitForm() {
    setTitle("Result: ");

    if (attemptedAnswer === "") {
      return;
    }
    const userAnsweredCorrectly = isCorrectAnswer(
      attemptedAnswer,
      riddlesDatabase
    );

    if (userAnsweredCorrectly) {
      setDialogDescription(
        "You have answered correctly! Click 'next' to try a new riddle!"
      );
    } else {
      const currentGuessCount = guessCounter + 1;
      setGuessCount(currentGuessCount);
      setDialogDescription(
        `You have answered incorrectly! Click 'OK' to try again. You have ${
          MAX_GUESS_COUNT - currentGuessCount
        } guesses left!`
      );
      if (currentGuessCount >= MAX_GUESS_COUNT) {
        setDialogDescription(
          "You have answered incorrectly! You have no more guesses."
        );
      } else {
      }
    }
    // if correct, update the UI accordingly!
    // otherwise, numberOfAttemptedAnswers ++
  }

  const hintIfHovering = hintRequested ? riddle?.hint : undefined;

  const closeDialogButtonData: CloseButtonData = {
    text: "Close",
    onClickCallback: (e) => console.log("Close button clicked!"),
  };

  const nextRiddleDialogButtonData: CloseButtonData = {
    text: "Next riddle",
    onClickCallback: (e) => console.log("Next riddle button clicked!"),
  };

  return (
    <div>
      <h2>Riddle</h2>
      <RiddlePrompt riddle={riddle} />
      <RiddleAnswer onInputCallback={onAnswerInputChange} />
      <RiddleDialog
        onDialogOpenCallback={onUserClickedSubmit}
        triggerText={"Submit"}
        title={currentTitle}
        description={dialogDescription}
        closeButtons={[closeDialogButtonData, nextRiddleDialogButtonData]}
      />
      <RiddleHint
        onMouseEnterCallback={onHintMouseEnter}
        onMouseLeaveCallback={onHintMouseExit}
      />
      <p>{hintIfHovering}</p>
    </div>
  );
}

export default RiddleForm;
