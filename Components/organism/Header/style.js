import styled from "styled-components";

export const Container = styled.div`
  padding: 0 117px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

`;
export const FlexBoxes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
`;

export const BoxUnderline = styled.div`
  padding: 28px 16px 32px 16px;
  border-bottom: 2px solid
    ${({ theme, border }) => (border ? theme.primary.main : "none")};
`;

export const CategoriesTypography = styled.span`
  text-transform: uppercase;
  color: ${({ color }) => color};
  cursor: pointer;
`;

export const CurrencyTypography = styled.h5`
  font-size: 18px;
  font-weight: 500;
  margin-right: 10px;
`;

export const Menu = styled.div`
  position: absolute;
  right: 150px;
  top: 80px;
  z-index: 100;
  background-color: white;  
  filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
  .menu-item {
    width: 115px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      background-color: #eeeeee;
    }
  }
`;

export const CircleProduct = styled.div`
  display: flex;
  alignitems: center;
  position: relative;
`;
