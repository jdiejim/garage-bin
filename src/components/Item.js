import React from 'react';
import { shape, string, number } from 'prop-types';
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

const itemShape = shape({
  id: number,
  name: string,
  reason: string,
  cleanliness: string,
});

Item.defaultProps = {
  item: {},
};

Item.propTypes = {
  item: itemShape,
};

export default Item;
