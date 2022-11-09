import React from "react";
import styled from "styled-components";

const StyledColorBox = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  margin: 2px;
  cursor: ${({ cursor }) => cursor};
  background-color: ${({ background }) => background};
`;

class ProductColorBox extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { onClick, border, background, size = "32px", cursor } = this.props;
    return (
      <div onClick={onClick} style={{ border: border }}>
        <StyledColorBox size={size} background={background} cursor={cursor} />
      </div>
    );
  }
}

export default ProductColorBox;
