import { useExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { IExpense } from "../../types";
import { ListItem } from "../ListItem/ListItem";
import { Phrase, StyledList } from "./styles";

interface IProps {
  currentExpenses: IExpense[];
}

export const List = ({ currentExpenses }: IProps) => {
  const { expenses } = useExpensesContext();

  let isStart: boolean = true;

  expenses.length !== 0 ? (isStart = false) : (isStart = true);

  let isSearching: boolean = false;
  currentExpenses.length === 0 ? (isSearching = true) : (isSearching = false);

  return (
    <StyledList $isSearching={isSearching}>
      {isStart ? (
        <Phrase>Your expense list is empty</Phrase>
      ) : currentExpenses.length === 0 ? (
        <Phrase>Oooops 🙈</Phrase>
      ) : (
        currentExpenses.map((currentExpenses: IExpense) => {
          return (
            <ListItem expense={currentExpenses} key={currentExpenses.id} />
          );
        })
      )}
    </StyledList>
  );
};
