import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 16px 32px;
  width: 100%;
  background-color: ${({ theme }) => theme.primary.main};
  color: white;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
`;

const OutlinedButton = styled.button`
  padding: ${({padding}) => padding};
  border: 1px solid ${({ theme }) => theme.black};
  background-color: white;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  background-color: white;
  cursor: pointer;
  text-transform: uppercase;
`;

class Button extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {
      children,
      onClick,
      outlined,     
      padding,
    } = this.props;

    if (outlined) {
      return (
        <OutlinedButton padding={padding} outlined={outlined} onClick={onClick}>
          {children}
        </OutlinedButton>
      );
    }

    return <StyledButton onClick={onClick}>{children}</StyledButton>;
  }
}

export default Button;
