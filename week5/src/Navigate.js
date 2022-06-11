import React, { Component } from "react";

export default class navigate extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleClickIncrease}>Sıcaklık Artır</button>
      </div>
    );
  }
}
