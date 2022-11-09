import React from 'react';

import Image from 'next/image';

import { StyledCard, StyledImage, StyledTypography } from "./style";


class Card extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            
        }
    }
    
    render(){
           const { name, price, image, onClick, opacity, outOfStock, pointer } =
             this.props;

 

        return (
          <StyledCard opacity={opacity} onClick={this.props.onClick} pointer={pointer} >
            <div className={"card-image"}>
              {" "}
              <Image
                layout="fill"               
                alt="pc"
                src={image}
                width={354}
                height={330}
              />
              {!outOfStock && <h3>Out of Stok</h3>}
            </div>

            <StyledTypography weight={300}>{name}</StyledTypography>
            <StyledTypography weight={600}>
              {price.currency.symbol} {price.amount}
            </StyledTypography>
          </StyledCard>
        );
    }
}


export default Card;