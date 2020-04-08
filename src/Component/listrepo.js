import React, { Component } from "react";
import "../Style/style.scss";
import solar from "../image/icon/solar.svg";

class ListRepo extends Component {
  render() {
    const data = this.props.listdata;

    let date = new Date() - data.updated_at;
    console.log(date);
    return (
      <>
        {data.map((key, index) => (
          <div className="list" key={index}>
            <p className="listrepo">{key.name}</p>
            <div>
              <p className="type">{key.language}</p>
            </div>
            <div className="update">
              <p className="createatt">
                Created at {key.created_at} | Update {key.updated_at}
              </p>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default ListRepo;
