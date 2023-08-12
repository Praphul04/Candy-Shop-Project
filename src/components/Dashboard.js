import React from 'react';
import './Dashboard.css'

const Dashboard = ({ items, onAddToCart }) => {
  return (
    <div className='dashboard-container'>
      <h2>Dashboard</h2>
      {items.map(item => (
        <div key={item.name}>
          <p>Name: {item.name}</p>
          <p>Description: {item.description}</p>
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => onAddToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;