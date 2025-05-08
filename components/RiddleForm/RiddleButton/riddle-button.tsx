import React from "react";
import buttonStyles from "./riddle-button.module.css";

type RiddleButtonProps = {
  onClickCallback?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function RiddleButton({ onClickCallback }: RiddleButtonProps) {
  return (
    <button
      className={buttonStyles.button}
      type="button"
      onClick={onClickCallback}
    >
      Submit
    </button>
  );
}

export default RiddleButton;
