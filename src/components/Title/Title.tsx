import React from "react";
import { StyledTitle } from "./styles";

interface IProps {
  name: string;
}

export const Title = ({ name }: IProps) => {
  return <StyledTitle>{name}</StyledTitle>;
};
