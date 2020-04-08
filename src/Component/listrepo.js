import React, { Component } from "react";
import "../Style/style.scss";

class ListRepo extends Component {
  render() {
    return (
      <>
        <div className="list">
          <p>TDS-front-end</p>
          <p>Javascript</p>
          <div className="update">
            <p>Create at 2020-03-23T11 </p>
            <p> | </p>
            <p> Update at 1 hour ago</p>
          </div>
        </div>
        <div className="list">
          <p>TDS-front-end</p>
          <p>Javascript</p>
          <div className="update">
            <p>Create at 2020-03-23T11 </p>
            <p> | </p>
            <p> Update at 1 hour ago</p>
          </div>
        </div>
        <div className="list">
          <p>TDS-front-end</p>
          <p>Javascript</p>
          <div className="update">
            <p>Create at 2020-03-23T11 </p>
            <p> | </p>
            <p> Update at 1 hour ago</p>
          </div>
        </div>
      </>
    );
  }
}

export default ListRepo;
