import React from "react";
import "./ChatHeader.css";
import Image from "./../image/Image";

class ChatHeader extends React.Component {
  render() {
    const { firstName, lastName, photo } = this.props;
    return (
      <div className="ChatHeader">
        <Image size="small" alt={`${firstName} ${lastName}`} photo={photo} />
        <h1 className="ui header">{`${firstName} ${lastName}`}</h1>
      </div>
    );
  }
}

export default ChatHeader;
