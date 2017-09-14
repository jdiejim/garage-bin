import React, { Component } from 'react';
import { number, string, shape, func } from 'prop-types';
import './styles/ItemForm.css';

class ItemForm extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
      reason: '',
      cleanliness: '',
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.patchItem = this.patchItem.bind(this);
  }

  handleOnChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleOnSubmit(event) {
    const { updateState } = this.props;
    event.preventDefault();

    this.patchItem();
    updateState(this.state, this.patchItem);
  }

  patchItem() {
    const { id } = this.state;

    fetch(`api/v1/items/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' },
    });
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

const itemShape = shape({
  id: number,
  name: string,
  reason: string,
  cleanliness: string,
});

ItemForm.defaultProps = {
  item: {},
  updateState: func,
};

ItemForm.propTypes = {
  item: itemShape,
  updateState: func,
};

export default ItemForm;
