import React from "react";
import "./User.css";
import Image from "./../image/Image";
import { ChatContext } from "./../../context/chatContext";
import { MessageContext } from "./../../context/messageContext";
import { UserContext } from "./../../context/userContext";
import httpAgent from "../../util/httpAgent";

function User(props) {
  const userContext = React.useContext(UserContext);
  const user = userContext.user;
  const messageContext = React.useContext(MessageContext);
  const chatContext = React.useContext(ChatContext);
  const { firstName, lastName, picture: photo } = props.user;

  const fetchMessages = async () => {
    try {
      const option = {
        headers: { Accept: "application/json" },
        body: null,
      };
      const serverResponse = await httpAgent("GET", `${process.env.REACT_APP_MESSAGING_API}/api/v1/messages/${lastName}/${userContext.user.lastName}`, option);
      if (serverResponse.ok) {
        const jsonResponse = await serverResponse.json();
        const modifiedMessage = modifyMessage(jsonResponse["payload"]);
        messageContext.setMessages(modifiedMessage);
      }
    } catch (error) {}
  };
  const setCurrentChat = () => {
    fetchMessages();
    chatContext.setChat(props.user);
  };

  const modifyMessage = payload => {
    const modifiedMessage = [];
    for (const msg of payload) {
      const { sender, date, text } = msg;
      const source = user["_id"] === sender["_id"] ? "local" : "remote";
      const m = {
        firstName: sender["firstName"],
        lastName: sender["lastName"],
        source: source,
        message: text,
        time: date,
      };
      modifiedMessage.push(m);
    }
    return modifiedMessage;
  };
  return (
    <div onClick={setCurrentChat} className="User">
      <div className="User-content">
        <Image size="small" alt={`${firstName} ${lastName}`} photo={photo} />
        <h1 className="ui header">{`${firstName} ${lastName}`}</h1>
      </div>
    </div>
  );
}

export default User;
