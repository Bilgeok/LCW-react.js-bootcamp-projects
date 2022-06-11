import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Navigate from "./Navigate";
import Fahrenheit from "./Fahrenheit";
import Kelvin from "./Kelvin";
import Celcius from "./Celcius";


class App extends Component {
  state = { degree: 0 };

  handleClickIncrease = () => {
    this.setState({
      degree: this.state.degree + 1,
    });
  };
 
  render() {
    return (
      <div>
      <Container>
      <h1>Hava Nasıl</h1>
      <h3>Şu an sıcaklık:{this.state.degree}</h3>  
        
        <Row>
          <Navigate  handleClickIncrease={this.handleClickIncrease}  />
        </Row>
        <h3>3 birimde sıcaklık ölçümü;</h3>
        <Row>
          <Col xs="4">
            <Celcius degree={this.state.degree} />
          </Col>
          <Col xs="4">
            <Fahrenheit  degree={this.state.degree}/>
          </Col>
          <Col xs="4">
            <Kelvin   degree={this.state.degree} />
          </Col>
        </Row>
      </Container>
    </div>
    );
  }
}

export default App;