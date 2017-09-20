import axios from 'axios';
const baseUrl = 'https://crud-in-rails-api.herokuapp.com/api/tareas/'  
const loadProducts = () => {
  return dispatch => {
    return axios.get(baseUrl)
      .then(response => {
        //console.log(response.data);
        dispatch({ type: "REPLACE_PRODUCTS", products: response.data });
      });
  };
};

const addToCart = (product) => {
  return { type: "ADD_TO_CART", product };
};

const destroyTask = (product) => {
  const response = axios.delete(`${baseUrl}/${product}`)
  return { type: "DESTROY_TASK",  product };
};

//corregir
const addTask = (todo) => {
  return dispatch=>{
    return axios.post(`${baseUrl}`,todo)
    .then(response=>{
      console.log(response);
      console.log(response.data)
      dispatch({type:"ADD_TASK",response: response.data});
    }); 
  }
 /* console.log(todo);
  console.log(todo.titulo );
  return { type: "ADD_TASK", response: todo };
*/
}
/*
const editTask = () => {

}*/
// { "titulo":"hola worl :D","descripcion":"hi world","prioridad":3,"activo":true} 

export { loadProducts , addToCart , destroyTask , addTask };

