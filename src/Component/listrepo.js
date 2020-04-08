import React, { Component } from "react";
import "../Style/style.scss";
import moment from "moment";
import "../App.css";

class ListRepo extends Component {
  render() {
    const data = this.props.listdata;

    return (
      <>
        {data.map((key, index) => (
          <div className="list" key={index}>
            <a href={key.html_url} target="_blank">
              <p className="listrepo">{key.name}</p>
            </a>
            <div>
              <p className="type">{key.language}</p>
            </div>
            <div className="update">
              <p className="createatt">
                Created at&nbsp;
                {moment(key.created_at).format("MMMM DD YYYY")}
                &nbsp;&nbsp;&nbsp; last update&nbsp;
                {moment(key.updated_at).startOf("hour").fromNow()}
              </p>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default ListRepo;
