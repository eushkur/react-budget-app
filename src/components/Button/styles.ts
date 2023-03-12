import styled from "styled-components";
import { Color } from "../../ui/colors";

export const StyledButton = styled.button`
  width: 100%;
  padding: 15px 0px;
  font-size: 16px;
  background: ${Color.Primary};
  color: ${Color.White};
  border: none;
  border-radius: 10px;
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    box-shadow: 10px 10px 10px grey;
  }
`;
