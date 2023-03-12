import React from "react";
import Select, { SingleValue } from "react-select";
import { Currency } from "../../config/currency";
import { useCurrencyContext } from "../../context/CurrencyContex/CurrencyContex";
import { ISelectOption } from "../../types";
import { CustomStyles } from "./styles";

const options: ISelectOption[] = [
  { value: Currency.USD, label: "USD" },
  { value: Currency.EUR, label: "EUR" },
  { value: Currency.GBP, label: "GBP" },
];

export const CustomSelect = () => {
  const { currency, setCurrency } = useCurrencyContext();

  const getCurrencyValue = () =>
    options.find((option: ISelectOption) => {
      return option.value === currency;
    });

  const handleCurrency = (option: SingleValue<ISelectOption>): void => {
    if (option) setCurrency(option.value);
  };

  return (
    <Select
      onChange={handleCurrency}
      value={getCurrencyValue()}
      options={options}
      styles={CustomStyles}
      isSearchable={false}
      isMulti={false}
    />
  );
};
