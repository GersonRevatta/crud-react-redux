import React,{ Component } from 'react'

class Item extends Component {
  state = {
    editable: true
  }
  _onBlurContentEditable = () => {
    const { id, updateTodo, titulo } = this.props
    const titleRef  = this.titleRef
    const titleText = titleRef.innerText.trim()

    if (titleText.length && titleText !== titulo) {
      updateTodo({id: id, titulo: titleText})
      titleRef.innerText = titleText
    } else {
      titleRef.innerText = titulo
    }
  }
  render(){
    const { id, titulo, deleteTodo } = this.props
    return(
      <li  key={id} > 
            <div 
              contentEditable={this.state.editable}
              onBlur={this._onBlurContentEditable} 
              ref={ node => { this.titleRef = node }}
              >  
              {titulo}
            </div>
        <button  onClick={() => deleteTodo(id) } >
          Eliminar
        </button>
      </li>  
    )
  }
}

export default Item 
 