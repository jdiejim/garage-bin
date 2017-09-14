import React, { Component } from 'react';
import { number, string, shape } from 'prop-types';
import './styles/ItemDetail.css';

class ItemDetail extends Component {
  constructor(props) {
    super(props);
    const { id, name, reason, cleanliness } = props.item;

    this.state = { id, name, reason, cleanliness };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { id, name, reason, cleanliness } = nextProps.item;

    this.setState({ id, name, reason, cleanliness });
  }

  handleOnChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleOnSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { name, reason, cleanliness } = this.state;

    return (
      <section className="item-detail">
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

ItemDetail.defaultProps = {
  item: {},
};

ItemDetail.propTypes = {
  item: itemShape,
};

export default ItemDetail;
