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
  }

  fetchItems() {
    fetch('api/v1/items')
      .then(res => res.json())
      .then(items => this.setState({ items }))
      .catch(() => this.setState({ error: true }));
  }

  render() {
    const { items, item } = this.state;

    return (
      <section className="App">
        <button onClick={this.fetchItems}>open</button>
        <ItemsList items={items} />
        <ItemDetail item={item} />
      </section>
    );
  }
}

export default App;
