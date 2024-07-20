import React from 'react';
import ProductList from '../components/ProductList';
import ShoppingCart from '../components/ShoppingCart';

const UserPage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <h2>Productos</h2>
          <ProductList />
        </div>
        <div className="col-md-4">
          <h2>Compras</h2>
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
