import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledListItem = styled.li`
  display: grid;
  grid-template-columns: 80% 10% 10%;
  align-items: center;
  padding: 0px 20px;
  font-size: 19px;
  border-bottom: 1px solid ${Color.Gray};
  
`;

const ButtonClose = styled.button`
  background: none;
  border: none;
  width: 16px;
  height: 16px;
  justify-self:end;
  &:hover {
    cursor: pointer;
  }
`;

export { StyledListItem, ButtonClose };
