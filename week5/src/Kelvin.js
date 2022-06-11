import React, { Component } from "react";

class Kelvin extends Component {
  convertKelvin = (degree) => {
    return degree + 273.15;
  };
  render() {
    let kelvinDegree = this.convertKelvin(this.props.degree);
    return <h3>Kelvin: {kelvinDegree} K</h3>;
  }
}

export default Kelvin;
