import React from 'react';
import { shape, string, number, func } from 'prop-types';
import './styles/Item.css';

const Item = ({ item, handleOnClick }) => {
  const { name, cleanliness } = item;

  return (
    <button className="item" onClick={() => handleOnClick(item)}>
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
  handleOnClick: func,
};

Item.propTypes = {
  item: itemShape,
  handleOnClick: func,
};

export default Item;
