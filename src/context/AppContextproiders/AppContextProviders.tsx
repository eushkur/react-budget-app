import React, { FC, ReactNode } from "react";
import { BudgetContextProvider } from "../BudgetContex/BudgetContex";
import { CurrencyContextProvider } from "../CurrencyContex/CurrencyContex";
import { ExpensesContextProvider } from "../ExpensesContext/ExpensesContext";

const providers = [
  BudgetContextProvider,
  ExpensesContextProvider,
  CurrencyContextProvider,
];

export const AppContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <>
      {providers.reduceRight((acc, Provider) => {
        return <Provider>{acc}</Provider>;
      }, children)}
    </>
  );
};
