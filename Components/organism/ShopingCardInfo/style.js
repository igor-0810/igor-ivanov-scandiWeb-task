import styled from "styled-components";

export const AddRemoveBox = styled.div`
  display: flex;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
`;

export const ProductBox = styled.div`
  overflow: auto;
  scrollbar-width: thin;
  height: 380px;
  &::-webkit-scrollbar {
    width: 0.2em;
  }
  &::-webkit-scrollbar-track {
    background: #ffffff;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.primary.light};
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.primary.main};
  }
`;

export const StyledDivider = styled.div`
  height: 1px;
  background-color: #e5e5e5;
`;