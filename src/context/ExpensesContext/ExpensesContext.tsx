import { createContext, FC, useContext, useState } from "react";
import { IExpensesContext, IExpensesContextProps } from "./types";
import { v4 as uuidv4 } from "uuid";
import { IExpense } from "../../types";

export const ExpensesContext = createContext({} as IExpensesContext);

const useContextExpenses = () => {
  const [expenses, setExpenses] = useState<IExpensesContext>({
    expenses: [],
    addExpense: (expense: IExpense) => {
      setExpenses((context) => ({
        ...context,
        expenses: [...context.expenses, { ...expense, id: uuidv4() }],
      }));
    },
    deleteExpense: (expense: IExpense) => {
      setExpenses((context) => ({
        ...context,
        expenses: context.expenses.filter(
          (currentExpense) => currentExpense.id !== expense.id
        ),
      }));
    },
  });

  return expenses;
};

export const useExpensesContext = () =>
  useContext<IExpensesContext>(ExpensesContext);

export const ExpensesContextProvider: FC<IExpensesContextProps> = ({
  children,
}) => {
  return (
    <ExpensesContext.Provider value={useContextExpenses()}>
      {children}
    </ExpensesContext.Provider>
  );
};
