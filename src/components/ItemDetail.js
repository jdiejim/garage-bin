import React, { Component } from 'react';
import './ItemDetail.css';

class ItemDetail extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
      reason: '',
      cleanliness: '',
    };
  }

  componentDidMount() {
    const { id, name, reason, cleanliness } = this.props.item;

    this.setState({ id, name, reason, cleanliness });
  }

  render() {
    const { name, reason, cleanliness } = this.state;

    return (
      <section className="item-detail">
        <form className="item-form">
          <input id="name" type="text" value={name} />
          <input id="reason" type="text" value={reason} />
          <select>
            <option selected={cleanliness === 'Sparkling'} value="Sparkling">Sparkling</option>
            <option selected={cleanliness === 'Dusty'} value="Dusty">Dusty</option>
            <option selected={cleanliness === 'Rancid'} value="Rancid">Rancid</option>
          </select>
        </form>
      </section>
    );
  }
}

export default ItemDetail;
