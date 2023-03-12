import React from "react";
import { Expenses } from "./components/Expenses/Expenses";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { StyledApp } from "./ui/base";

export const App = () => {
  return (
    <StyledApp>
      <Header />
      <Expenses />
      <Form />
    </StyledApp>
  );
};
