import React, { Component } from "react";
import Header from "../Component/header";
import Profile from "../Component/profile";
import ListRepo from "../Component/listrepo";
import "../Style/style.scss";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import img1 from "../image/img.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col>
              <Profile />
            </Col>
            <Col md={9}>
              <div className="content">
                <Form inline>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </div>
              <ListRepo />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
