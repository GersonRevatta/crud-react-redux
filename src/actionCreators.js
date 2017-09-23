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



const destroyTask = (product) => {
  const response = axios.delete(`${baseUrl}/${product}`)
  return { type: "DESTROY_TASK",  product };
};

const addTask = (todo) => {
  return dispatch=>{
    return axios.post(`${baseUrl}`,todo)
    .then(response=>{
      dispatch({type:"ADD_TASK",response: response.data});
    }); 
  }
}

const editTask = (todo) => {
  return dispatch=>{
    //return axios.get(`${baseUrl}/${todo}`)
    return axios({
      method:'put',
      url:`${baseUrl}/${todo}`,
      data: { "titulo":"hola worl :D","descripcion":"hi world","prioridad":3,"activo":true} 
    })
    .then(response=>{
      console.log(todo)
      console.log(response);
      console.log(response.data);
      dispatch({type:"EDIT_TASK",response: response.data});
    }); 
  }
}

// { "titulo":"hola worl :D","descripcion":"hi world","prioridad":3,"activo":true} 

export { loadProducts  , destroyTask , addTask , editTask};

