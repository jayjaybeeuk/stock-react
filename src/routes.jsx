import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./app";
import StockListing from "./modules/StockListing";

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/stockListing" component={StockListing} />
    </div>
  </Router>
);

export default Routes;
