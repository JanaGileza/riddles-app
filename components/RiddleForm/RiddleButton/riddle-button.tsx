import React from "react";

type RiddleButtonProps = {
  onClickCallback: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function RiddleButton({ onClickCallback }: RiddleButtonProps) {
  return (
    <button type="button" onClick={onClickCallback}>
      Submit
    </button>
  );
}

export default RiddleButton;
