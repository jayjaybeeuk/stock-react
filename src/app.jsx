import React from "react";
import Navigation from "./components/layout/Navigation";
import "normalize.css";

import "styles/base/_main.sass"; // Global styles
import "styles/base/_common.sass"; // Global styles
import styles from "./app.sass"; // Css-module styles

const App = () => (
  <div className="App">
    <Navigation />
    <div>
      <h1>Introduction</h1>
      <p>
        This React project is s simple demonstration of getting a stock listing.
      </p>
      <p>
        It even has some <span className={styles.redButton}>css-module</span>{" "}
        local styles.
      </p>
      <p>
        <a href="/stockListing">View the stock listing here</a>.
      </p>
    </div>
  </div>
);

export default App;
