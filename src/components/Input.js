import React, { useState } from 'react';
import './Input.css';


const Input = ({ onAddItem }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAddItem = () => {
    const newItem = {
      name,
      description,
      price,
      quantity
    };

    onAddItem(newItem);

    setName('');
    setDescription('');
    setPrice('');
    setQuantity('');
  };

  const nameChangeHandler = event => {
    setName(event.target.value);
  };

  const descriptionChangeHandler = event => {
    setDescription(event.target.value);
  };

  const priceChangeHandler = event => {
    setPrice(event.target.value);
  };

  const quantityChangeHandler = event => {
    setQuantity(event.target.value);
  };

  return (
    <div className="input-container">
        <h1>Candy Shop Dashboard</h1>
      <input
        type="text"
        value={name}
        onChange={nameChangeHandler}
        placeholder="Name"
      />
      <input
        type="text"
        value={description}
        onChange={descriptionChangeHandler}
        placeholder="Description"
      />
      <input
        type="number"
        value={price}
        onChange={priceChangeHandler}
        placeholder="Price"
      />
      <input
        type="number"
        value={quantity}
        onChange={quantityChangeHandler}
        placeholder="Quantity"
      />
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
};

export default Input;