import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import shop from './shop';

const hydrate = (state = {}, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  shop,
});


export default rootReducer