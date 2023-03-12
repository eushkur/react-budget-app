import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { IExpense } from "../../types";
import { Button } from "../Button/Button";
import { Title } from "../Title/Title";
import { Input, Error, StyledForm } from "./styles";

export const Form = () => {
  const { addExpense } = useExpensesContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IExpense>();

  const onSubmit: SubmitHandler<IExpense> = (formValues) => {
    addExpense(formValues);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title name="Add Expense" />
      <Input
        placeholder="enter name ..."
        type="text"
        {...register("name", {
          required: "Name is required",
          maxLength: {
            value: 15,
            message: "Name must be less than 15 characters long",
          },
          pattern: {
            value: /[A-Za-z]/,
            message: "Name must contain only letters",
          },
        })}
      />
      {errors.name && <Error>{errors.name.message}</Error>}

      <Input
        placeholder="enter cost ..."
        type="number"
        {...register("cost", {
          required: "Cost is required",
          maxLength: {
            value: 6,
            message: "Cost must be less than 6 characters long",
          },
          pattern: {
            value: /[0-9]/,
            message: "Cost must contain only numbers",
          },
        })}
      />
      {errors.cost && <Error>{errors.cost.message}</Error>}

      <Button text="Done" />
    </StyledForm>
  );
};
