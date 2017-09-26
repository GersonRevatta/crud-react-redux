import { getTodos, destroyTodo, createTodo, editTodo } from '../api/todoServices'


export const fetchTodos = () => {
  return (dispatch) => {
    getTodos()
      .then(todos => dispatch(
        {type: 'TODOS_LOAD' , payload: todos}
        ))
  }
}

export const saveTodo = (name) => {
  return (dispatch) => { 
    createTodo(name)
    .then(res => dispatch(
      {type: 'TODO_ADD', payload: res}
      ))
  }
}

export const deleteTodo = (id) => {
  return (dispatch) => { 
    destroyTodo(id)
      .then(() => dispatch(
        {type: 'TODO_DELETE',  payload: id}
        )) 
  }
}

export const updateTodo = (todo) => {
  return (dispatch) => {  
    editTodo(todo)
      .then(res => dispatch(
        {type: 'TODO_UPDATE', payload: res }
        ))
  }
}
 