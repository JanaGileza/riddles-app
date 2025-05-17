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
    <p
      className="underline text-body font-body text-body-size decoration-dotted decoration-secondary"
      onMouseEnter={onMouseEnterCallback}
      onMouseLeave={onMouseLeaveCallback}
    >
      {hintText}
    </p>
  );
}

export default Hint;
