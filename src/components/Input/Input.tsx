import React, { ChangeEvent } from "react";
import { StyledInput } from "./styles";

interface IProps {
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ placeholder, value, onChange }: IProps) => {
  return <StyledInput placeholder={placeholder} onChange={onChange} />;
};
