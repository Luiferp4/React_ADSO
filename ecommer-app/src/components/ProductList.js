

import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import { CartContext } from '../context/CartContext';

const ProductList = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const [message, setMessage] = useState('');

  const handleAddToCart = (product) => {
    addToCart(product);
    setMessage(`Cantidad actualizada para el producto: ${product.name}`);
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div>
      {message && <div className="alert alert-info">{message}</div>}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.length > 0 ? (
          products.map(product => (
            <div key={product.id} className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Fabricante: {product.manufacturer}</p>
                  <p className="card-text">Precio: ${product.price}</p>
                  <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>Agregar al Carrito</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
