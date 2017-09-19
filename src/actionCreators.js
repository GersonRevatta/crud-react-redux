import axios from 'axios';

const loadProducts = () => {
  return dispatch => {
    return axios.get("https://crud-in-rails-api.herokuapp.com/api/tareas")
      .then(response => {
        console.log(response.data);
        dispatch({ type: "REPLACE_PRODUCTS", products: response.data });
      });
  };
};

const addToCart = (product) => {
  return { type: "ADD_TO_CART", product };
};


export { loadProducts ,addToCart};