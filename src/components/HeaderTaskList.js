import React from 'react'


const HeaderTaskList = ({ saveTodo }) => (
  <div>
    <button 
      onClick={(e) =>{ 
        e.preventDefault(); 
        var todo = {'titulo': 'new Todo', descripcion: "Something", prioridad: 1, activo: false} 
        saveTodo(todo) 
      }} 
    >
        Add
    </button>
  </div>
)
export default HeaderTaskList