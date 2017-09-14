import React, { Component } from 'react';
import ItemsList from './ItemsList';
import ItemDetail from './ItemDetail';
import ItemForm from './ItemForm';
import { updateArray } from '../helpers';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      error: false,
      item: {},
      showItemForm: false,
    };

    this.fetchItems = this.fetchItems.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.updateState = this.updateState.bind(this);
    this.updateItems = this.updateItems.bind(this);
    this.toggleItemForm = this.toggleItemForm.bind(this);
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

  updateItems(item) {
    const { items } = this.state;
    console.log(item);
    
    items.push(item);

    this.setState({ items });
  }

  selectItem(item) {
    this.setState({ item, showItemForm: false });
  }

  toggleItemForm() {
    this.setState({ showItemForm: !this.state.showItemForm });
  }

  render() {
    const { items, item, showItemForm } = this.state;
    const itemDetailComponent = <ItemDetail item={item} updateState={this.updateState} />;
    const itemDetail = item.id && !showItemForm ? itemDetailComponent : null;
    const itemForm = showItemForm ? <ItemForm updateItems={this.updateItems} /> : null;

    return (
      <section className="App">
        <button onClick={this.fetchItems}>open</button>
        <button onClick={this.toggleItemForm}>create</button>
        <ItemsList items={items} selectItem={this.selectItem} />
        {itemDetail}
        {itemForm}
      </section>
    );
  }
}

export default App;
