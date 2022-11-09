import React from "react";
import Router from "next/router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Image from "next/image";

import { setShopState } from "../../../store/actions";

import {
  getPriceInCurrency,
  handleAddProduct,
  handleRemoveProduct,
  handleGetTotalPrice
} from "../../../helpers/utils";

import {setLocalStorage} from '../../../helpers/localeStorage'

import ProductBox from "../../atoms/ProductBox";
import ProductColorBox from "../../atoms/ProductColorBox";
import Spacer from "../../atoms/Spacer";
import Button from "../../atoms/Button";

import { colors } from "../../../config/colors";

import {
  StyledBadge,
  StyledBadgeInfo,
  CardMini,
  ProductInfo,
  StyledCardTitle,
  AddRemoveBox,
  ProductsContainer,
} from "./style";

class ShopingBag extends React.Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
    this.BadgeRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleShopingCardOpen() {
    this.props.setShopState("isCardOpen", !this.props.isCardOpen);
  }

  addProduct(productIndex) {
    const allProducts = handleAddProduct(productIndex, this.props.userProducts);
    this.props.setShopState("userProducts", allProducts);
    setLocalStorage("myProducts", allProducts);
  }

  removeProduct(productIndex) {
    const allProducts = handleRemoveProduct(
      productIndex,
      this.props.userProducts
    );
    this.props.setShopState("userProducts", allProducts);
    setLocalStorage("myProducts", allProducts);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (
      this.ref &&
      this.BadgeRef &&
      !this.ref.current?.contains(event.target) &&
      !this.BadgeRef.current.contains(event.target) &&
      this.props.isCardOpen
    ) {
      this.handleShopingCardOpen();
    }
  }

  handleOpenShopingCard() {
    this.handleShopingCardOpen();
    Router.push(`/shoping-card`);
  }

  handleOrder() {
    // Here you will probably activate some mutation for ordering, and after remove data from locale storage
  }
  
  render() {
    const { userProducts, selectedCurrency } = this.props;

    return (
      <>
        <StyledBadge
          ref={this.BadgeRef}
          onClick={() => this.handleShopingCardOpen()}
        >
          <Image
            src="/images/Empty Cart.png"
            alt="Empty Card"
            width={25}
            height={25}
          />
          {userProducts.length > 0 && (
            <StyledBadgeInfo>
              <p>{userProducts.length}</p>
            </StyledBadgeInfo>
          )}
        </StyledBadge>
        {this.props.isCardOpen && (
          <CardMini ref={this.ref && this.ref}>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <StyledCardTitle weight={700}>My Bag, </StyledCardTitle>

              <StyledCardTitle weight={500}>
                {userProducts.length}
              </StyledCardTitle>

              <StyledCardTitle weight={500}>
                {" "}
                {userProducts.length === 1 ? " item" : " items"}
              </StyledCardTitle>
            </div>
            <Spacer height="32px" />
            <ProductsContainer>
              {userProducts.map((product, productIndex) => (
                <div
                  style={{ display: "flex", marginBottom: "40px" }}
                  key={product.id + productIndex}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{ width: "150px" }}>
                      <h5>{product.brand}</h5>
                      <h5>{product.name}</h5>
                      <Spacer height="10px" />
                      <h5 style={{ fontWeight: 600 }}>
                        {
                          getPriceInCurrency(product.prices, selectedCurrency)
                            .currency.symbol
                        }
                        {
                          getPriceInCurrency(product.prices, selectedCurrency)
                            .amount
                        }
                      </h5>
                      <Spacer height="10px" />
                      {product.attributes.map((attribute, attributeIndex) =>
                        attribute.id === "Color" ? (
                          <div key={attribute.id + attributeIndex}>
                            <h6>{attribute.name}:</h6>
                            <Spacer height="8px" />
                            <div style={{ display: "flex", flexWrap: "wrap" }}>
                              {attribute.items.map((item, indexItem) => (
                                <ProductColorBox
                                  key={item.id}
                                  border={
                                    item.value ===
                                    product.selectedAttributes[attributeIndex][
                                      attribute.name
                                    ]
                                      ? `2px solid ${colors.primary.main}`
                                      : "none"
                                  }
                                  background={item.value}
                                  size="20px"
                                />
                              ))}
                            </div>
                          </div>
                        ) : attribute.id === "Size" ? (
                          <div key={attribute.id + attributeIndex}>
                            <h6 variant="caption1">{attribute.name}:</h6>
                            <Spacer height="8px" />
                            <div style={{ display: "flex", flexWrap: "wrap" }}>
                              {attribute.items.map((item, indexItem) => (
                                <>
                                  <ProductBox
                                    style={{ cursor: null }}
                                    key={item.id}
                                    background={
                                      item.value ===
                                      product.selectedAttributes[
                                        attributeIndex
                                      ][attribute.name]
                                        ? colors.black
                                        : "white"
                                    }
                                    color={
                                      item.value ===
                                      product.selectedAttributes[
                                        attributeIndex
                                      ][attribute.name]
                                        ? "white"
                                        : colors.black
                                    }
                                    value={item.value}
                                    padding="5px 10px"
                                    border={colors.black}
                                  />
                                </>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div key={attribute.id + attributeIndex}>
                            <h6 variant="caption1">{attribute.name}:</h6>
                            <Spacer height="8px" />
                            <div style={{ display: "flex", flexWrap: "wrap" }}>
                              {attribute.items.map((item, indexItem) => (
                                <div key={item.id + indexItem}>
                                  <ProductBox
                                    style={{ cursor: null }}
                                    key={item.id}
                                    background={
                                      item.value ===
                                      product.selectedAttributes[
                                        attributeIndex
                                      ][attribute.name]
                                        ? colors.primary.dark
                                        : "white"
                                    }
                                    color={
                                      item.value ===
                                      product.selectedAttributes[
                                        attributeIndex
                                      ][attribute.name]
                                        ? "white"
                                        : colors.primary.dark
                                    }
                                    value={item.value}
                                    padding="5px 10px"
                                    border={colors.primary.dark}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                    <AddRemoveBox>
                      <Button
                        outlined
                        onClick={() => this.addProduct(productIndex)}
                      >
                        +
                      </Button>
                      <span>{product.numberOfProduct}</span>
                      <Button
                        outlined
                        onClick={() => this.removeProduct(productIndex)}
                      >
                        -
                      </Button>
                    </AddRemoveBox>
                  </div>
                  <Image
                    height={170}
                    width={120}
                    src={product.gallery[0]}
                    alt="image"
                  />
                </div>
              ))}
            </ProductsContainer>
            <Spacer height="50px" />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ fontWight: 500 }}>Total</p>
              <h5 style={{ fontWeight: 700 }}>
                {selectedCurrency.symbol}{" "}
                {handleGetTotalPrice(userProducts, selectedCurrency)}
              </h5>
            </div>
            <Spacer height="32px" />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div styled={{ flex: 1 }}>
                <Button
                  outlined
                  padding="16px 32px"
                  style={{ width: "48%" }}
                  onClick={() => this.handleOpenShopingCard()}
                >
                  View bag
                </Button>
              </div>
              <div styled={{ flex: 1 }}>
                <Button style={{ width: "48%" }} onClick={() => handleOrder}>
                  Check out
                </Button>
              </div>
            </div>
          </CardMini>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedCurrency: state.shop.selectedCurrency,
  userProducts: state.shop.userProducts,
  isCardOpen: state.shop.isCardOpen,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setShopState,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ShopingBag);
