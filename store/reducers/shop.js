/* eslint-disable import/no-anonymous-default-export */
import {ShopActionTypes} from '../actions'

const initialState = {
  categories: [],
  currencies: [],
  selectedCurrency: {
    symbol: '$',
    label: 'USD'
  },
  selectedCategorie: 'all',
  userProducts: [],
  isCardOpen: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ShopActionTypes.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case ShopActionTypes.GET_CURRENCIES:
      return {
        ...state,
        currencies: action.payload,
      };
    case ShopActionTypes.SET_SHOP_STATE:
     
      return {
        ...state,
        [action.name]: action.values,
      };

    

    default:
      return state;
  }
};
