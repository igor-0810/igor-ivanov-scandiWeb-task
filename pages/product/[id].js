import React from "react";

import { withRouter } from "next/router";

import client from "../../apollo/apollo-client";

import { GET_PRODUCT } from "../../apollo/queries";

import Maintemplate from "../../components/templates/MainTemplate";
import SingleProduct from '../../Components/organism/SingleProduct'

class Product extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  async componentDidMount() {
    const {
      query: { id },
    } = this.props.router;

    const {
      data: { product },
    } = await client.query({
      query: GET_PRODUCT,
      variables: {
        id,
      },
    });

    this.setState({
      product,
    });
  }

  render() {
    return (
      <Maintemplate>
        {this.state.product && <SingleProduct product={this.state.product} />}
      </Maintemplate>
    );
  }
}

export default withRouter(Product);
