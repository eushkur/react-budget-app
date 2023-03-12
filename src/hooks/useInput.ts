import { ChangeEvent, useState } from "react";

export const useInput = (initialValue: string = "") => {
  const [inputValue, setInputValue] = useState<string>(initialValue);

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  return { inputValue, onChange, setInputValue };
};
