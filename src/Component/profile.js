import React, { Component } from "react";
import "../Style/style.scss";
import img1 from "../image/img.jpg";

class Profile extends Component {
  render() {
    return (
      <div>
        <img className="profile" alt="profile" src={img1} />
        <p>Muhammad Edo Lubis</p>
      </div>
    );
  }
}

export default Profile;
