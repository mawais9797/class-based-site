import React, { Component } from "react";
import Header from "./Header";

class Countries extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h3>This is Countries Page</h3>
        </div>
      </div>
    );
  }
}

export default Countries;
