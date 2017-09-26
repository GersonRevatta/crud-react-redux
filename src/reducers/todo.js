const initState = {
 todos: []
} 


export default (state = initState , action) => {
  switch (action.type) { 
    case 'TODO_ADD':
      return {
        ...state,
         todos: state.todos.concat(action.payload)}
    case 'TODOS_LOAD':
      return {
        ...state,
         todos: action.payload} 
    case 'TODO_DELETE':
      return {
        ...state, 
        todos: state.todos.filter(t => t.id !== action.payload),
      }
    case 'TODO_UPDATE': 
      return {
        ...state, 
        todos: state.todos
        .map(t => t.id === action.payload.id ? action.payload : t)}
    
    default:
      return state
  }
}