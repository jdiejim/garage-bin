import React from 'react';
import { shape, string, number, func } from 'prop-types';
import './styles/Item.css';

const Item = ({ item, handleOnClick, selectedId, colors }) => {
  const { id, name, cleanliness } = item;

  const bgColor = { backgroundColor: colors[cleanliness] };
  const itemClass = selectedId === id ? 'item item-active' : 'item';

  return (
    <button style={bgColor} className={itemClass} onClick={() => handleOnClick(item)}>
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
