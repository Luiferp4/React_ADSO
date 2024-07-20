// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import Navbar from './components/Navbar';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/" element={<UserPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
