

import React, { useState, useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const Admin = () => {
  const [productName, setProductName] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [price, setPrice] = useState('');
  const { addProduct } = useContext(ProductContext);

  const handleAddProduct = () => {
    // Convertir el precio a formato numérico adecuado
    const parsedPrice = parseFloat(price.replace(',', '.'));

    // Validar que el precio sea un número válido y mayor que cero
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      alert('Por favor, ingrese un precio válido.');
      return;
    }

    // Crear el nuevo producto con el precio parseado
    const newProduct = { id: Date.now(), name: productName, manufacturer, price: parsedPrice };
    addProduct(newProduct);

    // Limpiar los campos después de agregar el producto
    setProductName('');
    setManufacturer('');
    setPrice('');
  };

  const handlePriceChange = (value) => {
    // Reemplazar comas por puntos para asegurar un formato decimal válido
    const formattedPrice = value.replace(/,/g, '.');

    setPrice(formattedPrice);
  };

  const formatPriceForDisplay = (value) => {
    // Formatear el precio para mostrar comas como separadores de miles
    const formattedPrice = parseFloat(value).toLocaleString('es-ES', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    return formattedPrice;
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="productName" className="form-label">Nombre del Producto</label>
        <input type="text" className="form-control" id="productName" value={productName} onChange={(e) => setProductName(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="manufacturer" className="form-label">Fabricante</label>
        <input type="text" className="form-control" id="manufacturer" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">Precio</label>
        <input type="text" className="form-control" id="price" value={formatPriceForDisplay(price)} onChange={(e) => handlePriceChange(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={handleAddProduct}>Agregar Producto</button>
    </div>
  );
};

export default Admin;
