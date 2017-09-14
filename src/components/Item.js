import React from 'react';
import './styles/Item.css';

const Item = ({ item }) => {
  const { name, cleanliness } = item;

  return (
    <button className="item">
      <h2>{name}</h2>
      <p>{cleanliness}</p>
    </button>
  );
};

export default Item;
