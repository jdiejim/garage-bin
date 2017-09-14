import React from 'react';
import { arrayOf, object, func } from 'prop-types';
import Item from './Item';
import { getKey } from '../helpers';
import './styles/ItemsList.css';

const ItemsList = ({ items, selectItem }) => {
  const itemsList = items.map(item => (
    <Item key={getKey()} item={item} handleOnClick={selectItem} />
  ));

  return (
    <section className="items-list-wrapper">
      <header className="items-header">
        <nav>
          <button>All</button>
          <button>Sparkling</button>
          <button>Dusty</button>
          <button>Rancid</button>
        </nav>
        <nav>
          <button>Alpha</button>
          <button>Date</button>
        </nav>
      </header>
      <section className="items-list">
        {itemsList}
      </section>
    </section>
  );
};

ItemsList.defaultProps = {
  items: [],
  selectItem: func,
};

ItemsList.propTypes = {
  items: arrayOf(object),
  selectItem: func,
};

export default ItemsList;
