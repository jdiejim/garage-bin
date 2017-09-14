import React from 'react';
import { arrayOf, object, func, string, bool } from 'prop-types';
import Item from './Item';
import { getKey } from '../helpers';
import './styles/ItemsList.css';

const ItemsList = (props) => {
  const { items, selectItem, changeFilter, filter, toggleAlphaSort, alpha, toggleItemForm } = props;

  if (!items.length) {
    return null;
  }

  const sortTitle = alpha ? 'Normal' : 'Alpha';
  let itemsList = [...items];

  if (alpha) {
    itemsList = itemsList.sort((a, b) => a.name.toLowerCase()[0] > b.name.toLowerCase()[0]);
  }

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
          <button onClick={toggleAlphaSort}>{sortTitle}</button>
          <button onClick={toggleItemForm}>Create</button>
        </nav>
      </header>
      <section className="items-list">
        {itemsList}
      </section>
    </section>
  );
};

ItemsList.defaultProps = {
  alpha: false,
  changeFilter: func,
  filter: 'All',
  items: [],
  selectItem: func,
  toggleAlphaSort: func,
  toggleItemForm: func,
};

ItemsList.propTypes = {
  alpha: bool,
  changeFilter: func,
  filter: string,
  items: arrayOf(object),
  selectItem: func,
  toggleAlphaSort: func,
  toggleItemForm: func,
};

export default ItemsList;
