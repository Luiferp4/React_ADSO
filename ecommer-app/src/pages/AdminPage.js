

import React, { useState, useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const AdminPage = () => {
  const { products, addProduct, updateProduct, deleteProduct } = useContext(ProductContext);

  const [editingProductId, setEditingProductId] = useState(null);
  const [productName, setProductName] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  const handleAddProduct = () => {
    const newProduct = { id: Date.now(), name: productName, manufacturer, price: parseFloat(price) };
    addProduct(newProduct);
    setMessage('Producto agregado con éxito');
    setProductName('');
    setManufacturer('');
    setPrice('');

    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  const handleEditProduct = (product) => {
    setEditingProductId(product.id);
    setProductName(product.name);
    setManufacturer(product.manufacturer);
    setPrice(product.price.toString());
  };

  const handleSaveEdit = () => {
    const updatedProduct = {
      id: editingProductId,
      name: productName,
      manufacturer,
      price: parseFloat(price),
    };
    updateProduct(updatedProduct);
    setEditingProductId(null);
    setProductName('');
    setManufacturer('');
    setPrice('');
  };

  const cancelEdit = () => {
    setEditingProductId(null);
    setProductName('');
    setManufacturer('');
    setPrice('');
  };

  const handleDeleteProduct = (productId) => {
    deleteProduct(productId);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'productName') {
      setProductName(value);
    } else if (name === 'manufacturer') {
      setManufacturer(value);
    } else if (name === 'price') {
      setPrice(value);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Admin Panel - Productos Agregados</h2>
      <div>
        {message && <div className="alert alert-success">{message}</div>}
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">Nombre del Producto</label>
          <input type="text" className="form-control" id="productName" name="productName" value={productName} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="manufacturer" className="form-label">Fabricante</label>
          <input type="text" className="form-control" id="manufacturer" name="manufacturer" value={manufacturer} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Precio</label>
          <input type="number" className="form-control" id="price" name="price" value={price} onChange={handleInputChange} />
        </div>
        {editingProductId ? (
          <div>
            <button className="btn btn-primary" onClick={handleSaveEdit}>Guardar Cambios</button>
            <button className="btn btn-secondary ms-2" onClick={cancelEdit}>Cancelar</button>
          </div>
        ) : (
          <button className="btn btn-primary" onClick={handleAddProduct}>Agregar Producto</button>
        )}
      </div>
      <hr />
      <div>
        <h3>Lista de Productos</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Fabricante</th>
              <th scope="col">Precio</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.manufacturer}</td>
                <td>${product.price}</td>
                <td>
                  <button className="btn btn-info me-2" onClick={() => handleEditProduct(product)}>Editar</button>
                  <button className="btn btn-danger" onClick={() => handleDeleteProduct(product.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
