import React  from 'react';
import { connect } from 'react-redux';
import { Button, Glyphicon } from 'react-bootstrap';
import store from '../store';
import { destroyTask } from '../actionCreators';


const TaskList = ({products, destroyTask}) => {
    return(
      <div>
        <Button>Add</Button>  
        <br/>
        <center>
          <table>
            { products.map(product => 
              <tr key={product.id}>
                <th>
                  <h3> {product.titulo} </h3>
                </th>
                <th>
                  <h3>{product.descripcion}</h3>
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
    }
  };
} 
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
