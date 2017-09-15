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
      <section className="item-form-wrapper">
        <form onSubmit={this.handleOnSubmit} className="item-form">
          <div className="input-wrapper">
            <h3 className="label">Name</h3>
            <input className="item-input" onChange={this.handleOnChange} id="name" type="text" value={name} placeholder="Enter Name" />
          </div>
          <div className="input-wrapper">
            <h3 className="label">Reason</h3>
            <input className="item-input" onChange={this.handleOnChange} id="reason" type="text" value={reason} placeholder="Enter Reason" />
          </div>
          <div className="input-wrapper">
            <h3 className="label">Cleanliness</h3>
            <select id="cleanliness" onChange={this.handleOnChange} value={cleanliness}>
              <option value="Sparkling">Sparkling</option>
              <option value="Dusty">Dusty</option>
              <option value="Rancid">Rancid</option>
            </select>
          </div>
          <button className="btn-submit" type="submit">submit</button>
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


