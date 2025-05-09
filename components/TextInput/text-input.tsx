import React from "react";

type TextInputProps = {
  labelText: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function TextInput(props: TextInputProps) {
  const { labelText, ...rest } = props;
  return (
    <label>
      {labelText} <input {...rest} />
    </label>
  );
}

export type { TextInputProps };
export { TextInput };
