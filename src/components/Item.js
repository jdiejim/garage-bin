import React from 'react';
import { objectOf, string } from 'prop-types';
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


Item.defaultProps = {
  item: {},
};

Item.propTypes = {
  item: objectOf(string),
};

export default Item;
