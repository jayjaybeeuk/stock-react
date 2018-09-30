import React, { Component } from "react";
import APIhelper from "../api/APIHelper";
import Navigation from "../components/layout/Navigation";
import Level from "../components/level";

import { Grid, Panel, Checkbox } from "react-bootstrap";

const getStock = "./apis/stock";

class StockListing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stock: "",
      isLoaded: false,
      showAllStock: false
    };
    this.setComponentState = this.setComponentState.bind(this);
    this.toggleAllStock = this.toggleAllStock.bind(this);
  }

  componentDidMount() {
    const self = this;
    APIhelper.getData(getStock).then(function(data) {
      self.setComponentState(data);
    });
  }

  setComponentState(data) {
    this.setState({ isLoaded: true, stock: data.row });
  }

  toggleAllStock(e) {
    const isChecked = e.target.checked;
    this.setState({ showAllStock: isChecked ? true : false });
  }

  render() {
    const { stock, isLoaded, showAllStock } = this.state;
    return (
      <React.Fragment>
        <Navigation />
        <h1>Stock listing</h1>
        {isLoaded ? (
          <Panel>
            <div className="panel-heading">
              <Checkbox id="master" onChange={this.toggleAllStock}>
                Show all stock?
              </Checkbox>
            </div>
            <div className="panel-body">
              <Grid>
                {stock.map(function(levelItem, index) {
                  return (
                    <Level
                      key={index}
                      levelItem={levelItem}
                      showAllStock={showAllStock}
                    />
                  );
                })}
              </Grid>
            </div>
          </Panel>
        ) : (
          <span>Loading...</span>
        )}
      </React.Fragment>
    );
  }
}

export default StockListing;
