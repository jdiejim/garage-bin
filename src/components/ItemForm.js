import React, { Component } from 'react';
import { func } from 'prop-types';
import './styles/ItemForm.css';

class ItemForm extends Component {
  constructor() {
    super();
    this.state = {
      error: false,
      name: '',
      reason: '',
      cleanliness: 'Sparkling',
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.createItem = this.createItem.bind(this);
  }

  handleOnChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleOnSubmit(event) {
    event.preventDefault();

    this.createItem();
  }

  createItem() {
    const { name, reason, cleanliness } = this.state;
    const { updateItems } = this.props;

    fetch('api/v1/items', {
      method: 'POST',
      body: JSON.stringify({ name, reason, cleanliness }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(data => updateItems(data))
      .catch(() => this.setState({ error: true }));

    this.setState({ name: '', reason: '', cleanliness: 'Sparkling' });
  }

  render() {
    const { name, reason, cleanliness } = this.state;

    return (
      <section className="item-form">
        <form onSubmit={this.handleOnSubmit} className="item-form">
          <input onChange={this.handleOnChange} id="name" type="text" value={name} />
          <input onChange={this.handleOnChange} id="reason" type="text" value={reason} />
          <select id="cleanliness" onChange={this.handleOnChange} value={cleanliness}>
            <option value="Sparkling">Sparkling</option>
            <option value="Dusty">Dusty</option>
            <option value="Rancid">Rancid</option>
          </select>
          <button type="submit">submit</button>
        </form>
      </section>
    );
  }
}

ItemForm.defaultProps = {
  updateItems: func,
};

ItemForm.propTypes = {
  updateItems: func,
};

export default ItemForm;
