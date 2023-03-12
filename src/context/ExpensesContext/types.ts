import { ReactNode } from "react";
import { IExpense } from "../../types";

export interface IExpensesContext {
  expenses: IExpense[];
  addExpense: (expense: IExpense) => void;
  deleteExpense: (expense: IExpense) => void;
}

export interface IExpensesContextProps {
  children: ReactNode;
}
