import { useState } from "react";

type FeedbackFormProps = {
  name: Name;
  email: Email;
  body: Body;
};

function FeedbackForm({ name, email, body }: FeedbackFormProps) {
  const [nameInput, setNameInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const [bodyInput, setBodyInput] = useState<string>("");

  //simple clean up function when form needs to be cleaned up/reset
  function cleanupForm() {
    setNameInput("");
    setEmailInput("");
    setBodyInput("");
  }

  function onNameIputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setNameInput(e.target.value);
  }

  function onEmailIputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setEmailInput(e.target.value);
  }

  function onBodyIputChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setBodyInput(e.target.value);
  }
}
