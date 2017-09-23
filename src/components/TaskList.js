import React , { Component } from 'react';
import classNames from 'classnames'
import { connect } from 'react-redux';
import { Button, Glyphicon } from 'react-bootstrap';
import store from '../store';
import { destroyTask , addTask ,editTask } from '../actionCreators';



const TaskList = ({products, destroyTask, addTask,editTask }) => {  

    return(
      <div>
      
      hola
      <button 
      className='add-todo' 
      href="#" 
      onClick={(e) =>{ 
        e.preventDefault(); 
        var todo = {'titulo': 'new Todo', descripcion: "Something", prioridad: 1, activo: false} 
        addTask(todo) 
      }} 
    >
    ADD 
    </button>
        <br/>
        <center>
          <table>
            { products.map(product => 
              <tr>
                <th>
                  <h3> {product.titulo} </h3>
                </th>
                <th>
                  <Button  bsStyle="danger" onClick={() => editTask(product.id)} >Cambiar</Button>
                </th>
                <th>
                  <Button  bsStyle="danger" onClick={() => destroyTask(product.id)}>Eliminar</Button>
                </th>
              </tr>
              
            )}  
            
          </table>
        </center>
      </div>
);  
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    destroyTask(products) {
      dispatch(destroyTask(products));
    },
    addTask(todo){
      dispatch(addTask(todo));
    },
    editTask(todo){
      dispatch(editTask(todo));
    }

  };
} 
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);