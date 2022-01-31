import React from "react";
import "./ChatHeader.css";
import Image from "./../image/Image";
import Photo from "./../../images/user.jpg";
import Navigation from "./../navigation/Navigation";
import { ChatContext } from "./../../context/chatContext";

function ChatHeader() {
  const chatContext = React.useContext(ChatContext);
  const { firstName, lastName, picture: photo } = chatContext.chat;
  return (
    <div className="ChatHeader">
      <div className="ChatHeader-peer">
        <Image size="small" alt={`${firstName || ""} ${lastName || ""}`} photo={photo || Photo} />
        <h1 className="ui header">{`${firstName || ""} ${lastName || ""}`}</h1>
      </div>
      <Navigation />
    </div>
  );
}

export default ChatHeader;
