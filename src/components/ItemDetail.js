import React, { Component } from 'react';
import './styles/ItemDetail.css';

class ItemDetail extends Component {
  constructor(props) {
    super(props);
    const { id, name, reason, cleanliness } = props.item;

    this.state = { id, name, reason, cleanliness };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { id, name, reason, cleanliness } = nextProps.item;

    this.setState({ id, name, reason, cleanliness });
  }

  handleOnChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { name, reason, cleanliness } = this.state;

    return (
      <section className="item-detail">
        <form className="item-form">
          <input onChange={this.handleOnChange} id="name" type="text" value={name} />
          <input onChange={this.handleOnChange} id="reason" type="text" value={reason} />
        </form>
      </section>
    );
  }
}

export default ItemDetail;
