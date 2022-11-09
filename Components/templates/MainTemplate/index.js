import React from "react";
import Header from "../../organism/Header";
import { connect } from "react-redux";
import { MainContainer } from "./style";

class Maintemplate extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { children, isCardOpen } = this.props;
    return (
      <>
        <Header />
        <MainContainer background={isCardOpen && "rgba(57, 55, 72, 0.22)"} opacity={isCardOpen ? '0.5' : ''}>
          {children}
        </MainContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isCardOpen: state.shop.isCardOpen,
});

export default connect(mapStateToProps, null)(Maintemplate);
Maintemplate;
