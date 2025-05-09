import React from "react";

type HintProps = {
  hintText: string;
  onMouseEnterCallback: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseLeaveCallback: (e: React.MouseEvent<HTMLElement>) => void;
};

function Hint({
  hintText,
  onMouseEnterCallback,
  onMouseLeaveCallback,
}: HintProps) {
  return (
    <p onMouseEnter={onMouseEnterCallback} onMouseLeave={onMouseLeaveCallback}>
      {hintText}
    </p>
  );
}

export default Hint;
