import styled from "styled-components";
import Image from "next/image";

export const StyledCard = styled.div`
  max-width: 386px;
  padding: 16px;
  box-shadow: none;
  cursor: ${({pointer}) => pointer};
  opacity: ${({ opacity }) => opacity};
  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
  .card-image {
    height: 330px;
    width: 100%;
    position: relative;
    h3 {
      text-transform: uppercase;
      top: 50%;
      left: 50%;
      position: absolute;
      transform: translate(-50%);
      -webkit-transform: translate(-50%);
      -ms-transform: translate(-50%);     
      font-weight: 400;
      font-size: 24px;
      line-height: 160%;
    }
  }
`;

export const StyledImage = styled(Image)`
  && {
  }
`;

export const StyledTypography = styled.h5`
  font-weight: ${({ weight }) => weight};
  font-size: 18px; 
`;
