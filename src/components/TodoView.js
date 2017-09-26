import React from 'react'
import TodoListContainer from '../container/TodoListContainer'
import HeaderTaskListContainer from '../container/HeaderTaskListContainer'

const TodosViewMain = () => (
  <div >
    <TodoListContainer />
  </div>
)

const TodosView = () => (
  <div >
    <HeaderTaskListContainer/>
    <TodosViewMain />
  </div>
)

export default TodosView 

