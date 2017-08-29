import React, { Component } from "react";
import * as d3 from "/Users/kotamrs/.config/yarn/global/node_modules/d3";

class D3Day1 extends Component {
  componentDidMount() {
    d3
      .select("body")
      .selectAll("p")
      .data([1, 2, 3])
      .enter()
      .append("p")
      .text("New paragraph!")
      .text(function(d) {
        return d;
      });
  }
  render() {
    return null;
  }
}

export default D3Day1;
