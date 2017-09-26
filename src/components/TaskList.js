import React, { Component } from 'react' 
import Item from './Item'

class TaskList extends Component {
  componentDidMount(){
    this.props.fetchTodos()
  }
  render(){
    const { todos, ...rest } = this.props
    if(this.props.todos.length == 0){
      return <div>Loading...</div>
    }
    return ( 
      <div className="Todo-List">
        <ul>
          {this.props.todos.map(todo => 
            <Item key={todo.id}  {...todo} {...rest} /> 
          )} 
        </ul>
      </div>   
    )
  }
} 

export default TaskList