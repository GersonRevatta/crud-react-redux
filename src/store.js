import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  products: [],
  cart: []

};

const reducer = (state=initialState, action) => {
  if (action.type === "REPLACE_PRODUCTS") {
    return {
      ...state,
      products: action.products
    };
  }  else if (action.type === "DESTROY_TASK") {
    return {
      ...state,
      products: state.products.filter(product => product.id !== action.product)
    }
  } else if (action.type === "ADD_TASK"){
    return {
      ...state,
      products: state.products.concat(action.response)
    }
  } else if(action.type === "EDIT_TASK"){
    return{
      ...state,
      products: state.products.filter(product => product.id !== action.product)
    }
  }
  return state;
};

export default createStore(reducer, applyMiddleware(thunk));

