import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Router from "next/router";

import Image from "next/image";
import { colors } from "../../../config/colors";
import ShopingBag from "../../molecules/ShopingBag";

import {
  Container,
  FlexBoxes,
  CategoriesTypography,
  CurrencyTypography,
  Menu,
  BoxUnderline,
  CircleProduct,
  StyledTypography,
  StyledBadge,
} from "./style";

import { setShopState } from "../../../store/actions";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,      
    };
 
  }

  handleMenuOpen() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  handleCategoryChange = (key) => {
    this.props.setShopState("selectedCategorie", key);
    Router.push(`/`);
   
  };

  handleCurrencyChange = (currency) => {
    this.props.setShopState("selectedCurrency", currency);
    this.setState({
      isMenuOpen: null,
    });
  };
  

  render() {
    const rotate = this.state.isMenuOpen ? "rotate(180deg)" : "rotate(0)";
    const {
      currencies,
      selectedCurrency,
      categories,
      selectedCategorie,
      userProducts,
    } = this.props;

    return (
      <Container>
        <FlexBoxes display="flex">
          {categories.length > 0 &&
            categories.map((el, index) => (
              <BoxUnderline
                key={el.name}
                onClick={(e) => this.handleCategoryChange(el.name)}
                border={selectedCategorie === el.name}
              >
                <CategoriesTypography
                  color={
                    selectedCategorie === el.name
                      ? colors.primary.main
                      : colors.black
                  }
                >
                  {el.name}
                </CategoriesTypography>
              </BoxUnderline>
            ))}
        </FlexBoxes>
        <div>
          <Image src="/images/logo.png" alt="logo" width={32} height={30} />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FlexBoxes
            style={{ cursor: "pointer" }}
            // onClick={() => this.handleMenuOpen()}
          >
            {" "}
            <CurrencyTypography>{selectedCurrency.symbol}</CurrencyTypography>
            <Image
              src="/icons/arrow-down.svg"
              alt="arrow"
              width={15}
              height={15}
              style={{
                transform: rotate,
                transition: "all 0.2s linear",
                cursor: "pointer",
              }}
              onClick={() => this.handleMenuOpen()}
            />
          </FlexBoxes>
          <ShopingBag />
        </div>
        {this.state.isMenuOpen && (
          <Menu >
            {currencies.length > 0 &&
              currencies.map((el) => (
                <div
                  className="menu-item"
                  key={el.label}
                  onClick={() => this.handleCurrencyChange(el)}
                >
                  <CurrencyTypography>
                    {el.symbol} {el.label}
                  </CurrencyTypography>
                </div>
              ))}
          </Menu>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.shop.categories,
  currencies: state.shop.currencies,
  selectedCategorie: state.shop.selectedCategorie,
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
