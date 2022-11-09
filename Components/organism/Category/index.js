import React from "react";

import Router from "next/router";

import client from "../../../apollo/apollo-client";
import { GET_SINGLE_CATEGORY } from "../../../apollo/queries";

import { connect } from "react-redux";

import { getPriceInCurrency } from "../../../helpers/utils";

import Card from "../../atoms/Card";
import Spacer from "../../atoms/Spacer";

import { StyledTitle, CardContainer } from "./style";

const getCategory = async (cat) => {
  const {
    data: { category },
  } = await client.query({
    query: GET_SINGLE_CATEGORY,
    variables: {
      input: {
        title: cat,
      },
    },
  });
  return category;
};

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // ref: React.createRef(),
      product: {}
    };
  }

  async componentDidMount() {
    const category = await getCategory(this.props.selectedCategorie);
    this.setState({
      category,
    });
  //  window.addEventListener("mousedown", this.handleProductOpen);
  }

  async componentDidUpdate(prevProps,prevState) {
    if (prevProps.selectedCategorie !== this.props.selectedCategorie) {
      const category = await getCategory(this.props.selectedCategorie);
      this.setState({
        category,
      });
    }
    // if(this.props.isCardOpen === 'true') {
      
    //   document.addEventListener(
    //     "click",
    //     (e) => {
        
    //       e.preventDefault();
    //       e.stopPropagation();
    //     },
    //     true
    //   );
    // }
   
  }

  

  handleProductOpen = (e, id, inStock) => {
    
      // e.preventDefault();
      // e.stopPropagation();
      // console.log(this.props.isCardOpen)
    // if (this.props.isCardOpen) {
    //   return;
    // }
    if (inStock) {
      Router.push(`/product/${id}`);
    }
  };

  handleGetPointer(inStock, openCard) {
    if (!inStock && !openCard) {
      return "not-allowed";
    }
    if (openCard) {
      return "not-allowed";
    }

    return "pointer";
  }

  render() {

    // console.log(this.props.isCardOpen)
    return (
      <>
        <h1 style={{ textTransform: "capitalize" }}>
          {this.state.category?.name}
        </h1>
        <Spacer height="100px" />
        <CardContainer>
          {this.state.category &&
            this.state.category.products.map((product) => (
              <Card
                // ref={this.state.ref}
                key={product.id}
                name={product.name}
                image={product.gallery[0]}
                price={getPriceInCurrency(
                  product.prices,
                  this.props.selectedCurrency
                )}
                opacity={!product.inStock ? "0.5" : ''}
                outOfStock={product.inStock}
                onClick={(e) =>  this.handleProductOpen(e, product.id, product.inStock)
                  
                }
               
                pointer={this.handleGetPointer(
                  product.inStock,
                  this.props.isCardOpen
                )}
              />
            ))}
        </CardContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedCategorie: state.shop.selectedCategorie,
  selectedCurrency: state.shop.selectedCurrency,
  isCardOpen: state.shop.isCardOpen,
});

export default connect(mapStateToProps, null)(Category);
