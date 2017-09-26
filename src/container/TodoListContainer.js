import { connect } from 'react-redux'
import { fetchTodos, deleteTodo,  updateTodo} from '../actions/todos' 
import TaskList from '../components/TaskList'

function mapStateToProps(state) {
  return { 
    todos: state.todo.todos
  }
}   

export default connect(
  mapStateToProps,
  {fetchTodos,deleteTodo, updateTodo}
)(TaskList)