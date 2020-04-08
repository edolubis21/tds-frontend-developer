import React, { Component } from "react";
import Header from "../Component/header";
import Profile from "../Component/profile";
import ListRepo from "../Component/listrepo";
import Search from "../Component/search";
import "../Style/style.scss";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import axios from "axios";

class Home extends Component {
  state = {
    search: "",
    data: [],
  };

  handlechange = (e) => {
    e.preventDefault();
    this.setState({
      search: e.target.value,
    });
  };

  handleclick = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.search}/repos`)
      .then((res) => {
        const data = res.data;
        this.setState({ data });
      });
    this.setState({
      search: "",
    });
  };
  render() {
    const user = this.state.data[0];
    return (
      <div>
        <Header />
        <Container style={{ marginTop: "10px" }}>
          <Row>
            <Col>
              <Profile profile={user} />
            </Col>
            <Col md={9}>
              <div className="content">
                <form>
                  <input
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    onChange={this.handlechange}
                    value={this.state.search}
                  />
                  <button onClick={this.handleclick}>Search</button>
                </form>
              </div>

              <ListRepo listdata={this.state.data} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
