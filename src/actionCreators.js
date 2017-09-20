import axios from 'axios';
const baseUrl = 'https://crud-in-rails-api.herokuapp.com/api/tareas/'  
const loadProducts = () => {
  return dispatch => {
    return axios.get(baseUrl)
      .then(response => {
        console.log(response.data);
        dispatch({ type: "REPLACE_PRODUCTS", products: response.data });
      });
  };
};

const addToCart = (product) => {
  return { type: "ADD_TO_CART", product };
};

const destroyTask = (product) => {
  const response = axios.delete(`${baseUrl}/${product}`)
  console.log(response.datas)
  console.log(response)
  console.log(response.id)
  return { type: "DESTROY_TASK",  product };
};



export { loadProducts , addToCart , destroyTask};

