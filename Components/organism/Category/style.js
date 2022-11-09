import styled from "styled-components";


export const CardContainer = styled.div`  
  display: grid;
  column-gap: 40px;
  row-gap: 100px;
  grid-template-columns: auto auto auto;
 
`;

export const StyledTitle = styled.h2`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 160%;
  color: ${({theme}) => theme.black};
  text-transform: capitalize;
  margin: 0;
`;