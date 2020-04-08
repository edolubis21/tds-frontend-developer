import React, { Component } from "react";
import "../Style/style.scss";
import { Form, FormControl, Button } from "react-bootstrap";

class Search extends Component {
  render() {
    return (
      <div className="content">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </div>
    );
  }
}

export default Search;
