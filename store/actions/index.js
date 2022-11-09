export const ShopActionTypes = Object.freeze({
  SET_SHOP_STATE: "SET_SHOP_STATE",
  GET_CATEGORIES: "GET_CATEGORIES",
  GET_CURRENCIES: "GET_CURRENCIES",  
});


export const setShopState = (name, values) => {

  return {
    type: ShopActionTypes.SET_SHOP_STATE,
    name,
    values,
  };
}

export const getCategories = (values) => ({
  type: ShopActionTypes.GET_CATEGORIES,
  payload: values
});

export const getCurrencies = (values) => ({
  type: ShopActionTypes.GET_CURRENCIES,
  payload: values
})

