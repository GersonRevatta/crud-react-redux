const baseUrl = 'https://crud-in-rails-api.herokuapp.com/api/tareas'  
const loadProducts = () => {
  return dispatch => {
    return fetch(baseUrl)
      .then(response => {
        console.log(response.data);
        dispatch({ type: "REPLACE_PRODUCTS", products: response.data });
      });
  };
};




