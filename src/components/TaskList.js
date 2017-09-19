import React  from 'react';
import { connect } from 'react-redux';
import { Button, Glyphicon } from 'react-bootstrap';
import store from '../store';
import { addToCart } from '../actionCreators';


const TaskList = ({products, addToCart}) => {
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
                  <Button>Eliminar</Button>  
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
    addToCart(product) {
      dispatch(addToCart(product));
    }
  };
} 

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);

//export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

