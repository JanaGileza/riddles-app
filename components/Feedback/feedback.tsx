"use client";

import { useState } from "react";
import Dialog, { CloseButtonData } from "../Dialog/dialog";
import { TextInput } from "../TextInput/text-input";
import inputStyles from "../TextInput/text-input.module.css";
import Button from "../Button/button";
import getResponse from "./feedback-actions";
import { areInputsValid } from "@/lib/userInput";

function FeedbackForm() {
  const [nameInput, setNameInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const [bodyInput, setBodyInput] = useState<string>("");
  const [dialogDescription, setDialogDescription] = useState<string>("");
  const [currentTitle, setTitle] = useState<string>("");
  const [hasSubmittedForm, setHasSubmittedForm] = useState<boolean>(false);

  console.log(nameInput);
  console.log(emailInput);
  console.log(bodyInput);

  //simple clean up function when form needs to be cleaned up/reset
  function cleanupForm() {
    setNameInput("");
    setEmailInput("");
    setBodyInput("");
  }

  function onNameInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setNameInput(e.target.value);
  }

  function onEmailInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setEmailInput(e.target.value);
  }

  function onBodyInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setBodyInput(e.target.value);
  }

  function onUserClickedSubmitButton() {
    //validate input fields are not empty
    //currently building to ensure data is collected correctly while determining best API to use
    const feedbackData = {
      name: nameInput,
      email: emailInput,
      body: bodyInput,
    };

    if (!areInputsValid(feedbackData)) {
      alert("Please fill out all fields before submitting.");
    }

    getResponse(feedbackData);

    console.log(nameInput, emailInput, bodyInput);

    setHasSubmittedForm(true);
    cleanupForm();
    // alert("Thanks for your feedback! We will respond as soon as possible!");
  }

  function onUserClickedGiveFeedbackButton() {
    setDialogDescription(
      "Have some feedback or a riddle suggestion? Fill out the form below and I'll get back to you as soon as possible!"
    );
    setTitle("Submit Your Feedback");
  }

  const closeDialogButtonData: CloseButtonData = {
    text: "Close",
    onClickCloseCallback: () => cleanupForm(),
  };

  const submitDialogButtonData: CloseButtonData = {
    text: "Submit",
    onClickCloseCallback: () => onUserClickedSubmitButton(),
  };

  return (
    <div className="flex min-h-full min-w-full flex-col items-center gap-10">
      <Dialog
        closeButtons={[closeDialogButtonData]}
        description={dialogDescription}
        onClickTriggerCallback={onUserClickedGiveFeedbackButton}
        title={currentTitle}
        triggerText={"Give Feedback"}
      >
        <TextInput
          className={`${inputStyles.input}`}
          autoComplete="off"
          labelText="Name: "
          name="nameInput"
          onChange={onNameInputChange}
          required
          value={nameInput}
        />
        <TextInput
          className={`${inputStyles.input}`}
          labelText="E-mail: "
          name="emailInput"
          onChange={onEmailInputChange}
          required
          value={emailInput}
        />
        <TextInput
          className={`${inputStyles.input}`}
          autoComplete="off"
          labelText="Feedback: "
          name="bodyInput"
          onChange={onBodyInputChange}
          required
          value={bodyInput}
        />
        {hasSubmittedForm ? (
          <p className="text-body font-body text-body-size">
            Your feedback was submitted successfully. Thank you!
          </p>
        ) : undefined}
        <Button
          buttonText={submitDialogButtonData.text}
          onClick={onUserClickedSubmitButton}
        ></Button>
      </Dialog>
    </div>
  );
}

export default FeedbackForm;
