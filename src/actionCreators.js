import axios from 'axios';
const baseUrl = 'https://crud-in-rails-api.herokuapp.com/api/tareas'  
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
  return { type: "DESTROY_TASK", product };
};


/*
const addToCart = (product) => {
  return { type: "ADD_TO_CART", product };
};

*/
export { loadProducts , addToCart , destroyTask};


/*
export const createTodo = (todo) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
    .then(res => res.json())

}*/