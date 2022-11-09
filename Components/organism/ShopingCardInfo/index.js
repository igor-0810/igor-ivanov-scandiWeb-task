import React from "react";

import Image from "next/image";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getPriceInCurrency,
  handleAddProduct,
  handleRemoveProduct,
  handleGetTotalPrice,
  getQuantity
} from "../../../helpers/utils";

import {setLocalStorage} from '../../../helpers/localeStorage'
import { colors } from "../../../config/colors";

import { setShopState } from "../../../store/actions";

import ProductColorBox from "../../atoms/ProductColorBox";
import ProductBox from "../../atoms/ProductBox";
import Button from "../../atoms/Button";
import Spacer from "../../atoms/Spacer";

import { AddRemoveBox, StyledDivider } from "./style";

class ShopingCardInfo extends React.Component {
  constructor() {
    super();
    this.state = {};
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

  handleOrder() {
    // Here you will probably activate some mutation for ordering, and after remove data from locale storage
  }

  render() {
    const { userProducts, selectedCurrency } = this.props;

    return (
      <div>
        <h2
          style={{
            fontSize: "32px",
            lineHeight: "40px",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          Cart
        </h2>
        <Spacer height="55px" />

        {userProducts.map((product, productIndex) => (
          <>
            <div
              style={{ display: "flex", marginBottom: "40px" }}
              key={product.id}
            >
              <div style={{ display: "flex", width: "100%" }}>
                <div style={{ width: "100%" }}>
                  <h2>{product.brand}</h2>
                  <Spacer height="16px" />
                  <h2 style={{ fontWeight: 400 }}>{product.name}</h2>
                  <Spacer height="20px" />
                  <h3 style={{ fontWeight: 700 }}>
                    {
                      getPriceInCurrency(product.prices, selectedCurrency)
                        .currency.symbol
                    }
                    {
                      getPriceInCurrency(product.prices, selectedCurrency)
                        .amount
                    }
                  </h3>
                  <Spacer height="20px" />
                  {product.attributes.map((attribute, attributeIndex) =>
                    attribute.id === "Color" ? (
                      <>
                        <h4>{attribute.name}:</h4>
                        <Spacer height="8px" />
                        <div style={{ display: "flex" }}>
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
                              size="32px"
                            />
                          ))}
                        </div>
                      </>
                    ) : attribute.id === "Size" ? (
                      <>
                        <h4>{attribute.name}:</h4>
                        <Spacer height="8px" />
                        <div style={{ display: "flex" }}>
                          {attribute.items.map((item, indexItem) => (
                            <>
                              <ProductBox
                                style={{ cursor: null }}
                                key={item.id}
                                background={
                                  item.value ===
                                  product.selectedAttributes[attributeIndex][
                                    attribute.name
                                  ]
                                    ? colors.black
                                    : "white"
                                }
                                color={
                                  item.value ===
                                  product.selectedAttributes[attributeIndex][
                                    attribute.name
                                  ]
                                    ? "white"
                                    : colors.black
                                }
                                value={item.value}
                                padding="10px 15px"
                                border={colors.black}
                              />
                            </>
                          ))}
                        </div>
                      </>
                    ) : (
                      <>
                        <h4>{attribute.name}:</h4>
                        <Spacer height="8px" />
                        <div style={{ display: "flex" }}>
                          {attribute.items.map((item, indexItem) => (
                            <>
                              <ProductBox
                                style={{ cursor: null }}
                                key={item.id}
                                background={
                                  item.value ===
                                  product.selectedAttributes[attributeIndex][
                                    attribute.name
                                  ]
                                    ? colors.primary.dark
                                    : "white"
                                }
                                color={
                                  item.value ===
                                  product.selectedAttributes[attributeIndex][
                                    attribute.name
                                  ]
                                    ? "white"
                                    : colors.primary.dark
                                }
                                value={item.value}
                                padding="15px"
                                border={colors.primary.dark}
                              />
                            </>
                          ))}
                        </div>
                      </>
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
                height={200}
                width={288}
                src={product.gallery[0]}
                alt="image"
              />
            </div>{" "}
            <Spacer height="30px" />
            <StyledDivider />
            <Spacer height="30px" />
          </>
        ))}
        <div style={{ width: "300px" }}>
          <h3 style={{ fontWeight: 500, lineHeight: "28px" }}>
            {" "}
            Tax 21%:{" "}
            <strong>
              {this.props.selectedCurrency.symbol}{" "}
              {Math.round(
                handleGetTotalPrice(
                  this.props.userProducts,
                  this.props.selectedCurrency
                ) / 21
              ) + ".00"}
            </strong>
          </h3>
          <Spacer height="8px" />
          <h3 style={{ fontWeight: 500, lineHeight: "28px" }}>
            {" "}
            Quantity: <strong>{getQuantity(this.props.userProducts)}</strong>
          </h3>
          <Spacer height="8px" />
          <h3 style={{ fontWeight: 500, lineHeight: "28px" }}>
            {" "}
            Total:{" "}
            <strong>
              {this.props.selectedCurrency.symbol}{" "}
              {handleGetTotalPrice(
                this.props.userProducts,
                this.props.selectedCurrency
              )}
            </strong>
          </h3>
          <Spacer height="20px" />
          <Button onClick={() => this.handleOrder}>Order</Button>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ShopingCardInfo);
