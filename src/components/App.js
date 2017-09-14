import React, { Component } from 'react';
import ItemsList from './ItemsList';
import ItemDetail from './ItemDetail';
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
  }

  fetchItems() {
    if (!this.state.items.length) {
      fetch('api/v1/items')
        .then(res => res.json())
        .then(items => this.setState({ items }))
        .catch(() => this.setState({ error: true }));
    }
  }

  selectItem(item) {
    this.setState({ item });
  }

  render() {
    const { items, item } = this.state;

    if (!item.id) {
      return (
        <section className="App">
          <button onClick={this.fetchItems}>open</button>
          <ItemsList items={items} selectItem={this.selectItem} />
        </section>
      );
    }

    return (
      <section className="App">
        <button onClick={this.fetchItems}>open</button>
        <ItemsList items={items} selectItem={this.selectItem} />
        <ItemDetail item={item} />
      </section>
    );
  }
}

export default App;
