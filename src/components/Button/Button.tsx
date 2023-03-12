import React from "react";
import { StyledButton } from "./styles";

interface IProps {
  text: string;
}

export const Button = ({ text }: IProps) => {
  return <StyledButton type="submit">Done</StyledButton>;
};
