import React from "react";
import { useState } from "react";
import { ReactNode, FocusEvent } from "react";

interface IInputField {
  value: string | number;
  name: string;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  type: string;
  disabled?: boolean;
}

function Input({ value = "", name, onBlur, type, disabled }: IInputField) {
  const [localValue, setLocalValue] = useState(value);

  return (
    <>
      <input
        className="rounded-md h-10 p-3 bg-zinc-300"
        type={type}
        value={localValue}
        name={name}
        onBlur={onBlur}
        onChange={(e) => setLocalValue(e.target.value)}
        disabled={disabled}
      />
    </>
  );
}

export default Input;
