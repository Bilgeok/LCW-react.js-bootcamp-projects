import React, { Component } from "react";

class fahrenheit extends Component {
  convertFahrenheit = (degree) => {
    return (degree * 9) / 5 + 32;
  };
  render() {
    let fahrenheitDegree = this.convertFahrenheit(this.props.degree);
    return <h4>Fahrenheit: {fahrenheitDegree} °F</h4>;
  }
}

export default fahrenheit;
