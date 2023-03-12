import React from "react";
import { useBudgetContext } from "../../context/BudgetContex/BudgetContex";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { Budget } from "../Budget/Budget";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Remaining } from "../Remaining/Remaining";
import { Spent } from "../Spent/Spent";
import { Title } from "../Title/Title";
import { HeaderTitleBox, StyledHeader } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderTitleBox>
        <Title name="Budget App" />
        <CustomSelect />
      </HeaderTitleBox>
      <Budget />
      <Remaining />
      <Spent />
    </StyledHeader>
  );
};
