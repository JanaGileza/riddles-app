"use client";

import { isCorrectAnswer, type Riddle } from "@/lib/riddles";
import RiddlePrompt from "./RiddlePrompt/riddle-prompt";
import { useState } from "react";
import { TextInput } from "../TextInput/text-input";
import riddlesData from "@/data/riddles.json";
import Hint from "../Hover/hover";
import Dialog, { CloseButtonData } from "../Dialog/dialog";

const riddlesDatabase: Riddle[] = riddlesData;

type RiddleFormProps = {
  riddle: Riddle | undefined;
  onLoadNextRiddleCallback: () => void;
};

function RiddleForm({ riddle, onLoadNextRiddleCallback }: RiddleFormProps) {
  const [attemptedAnswer, setAttemptedAnswer] = useState<string>("");
  const [hintRequested, setHintRequested] = useState<boolean>(false);
  const [guessCounter, setGuessCount] = useState<number>(0);
  const [dialogDescription, setDialogDescription] = useState<string>("");
  const [currentTitle, setTitle] = useState<string>("");
  const MAX_GUESS_COUNT = 3;

  // run this any time the form needs to be cleaned up or reset, i.e, when user retrieves new riddle
  function cleanupForm() {
    setAttemptedAnswer("");
    onLoadNextRiddleCallback();
  }

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

  function onUserClickedSubmitButton() {
    // validate text input isn't empty
    onSubmitForm();
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
        } ${
          MAX_GUESS_COUNT - currentGuessCount === 1 ? "guess" : "guesses"
        } left!`
      );
      if (currentGuessCount >= MAX_GUESS_COUNT) {
        setDialogDescription(
          "You have answered incorrectly! You have no more guesses."
        );
      }
    }
  }

  //function revealAnswer () {}

  const hintIfHovering = hintRequested ? riddle?.hint : undefined;

  const closeDialogButtonData: CloseButtonData = {
    text: "Close",
    onClickCloseCallback: () => console.log("Close button clicked!"),
  };

  const nextRiddleDialogButtonData: CloseButtonData = {
    text: "Next riddle",
    onClickCloseCallback: () => cleanupForm(),
  };

  return (
    <div>
      <h2>Riddle</h2>
      <RiddlePrompt riddle={riddle} />
      <TextInput
        autoComplete="off"
        labelText="Answer: "
        name="attemptedAnswer"
        onChange={onAnswerInputChange}
        required
        value={attemptedAnswer}
      />
      <Dialog
        closeButtons={[closeDialogButtonData, nextRiddleDialogButtonData]}
        description={dialogDescription}
        onClickTriggerCallback={onUserClickedSubmitButton}
        title={currentTitle}
        triggerText={"Submit"}
      />
      <Hint
        hintText={"Hint"}
        onMouseEnterCallback={onHintMouseEnter}
        onMouseLeaveCallback={onHintMouseExit}
      />
      <p>{hintIfHovering}</p>
    </div>
  );
}

export default RiddleForm;
