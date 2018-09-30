import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import Location from "../Location";

class Level extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { levelItem, showAllStock } = this.props;
    return (
      <React.Fragment>
        <Row className="show-grid">
          <Col className="col-xs-12">
            <h2>Level {levelItem.level}</h2>
          </Col>
        </Row>
        {levelItem.locations.map(function(locationItem, index) {
          return (
            <Location
              key={index}
              id={index}
              showAllStock={showAllStock}
              locationItem={locationItem}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

Level.propTypes = {
  levelItem: PropTypes.object,
  showAllStock: PropTypes.bool
};

export default Level;
