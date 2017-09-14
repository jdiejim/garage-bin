import React from 'react';
import { arrayOf, object, func, string } from 'prop-types';
import Item from './Item';
import { getKey } from '../helpers';
import './styles/ItemsList.css';

const ItemsList = ({ items, selectItem, changeFilter, filter }) => {
  let itemsList = items;

  if (filter !== 'All') {
    itemsList = itemsList.filter(item => item.cleanliness === filter);
  }

  itemsList = itemsList.map(item => (
    <Item key={getKey()} item={item} handleOnClick={selectItem} />
  ));

  return (
    <section className="items-list-wrapper">
      <header className="items-header">
        <nav>
          <button onClick={() => changeFilter('All')}>All</button>
          <button onClick={() => changeFilter('Sparkling')}>Sparkling</button>
          <button onClick={() => changeFilter('Dusty')}>Dusty</button>
          <button onClick={() => changeFilter('Rancid')}>Rancid</button>
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
  changeFilter: func,
  filter: 'All',
  items: [],
  selectItem: func,
};

ItemsList.propTypes = {
  changeFilter: func,
  filter: string,
  items: arrayOf(object),
  selectItem: func,
};

export default ItemsList;
