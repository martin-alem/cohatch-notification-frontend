import React from "react";
import "./Chat.css";
import Image from "./../image/Image";

function Chat(props) {
  const setCurrentChat = () => {
    console.log("Hello");
  };
  console.log(props);
  const { recipient, sender, lastMessage } = props.chat;
  const {firstName, lastName, picture: photo} = recipient
  return (
    <div className="Chat" onClick={setCurrentChat}>
      <div className="Chat-content">
        <div className="Chat-Image">
          <Image size="small" alt={`${firstName} ${lastName}`} photo={photo} />
        </div>
        <div className="Chat-details">
          <div className="Chat-user-time">
            <h1 className="ui header">{`${firstName} ${lastName}`}</h1>
            <div className="ui sub header">""</div>
          </div>
          <div className="Chat-message-unread">
            <p className="Chat-message">{lastMessage}</p>
            <div className="ui black label">{0}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
