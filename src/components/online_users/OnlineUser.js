import React from "react";
import "./OnlineUser.css";
import User from "./../user/User";

class OnlineUser extends React.Component {
  render() {
    const onlineUsers = [
      {
        firstName: "John",
        lastName: "Deo",
        photo: "",
      },
      {
        firstName: "Martin",
        lastName: "Alemajoh",
        photo: "",
      },
    ];
    return (
      <div className="OnlineUsers">
        {onlineUsers.map((user, index) => {
          return <User user={user} key={index} />;
        })}
      </div>
    );
  }
}

export default OnlineUser;
