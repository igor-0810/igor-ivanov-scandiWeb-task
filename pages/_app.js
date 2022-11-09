import App from "next/app";

import { ApolloProvider } from "@apollo/client";
import client from "../apollo/apollo-client";

import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme  } from "../config/globalStyles";
import { getLocalStorage } from "../helpers/localeStorage";



import { wraper, store } from "../store";
import { Provider } from "react-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Router } from "next/router";
import NProgress from "nprogress";

import { getCategories, getCurrencies, setShopState } from "../store/actions";

import {
  GET_CATEGORIES,
  GET_ALL_CURRENCY, 
} from "../apollo/queries";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const {
      data: { categories },
    } = await client.query({
      query: GET_CATEGORIES,
    });
    const {
      data: { currencies },
    } = await client.query({
      query: GET_ALL_CURRENCY,
    });

    return {
      categories,
      currencies,
    };
  }

  

  componentDidMount() {
    const { getCategories, categories, getCurrencies, currencies } = this.props;
    getCategories(categories);
    getCurrencies(currencies);
    const myProducts = getLocalStorage("myProducts");
    if (myProducts) {
      this.props.setShopState("userProducts", myProducts);
    }

    const handleRouteChange = (url) => {
      NProgress.start();
    };
    const handleRouteEnd = (url) => {
      NProgress.done();
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    Router.events.on("routeChangeStart", handleRouteChange);
    Router.events.on("routeChangeComplete", handleRouteEnd);
    Router.events.on("routeChangeError", handleRouteEnd);

    return () => {
      Router.events.off("routeChangeStart", () => 1);
      Router.events.off("routeChangeComplete", () => 1);
      Router.events.off("routeChangeError", () => 1);
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
           
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </ApolloProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getCategories,
      getCurrencies,
      setShopState,
    },
    dispatch
  );

export default wraper.withRedux(
  connect(mapStateToProps, mapDispatchToProps)(MyApp)
);
