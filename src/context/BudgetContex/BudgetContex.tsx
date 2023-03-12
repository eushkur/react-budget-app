import { createContext, FC, useContext, useState } from "react";
import { IBudgetContext, IBudgetProviderProps } from "./types";

export const BudgetContext = createContext<IBudgetContext>(
  {} as IBudgetContext
);

const useContextBudgetValue = () => {
  const [budget, setBudget] = useState<IBudgetContext>({
    budget: "",
    setBudget: (newBudgetValue) => {
      setBudget((context) => ({ ...context, budget: newBudgetValue }));
    },
  });

  return budget;
};

export const useBudgetContext = () => useContext<IBudgetContext>(BudgetContext);

export const BudgetContextProvider: FC<IBudgetProviderProps> = ({
  children,
}) => {
  return (
    <BudgetContext.Provider value={useContextBudgetValue()}>
      {children}
    </BudgetContext.Provider>
  );
};
