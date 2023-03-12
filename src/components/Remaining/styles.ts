import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledRemaining = styled.div<{ $overspending: boolean }>`
   background: ${({ $overspending }) =>
    $overspending ? Color.Danger : Color.Gray};
  display: grid;
  width 100%;
  height 100px;
  align-items: center;
  border-radius: 10px;
  font-weight: 500;
  font-size: 20px;
  padding: 0px 20px;
`;

export { StyledRemaining };
