import styled from "styled-components";
import Button from "../../atoms/Button";

export const StyledBadge = styled.div`
  position: relative;
  cursor: pointer;
`;

export const StyledBadgeInfo = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  background-color: ${({ theme }) => theme.black};

  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  top: -8px;
  left: 17px;
  p {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
  }
`;

export const CardMini = styled.div`
  padding: 32px 16px;
  min-width: 325px;
  height: 600px;
  position: absolute;
  top: 80px;
  right: 72px;
  background-color: white;
  z-index: 100;
`;

export const ProductsContainer = styled.div`
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

export const StyledCardTitle = styled.h5`
  font-weight: ${({ weight }) => weight};
  font-size: 16px;
  line-height: 160%;
  margin-right: 5px;
`;

export const ProductBox = styled.div`
  display: flex;
`;
export const ProductInfo = styled.div`
  display: flex;
`;

export const AddRemoveBox = styled.div`
  display: flex;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
`;
