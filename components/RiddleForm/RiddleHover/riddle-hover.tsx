import React from "react";

type RiddleHintProps = {
  onMouseEnterCallback: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseLeaveCallback: (e: React.MouseEvent<HTMLElement>) => void;
};

function RiddleHint({
  onMouseEnterCallback,
  onMouseLeaveCallback,
}: RiddleHintProps) {
  return (
    <p onMouseEnter={onMouseEnterCallback} onMouseLeave={onMouseLeaveCallback}>
      Hint
    </p>
  );
}

export default RiddleHint;
