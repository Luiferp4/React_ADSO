// ShoppingCart.js
/*
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ShoppingCart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Carrito de Compras</h5>
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <ul className="list-group">
            {cart.map(item => (
              <li key={item.id} className="list-group-item">
                {item.name} - ${item.price}
                <button className="btn btn-danger ms-2" onClick={() => handleRemoveFromCart(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
        <button className="btn btn-success mt-3">Realizar Compra</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
*/


/*
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ShoppingCart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Carrito de Compras</h5>
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <ul className="list-group">
            {cart.map(item => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <span>
                  {item.name} - ${item.price}
                </span>
                <button className="btn btn-danger btn-sm" onClick={() => handleRemoveFromCart(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
        <button className="btn btn-success mt-3">Realizar Compra</button>
      </div>
    </div>
  );
};

export default ShoppingCart;

*/


/*
// ShoppingCart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ShoppingCart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Carrito de Compras</h5>
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <ul className="list-group">
            {cart.map(item => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                {item.name} - ${item.price} x {item.quantity}
                <button className="btn btn-danger ms-2" onClick={() => handleRemoveFromCart(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
        <button className="btn btn-success mt-3">Realizar Compra</button>
      </div>
    </div>
  );
};

export default ShoppingCart;

*/

import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ShoppingCart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Carrito de Compras</h5>
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <ul className="list-group">
            {cart.map(item => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                {item.name} - ${item.price} x {item.quantity}
                <button className="btn btn-danger ms-2" onClick={() => handleRemoveFromCart(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
        <button className="btn btn-success mt-3">Realizar Compra</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
