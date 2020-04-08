import React, { Component } from "react";
import "../Style/style.scss";
import img1 from "../image/img.jpg";

class Profile extends Component {
  render() {
    const user = this.props.profile;
    return (
      <div>
        <img
          className="profile"
          alt="profile"
          src={user && user.owner.avatar_url}
        />
        <p>{user && user.owner.login}</p>
      </div>
    );
  }
}

export default Profile;
