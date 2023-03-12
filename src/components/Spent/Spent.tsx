import React from "react";
import { useCurrencyContext } from "../../context/CurrencyContex/CurrencyContex";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { StyledSpent } from "./styles";

export const Spent = () => {
  const { currency } = useCurrencyContext();
  const { expenses } = useExpensesContext();

  const amountExpenses: number = expenses.reduce((amount, expense) => {
    return amount + +expense.cost;
  }, 0);

  return (
    <StyledSpent>
      Spent so far: {currency} {amountExpenses}
    </StyledSpent>
  );
};
