import axios from 'axios';
const baseUrl = 'https://crud-in-rails-api.herokuapp.com/api/tareas'  

export const getTodos = () => {
  return fetch(baseUrl)
  .then(res => res.json())
}

export const createTodo = (todo) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
    .then(res => res.json())
}

export const editTodo = (todo) => {
  return fetch(`${baseUrl}/${todo.id}`, {
    method: 'PUT',
    headers: { 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
    .then(res => res.json())
} 

export const destroyTodo = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}