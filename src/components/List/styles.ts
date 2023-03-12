import styled from "styled-components";

const StyledList = styled.ul<{ $isSearching: boolean }>`
  display: grid;
  gap: 20px;
  overflow-y: auto;
  `;

const Phrase = styled.p`
  text-align: center;
  font-size: 20px;
`;

export { StyledList, Phrase };
