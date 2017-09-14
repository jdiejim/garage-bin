import React, { Component } from 'react';
import ItemsList from './ItemsList';
import ItemDetail from './ItemDetail';
import { updateArray } from '../helpers';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      error: false,
      item: {},
    };

    this.fetchItems = this.fetchItems.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  fetchItems() {
    fetch('api/v1/items')
      .then(res => res.json())
      .then(items => this.setState({ items }))
      .catch(() => this.setState({ error: true }));
  }

  updateState(item) {
    const { items } = this.state;

    this.setState({ items: updateArray(items, item), item });
  }

  selectItem(item) {
    this.setState({ item });
  }

  render() {
    const { items, item } = this.state;
    const itemDetail = !item.id ? null : <ItemDetail item={item} updateState={this.updateState} />;

    return (
      <section className="App">
        <button onClick={this.fetchItems}>open</button>
        <ItemsList items={items} selectItem={this.selectItem} />
        {itemDetail}
      </section>
    );
  }
}

export default App;
