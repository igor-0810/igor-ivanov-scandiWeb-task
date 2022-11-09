import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-star;
`;
export const Pictures = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  height: 511px;
  overflow-y: auto;
  padding-right: 20px;
  scrollbar-width: thin;
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



export const ProductInfo = styled.div`
  width: 300px;
`;






