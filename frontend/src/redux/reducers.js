import { ADD_TO_CART } from './actions';

const initialState = {
  cart: [],
  products: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
