import { Badge } from "../Badge/Badge";
import { ButtonClose, StyledListItem } from "./styles";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { IExpense } from "../../types";
import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { MouseEventHandler } from "react";

interface IProps {
  expense: IExpense;
}

export const ListItem = ({ expense }: IProps) => {
  const { deleteExpense } = useExpensesContext();

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    deleteExpense(expense);
  };

  return (
    <StyledListItem>
      {expense.name}
      <Badge cost={expense.cost} />
      <ButtonClose type="button" onClick={handleClick}>
        <Close />
      </ButtonClose>
    </StyledListItem>
  );
};
