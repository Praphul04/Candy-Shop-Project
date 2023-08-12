import React, { useState } from 'react';
import Input from './components/Input';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';

const App = () => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handleAddItem = newItem => {
    setItems(prevItems => [...prevItems, newItem]);
  };

  const handleAddToCart = item => {
    setCartItems(prevCartItems => [...prevCartItems, item]);
  };

  return (
    <div>
      <Input onAddItem={handleAddItem} />
      <Dashboard items={items} onAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;