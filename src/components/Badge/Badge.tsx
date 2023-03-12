import React from "react";
import { useCurrencyContext } from "../../context/CurrencyContex/CurrencyContex";
import { StyledBadge } from "./styles";

interface IProps {
  cost: string;
}

export const Badge = ({ cost }: IProps) => {
  const { currency } = useCurrencyContext();

  return <StyledBadge>{currency + cost}</StyledBadge>;
};
