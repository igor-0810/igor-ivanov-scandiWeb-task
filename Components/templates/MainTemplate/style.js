import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 80px 100px;
  background-color: ${({ background }) => background};
  opacity:${({opacity}) => opacity}
`;
