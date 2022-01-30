import React from "react";
import "./Messages.css";
import Message from "./../message/Message";

class Messages extends React.Component {
  render() {
    const messages = [
      {
        firstName: "Martin",
        lastName: "Alemajoh",
        source: "local",
        message: "Hi martin, how are you? hope you are doing well my friend",
        time: "11:45AM",
      },
      {
        firstName: "Martin",
        lastName: "Alemajoh",
        source: "remote",
        message: "Hi martin, how are you? hope you are doing well my friend",
        time: "11:45AM",
      },
      {
        firstName: "Martin",
        lastName: "Alemajoh",
        source: "local",
        message: "Hi martin, how are you? hope you are doing well my friend",
        time: "11:45AM",
      },
      {
        firstName: "Martin",
        lastName: "Alemajoh",
        source: "remote",
        message: "Hi martin, how are you? hope you are doing well my friend",
        time: "11:45AM",
      },
    ];
    return (
      <div className="Messages">
        {messages.map((message, index) => {
          return <Message key={index} message={message} />;
        })}
      </div>
    );
  }
}

export default Messages;
