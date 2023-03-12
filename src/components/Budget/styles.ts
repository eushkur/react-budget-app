import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledBudget = styled.div`
  display: grid;
  grid-template-columns: 85% 15%;
  width: 100%;
  height: 100px;
  align-items: center;
  background: ${Color.Secondary};
  border-radius: 10px;
  font-weight: 500;
  font-size: 20px;
  padding: 0px 0px 0px 20px;
`;

const Button = styled.button`
  width: 85px;
  height: 36px;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  transition: all 0.4s;
  background: ${Color.White};
  &:hover {
    cursor: pointer;
    box-shadow: 5px 5px 10px ${Color.Gray_dark};
  }
`;

const Input = styled.input`
  background: ${Color.Secondary};
  width: 50%;
  border: none;
  color: ${Color.Black};
  font-weight: 500;
  font-size: 16px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &::placeholder {
    color: ${Color.White};
  }

  &:focus {
    outline: none;
  }
`;

export { StyledBudget, Button, Input };
