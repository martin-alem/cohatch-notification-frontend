import React from "react";
import "./Chat.css";
import Image from "./../image/Image";

function Chat(props) {
  const setCurrentChat = () => {
    console.log("Hello");
  };
  const { firstName, lastName, photo, lastMessage, time, unread } = props.chat;
  return (
    <div className="Chat" onClick={setCurrentChat}>
      <div className="Chat-content">
        <div className="Chat-Image">
          <Image size="small" alt={`${firstName} ${lastName}`} photo={photo} />
        </div>
        <div className="Chat-details">
          <div className="Chat-user-time">
            <h1 className="ui header">{`${firstName} ${lastName}`}</h1>
            <div className="ui sub header">{time}</div>
          </div>
          <div className="Chat-message-unread">
            <p className="Chat-message">{lastMessage}</p>
            <div className="ui black label">{unread}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
