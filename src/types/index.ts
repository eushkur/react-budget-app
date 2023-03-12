import { Currency } from "../config/currency";

export interface IExpense {
  name: string;
  cost: string;
  id: string;
}

export interface ISelectOption {
  readonly label: keyof typeof Currency;
  readonly value: Currency;
}
