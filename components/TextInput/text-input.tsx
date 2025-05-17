import React from "react";
//import inputStyles from "./text-input.module.css";

type TextInputProps = {
  labelText: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function TextInput(props: TextInputProps) {
  const { labelText, ...rest } = props;
  return (
    <label className="text-body text-body-size font-body">
      {labelText} <input {...rest} />
    </label>
  );
}

export type { TextInputProps };
export { TextInput };
