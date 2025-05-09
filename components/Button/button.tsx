import React from "react";
import buttonStyles from "./button.module.css";

type ButtonProps = {
  buttonText: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps) => {
  const { buttonText, className, ...rest } = props;

  return (
    <button
      type="button"
      {...rest}
      className={`${buttonStyles.button} ${className}`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
