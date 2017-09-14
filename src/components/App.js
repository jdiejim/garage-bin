import React, { Component } from 'react';
import ItemsList from './ItemsList';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      error: false,
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
    const { items } = this.state;

    return (
      <section className="App">
        <button onClick={this.fetchItems}>open</button>
        <ItemsList items={items} />
      </section>
    );
  }
}

export default App;
