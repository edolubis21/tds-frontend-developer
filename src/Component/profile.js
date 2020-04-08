import React, { Component } from "react";
import "../Style/style.scss";
import img1 from "../image/img.jpg";
import axios from "axios";
class Profile extends Component {
  render() {
    const user = this.props.profile;

    return (
      <>
        <div className="card-profile">
          <img
            className="profile"
            alt="profile"
            src={user && user.owner.avatar_url}
          />
          <p className="name">{user && user.owner.login}</p>
        </div>
        <div className="desc">
          <p>
            <b>{this.props.following.length}</b>&nbsp;Pengikut
          </p>
          <p>
            <b>{this.props.followers.length}</b>&nbsp;diikuti
          </p>
        </div>
      </>
    );
  }
}

export default Profile;
