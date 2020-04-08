import React, { Component } from "react";
import "../Style/style.scss";
import notfound from "../image/notfound.png";

class Profile extends Component {
  render() {
    const user = this.props.profile;
    console.log(user, "ini user");

    return (
      <>
        {user ? (
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
        ) : (
          <>
            <div className="card-profile">
              <img className="profile" alt="profile" src={notfound} />
              <p className="name">user not found</p>
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
        )}
      </>
    );
  }
}

export default Profile;
