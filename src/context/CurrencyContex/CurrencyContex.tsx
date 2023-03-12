import { createContext, FC, useContext, useState } from "react";
import { Currency } from "../../config/currency";
import { ICurrencyContext, ICurrencyProviderProps } from "./types";

export const CurrencyContext = createContext<ICurrencyContext>(
  {} as ICurrencyContext
);

const useContextCurrencyValue = () => {
  const [currencyContext, setCurrencyContext] = useState<ICurrencyContext>({
    currency: Currency.USD,
    setCurrency: (newCurrency) => {
      setCurrencyContext((context) => ({ ...context, currency: newCurrency }));
    },
  });

  return currencyContext;
};

export const useCurrencyContext = () =>
  useContext<ICurrencyContext>(CurrencyContext);

export const CurrencyContextProvider: FC<ICurrencyProviderProps> = ({
  children,
}) => {
  return (
    <CurrencyContext.Provider value={useContextCurrencyValue()}>
      {children}
    </CurrencyContext.Provider>
  );
};
