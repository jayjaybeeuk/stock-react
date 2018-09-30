import React, { Component } from "react";
import PropTypes from "prop-types";

class Stock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { stockItem } = this.props;
    return (
      <React.Fragment>
        <tr>
          <td>{stockItem.product}</td>
          <td>{stockItem.qty}</td>
          <td>{stockItem.replenishment}</td>
        </tr>
      </React.Fragment>
    );
  }
}

Location.propTypes = {
  stockItem: PropTypes.object
};

export default Stock;
