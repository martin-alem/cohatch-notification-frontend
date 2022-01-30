import React from "react";
import "./User.css";
import Image from "./../image/Image";

class User extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { firstName, lastName, photo } = this.props.user;
    return (
      <div className="User">
        <Image size="small" alt={`${firstName} ${lastName}`} photo={photo} />
        <h1 className="ui header">{`${firstName} ${lastName}`}</h1>
      </div>
    );
  }
}

export default User;
