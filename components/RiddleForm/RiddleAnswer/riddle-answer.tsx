import React from "react";

type RiddleAnswerProps = {
  onInputCallback: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function RiddleAnswer({ onInputCallback }: RiddleAnswerProps) {
  return (
    <label>
      Answer:{" "}
      <input
        name="attemptedAnswer"
        onChange={onInputCallback}
        required
        autoComplete="off"
      />
    </label>
  );
}

export default RiddleAnswer;
