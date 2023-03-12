import { useBudgetContext } from "../../context/BudgetContex/BudgetContex";
import { useCurrencyContext } from "../../context/CurrencyContex/CurrencyContex";
import { useInput } from "../../hooks/useInput";
import { useToggle } from "../../hooks/useToggle";
import { Button, Input, StyledBudget } from "./styles";

export const Budget = () => {
  const { currency } = useCurrencyContext();
  const { budget, setBudget } = useBudgetContext();
  const [isEditMode, toggleEditMode] = useToggle();
  const { inputValue, onChange, setInputValue } = useInput();

  const handleSave = (): void => {
    setBudget(inputValue);
    setInputValue("");
    toggleEditMode();
  };

  const handleEdit = (): void => {
    toggleEditMode();
  };

  return (
    <StyledBudget>
      {isEditMode ? (
        <>
          <Input
            type="number"
            placeholder="Enter budget..."
            value={inputValue}
            onChange={onChange}
          />
          <Button type="button" onClick={handleSave}>
            Save
          </Button>
        </>
      ) : (
        <>
          <p>
            Budget: {currency} {budget}
          </p>
          <Button type="button" onClick={handleEdit}>
            Edit
          </Button>
        </>
      )}
    </StyledBudget>
  );
};
