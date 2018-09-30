import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col, Table, Checkbox } from "react-bootstrap";
import Stock from "../Stock";

class Location extends Component {
  constructor(props) {
    super(props);
    this.toggleStock = this.toggleStock.bind(this);

    this.state = {
      showStock: false
    };
  }

  toggleStock(e) {
    const isChecked = e.target.checked;
    this.setState({ showStock: isChecked ? true : false });
  }

  componentDidUpdate(prevProps, prevState) {
    // only update chart if the data has changed
    if (prevProps.showAllStock !== this.props.showAllStock) {
      this.setState({ showStock: this.props.showAllStock });
    }
  }

  render() {
    const { locationItem, id, showAllStock } = this.props;
    const { showStock } = this.state;
    return (
      <React.Fragment>
        <Row className="show-grid">
          <Col className="col-xs-8">Location {locationItem.name}</Col>
          <Col className="col-xs-4">
            <span className="pull-right">
              <Checkbox
                id={id}
                checked={showStock ? true : false}
                onChange={this.toggleStock}
              >
                Show Stock?
              </Checkbox>
            </span>
          </Col>
        </Row>
        {showStock && (
          <Row>
            <Col className="col-xs-12">
              <div className="x">
                <Table striped bordered condensed hover>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Replenishment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {locationItem.stock.length > 0 ? (
                      locationItem.stock.map(function(stockItem, index) {
                        return <Stock key={index} stockItem={stockItem} />;
                      })
                    ) : (
                      <tr>
                        <td colSpan="3">
                          <span>No records to show</span>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        )}
      </React.Fragment>
    );
  }
}

Location.propTypes = {
  locationItem: PropTypes.object,
  id: PropTypes.number,
  showAllStock: PropTypes.bool
};

export default Location;
