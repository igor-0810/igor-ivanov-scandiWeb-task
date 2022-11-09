import React from "react";
import Image from "next/image";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setShopState } from "../../../store/actions";


import Spacer from "../../atoms/Spacer";
import ProductBox from "../../atoms/ProductBox";
import ProductColorBox from "../../atoms/ProductColorBox";
import Button from "../../atoms/Button";
import {getLocalStorage, setLocalStorage} from '../../../helpers/localeStorage'

import Colors from "../../../config/colors";

import { getPriceInCurrency } from "../../../helpers/utils";

import { colors } from "../../../config/colors";
import { Container, Pictures, ProductInfo } from "./style";

class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPicture: this.props.product.gallery[0],
      productCurrency: null,    
    };
  }
          

  handleChangePicture(img) {
    this.setState({
      selectedPicture: img,
    });
  }
   
  componentDidMount() {
    const currency = getPriceInCurrency(
      this.props.product.prices,
      this.props.selectedCurrency
    );

    const attributes = [];

    this.props.product.attributes.forEach((el) => {
      attributes.push({ [el.name]: el.items[0].value });
    });

    this.setState({
      productCurrency: currency,
      productAtributes: attributes,
    });
    
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedCurrency !== this.props.selectedCurrency) {
      const currency = getPriceInCurrency(
        this.props.product.prices,
        this.props.selectedCurrency
      );
      this.setState({
        productCurrency: currency,
      });
      
    }
  }

  handleAttributChoose(index, name, value) {
    let attributes = [...this.state.productAtributes];
    attributes.splice(index, 1, { [name]: value });

    this.setState({
      productAtributes: attributes,
    });
  }

  render() {
    const { product, userProducts } = this.props;


    const handleAddToCard = () => {
      let item = {
        ...product,
        numberOfProduct: 1,
        selectedAttributes: this.state.productAtributes,
      };
      setLocalStorage("myProducts", [...userProducts, item])

      this.props.setShopState("userProducts", [...userProducts, item]);
    };

    return (
      <Container>
        <Pictures>
          {product.gallery.map((img, index) => (
            <Image
              key={img + index}
              src={img}
              alt="img"
              width={79}
              height={80}
              onClick={() => this.handleChangePicture(img)}
              style={{ marginBottom: "20px" }}
            />
          ))}
        </Pictures>
        <Spacer width="50px" />
        <Image
          src={this.state.selectedPicture}
          alt="pic"
          width={610}
          height={511}
        />
        <Spacer width="100px" />
        <ProductInfo>
          <h2 style={{ fontWeight: 600 }}>{product.name}</h2>
          <Spacer height="16px" />
          <h2 style={{ fontWeight: 400 }}>{product.brand}</h2>{" "}
          <Spacer height="43px" />
          {product.attributes.map((el, attributeIndex) =>
            el.id === "Size" ? (
              <div key={el.id + attributeIndex}>
                <h4>{el.name}:</h4>
                <Spacer height="8px" />
                <div style={{ display: "flex" }}>
                  {el.items.map(
                    (item, indexItem) =>
                      this.state.productAtributes && (
                        <ProductBox
                          key={item.id}
                          value={item.value}
                          onClick={() =>
                            this.handleAttributChoose(
                              attributeIndex,
                              el.name,
                              item.value
                            )
                          }
                          cursor="pointer"
                          background={
                            item.value ===
                            this.state.productAtributes[attributeIndex][el.name]
                              ? colors.black
                              : "white"
                          }
                          color={
                            item.value ===
                            this.state.productAtributes[attributeIndex][el.name]
                              ? "white"
                              : colors.black
                          }
                        />
                      )
                  )}
                </div>
              </div>
            ) : el.id === "Color" ? (
              <div key={el.id + attributeIndex}>
                <h4>{el.name}:</h4>
                <Spacer height="8px" />
                <div style={{ display: "flex" }}>
                  {el.items.map(
                    (item, indexItem) =>
                      this.state.productAtributes && (
                        <div key={item.id + indexItem}>
                          <ProductColorBox
                            onClick={() =>
                              this.handleAttributChoose(
                                attributeIndex,
                                el.name,
                                item.value
                              )
                            }
                            border={
                              item.value ===
                              this.state.productAtributes[attributeIndex][
                                el.name
                              ]
                                ? `2px solid ${colors.primary.main}`
                                : "none"
                            }
                            cursor="pointer"
                            background={item.value}
                          />
                          <Spacer width="10px" />
                        </div>
                      )
                  )}
                </div>
              </div>
            ) : (
              <div key={el.id + attributeIndex}>
                <h4>{el.name}:</h4>
                <Spacer height="8px" />
                <div style={{ display: "flex", marginBottom: "40px" }}>
                  {el.items.map(
                    (item) =>
                      this.state.productAtributes && (
                        <ProductBox
                          key={item.id}
                          value={item.value}
                          onClick={() =>
                            this.handleAttributChoose(
                              attributeIndex,
                              el.name,
                              item.value
                            )
                          }
                          background={
                            item.value ===
                            this.state.productAtributes[attributeIndex][el.name]
                              ? colors.primary.dark
                              : "white"
                          }
                          cursor="pointer"
                          color={
                            item.value ===
                            this.state.productAtributes[attributeIndex][el.name]
                              ? "white"
                              : colors.primary.dark
                          }
                          border={colors.primary.dark}
                        />
                      )
                  )}
                </div>
              </div>
            )
          )}
          <Spacer height="38px" />
          <h4>Price:</h4>
          <Spacer height="8px" />
          <h4 style={{ fontFamily: "Raleway" }}>
            {this.state.productCurrency &&
              this.state.productCurrency.currency.symbol}
            {this.state.productCurrency && this.state.productCurrency.amount}
          </h4>
          <Spacer height="20px" />
          <Button disabled onClick={() => handleAddToCard()}>
            Add to card
          </Button>
          <Spacer height="40px" />
          <p dangerouslySetInnerHTML={{ __html: product.description }} />
        </ProductInfo>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedCurrency: state.shop.selectedCurrency,
  userProducts: state.shop.userProducts,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setShopState,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
