import styled from 'styled-components'

export const StyledSizeBox = styled.div`
  padding: ${({padding}) => padding};
  margin-right: 12px;
  margin-bottom: 12px;
  cursor: ${({cursor}) => cursor};
  background-color: ${({ background }) => background};
  border: 1px solid ${({ border }) => border};

`;

export const StyledText = styled.p`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: ${({color}) => color}
`;