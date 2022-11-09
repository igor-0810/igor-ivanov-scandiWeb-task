import React from 'react';

import { StyledSizeBox, StyledText } from "./style";

class ProductBox extends React.Component{
    constructor(){
        super();
        this.state= {
            
        }
    }
    
    render(){
   
        const {
          background,
          color,
          onClick,
          value,
          border,
          padding='10px 15px',
         cursor
        } = this.props;

        return (
          <StyledSizeBox
            onClick={onClick}    
            background={background}
            cursor={cursor}
            border={border}
            padding={padding}
          >
            <StyledText color={color}>
              {value}
            </StyledText>
          </StyledSizeBox>
        );
    }
}

export default ProductBox;