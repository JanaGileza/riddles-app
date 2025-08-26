"use client";

import { isCorrectAnswer, type Riddle } from "@/lib/riddles";
import { useState } from "react";
import { TextInput } from "../TextInput/text-input";
import riddlesData from "@/data/riddles.json";
import Hint from "../Hint/hint";
import inputStyles from "../TextInput/text-input.module.css";
import Dialog, { CloseButtonData } from "../Dialog/dialog";

const riddlesDatabase: Riddle[] = riddlesData;

type RiddleFormProps = {
  riddle: Riddle;
  onLoadNextRiddleCallback: () => void;
};

function RiddleForm({ riddle, onLoadNextRiddleCallback }: RiddleFormProps) {
  const [attemptedAnswer, setAttemptedAnswer] = useState<string>("");
  const [hintRequested, setHintRequested] = useState<boolean>(false);
  const [guessCounter, setGuessCount] = useState<number>(0);
  const [dialogDescription, setDialogDescription] = useState<string>("");
  const [currentTitle, setTitle] = useState<string>("");
  const [inputDisabled, setInputDisabled] = useState(false);
  const MAX_GUESS_COUNT = 3;

  // run this any time the form needs to be cleaned up or reset, i.e, when user retrieves new riddle
  function cleanupForm() {
    setAttemptedAnswer("");
    onLoadNextRiddleCallback();
    setGuessCount(0);
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
      setTitle("");
      setDialogDescription("Please enter a valid answer!");
      return false;
    }

    const userAnsweredCorrectly = isCorrectAnswer(
      attemptedAnswer,
      riddlesDatabase,
      riddle?.riddle
    );

    if (userAnsweredCorrectly) {
      setDialogDescription(
        "You have answered correctly! Click 'next' to try a new riddle!"
      );
    } else {
      const currentGuessCount = guessCounter + 1;
      setGuessCount(currentGuessCount);
      setDialogDescription(
        `You have answered incorrectly! Click 'Close' to try again. You have ${
          MAX_GUESS_COUNT - currentGuessCount
        } ${
          MAX_GUESS_COUNT - currentGuessCount === 1 ? "guess" : "guesses"
        } left!`
      );
      if (currentGuessCount >= MAX_GUESS_COUNT) {
        setInputDisabled(true);
        setDialogDescription(
          "You have answered incorrectly! You have no more guesses."
        );
      }
    }
  }

  const hintIfHovering = hintRequested ? riddle?.hint : undefined;

  const closeDialogButtonData: CloseButtonData = {
    text: "Close",
    doesClose: true,
  };

  const nextRiddleDialogButtonData: CloseButtonData = {
    text: "Next riddle",
    doesClose: true,
    onClickCloseCallback: () => cleanupForm(),
  };

  return (
    <div className="flex min-h-full min-w-full flex-col items-center gap-10">
      <h2 className="text-center text-subheading font-heading text-secondary ">
        Riddle
      </h2>
      <p className="text-body text-body-size font-body">{riddle?.riddle}</p>
      <div className="flex flex-col gap-6 items-center">
        <TextInput
          id="TextInput"
          disabled={inputDisabled}
          className={`${inputStyles.input}`}
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
        <div>
          <Hint
            hintText={"Hint"}
            onMouseEnterCallback={onHintMouseEnter}
            onMouseLeaveCallback={onHintMouseExit}
          />
        </div>
      </div>
      <p className="text-body font-body text-body-size">{hintIfHovering}</p>
    </div>
  );
}

export default RiddleForm;
