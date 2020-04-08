import React, { Component } from "react";
import "../Style/style.scss";
import { Container, Navbar } from "react-bootstrap";
import github from "../image/icon/github1.png";
class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="">
            <img className="github" src={github} alt="githb" />
            List Repositories
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
