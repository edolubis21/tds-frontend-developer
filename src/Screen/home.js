import React, { Component } from "react";
import Header from "../Component/header";
import Profile from "../Component/profile";
import ListRepo from "../Component/listrepo";
import "../Style/style.scss";
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";

class Home extends Component {
  state = {
    search: "",
    data: [],
    data1: [],
    data2: [],
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
    axios
      .get(`https://api.github.com/users/${this.state.search}/followers`)
      .then((res) => {
        const data1 = res.data;
        this.setState({ data1 });
      });
    axios
      .get(`https://api.github.com/users/${this.state.search}/following`)
      .then((res) => {
        const data2 = res.data;
        this.setState({ data2 });
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
              <Profile
                profile={user}
                following={this.state.data2}
                followers={this.state.data1}
              />
            </Col>
            <Col md={9}>
              <form className="content">
                <Form.Control
                  type="text"
                  placeholder="Search Account"
                  // className="input-search"
                  onChange={this.handlechange}
                  value={this.state.search}
                />
                <button className="buttonsearch" onClick={this.handleclick}>
                  Search
                </button>
              </form>
              {this.state.data.length > 0 ? (
                <ListRepo listdata={this.state.data} />
              ) : (
                <div className="notfound">
                  <h1>No Repositories found</h1>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
