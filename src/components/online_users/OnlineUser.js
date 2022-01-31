import React from "react";
import "./OnlineUser.css";
import User from "./../user/User";

function OnlineUser() {
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

export default OnlineUser;
