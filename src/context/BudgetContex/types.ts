import { ReactNode } from "react";

export interface IBudgetContext {
  budget: string;
  setBudget: (budget: string) => void;
}

export interface IBudgetProviderProps {
  children: ReactNode;
}
