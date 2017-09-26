import { connect } from 'react-redux'
import { saveTodo } from '../actions/todos' 
import HeaderTaskList from '../components/HeaderTaskList'

export default connect(
  null,
  {saveTodo}
)(HeaderTaskList)