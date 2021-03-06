import React from "react";
import "./Message.css";

function Message(props) {
  const { firstName, lastName, source, time, message } = props.message;
  return (
    <div className={`Message Message-${source}`}>
      <div className={`Message-container-${source}`}>
        <div className="Message-body">{message}</div>
        <div className="Message-time">{time}</div>
      </div>
      <h6 className="ui header">{`${firstName} ${lastName}`}</h6>
    </div>
  );
}

export default Message;
