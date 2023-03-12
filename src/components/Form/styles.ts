import styled from "styled-components";
import { Color } from "../../ui/colors";

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 15px 20px;
  font-size: 16px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
  flood-color: ${Color.Gray_dark};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const Error = styled.p`
  margin: -10px 5px 5px;
  color: ${Color.Danger};
`;
export const StyledForm = styled.form`
display: grid;
gap: 20px;
`;