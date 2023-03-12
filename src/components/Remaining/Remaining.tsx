import React from "react";
import { useBudgetContext } from "../../context/BudgetContex/BudgetContex";
import { useCurrencyContext } from "../../context/CurrencyContex/CurrencyContex";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { StyledRemaining } from "./styles";

export const Remaining = () => {
  const { currency } = useCurrencyContext();
  const { budget } = useBudgetContext();
  const { expenses } = useExpensesContext();

  const amountExpenses: number = expenses.reduce((amount, expense) => {
    return amount + +expense.cost;
  }, 0);

  const remainingValue: number = +budget - amountExpenses;

  const isOverspending = remainingValue < 0;

  return (
    <StyledRemaining $overspending={isOverspending}>
      {isOverspending
        ? `Overspending: ${currency} ${Math.abs(remainingValue)}`
        : `Remaining: ${currency} ${remainingValue}`}
    </StyledRemaining>
  );
};
