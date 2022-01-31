import React from "react";
import "./Input.css";
import { ChatContext } from "./../../context/chatContext";
import { UserContext } from "./../../context/userContext";

function Input({ socket }) {
  const chatContext = React.useContext(ChatContext);
  const userContext = React.useContext(UserContext);
  const { firstName, lastName } = chatContext.chat;
  const [state, setState] = React.useState("");
  const handleChange = e => {
    setState(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const message = state;
    if (message) {
      const payload = {
        sender: userContext.user,
        recipient: chatContext.chat,
        message: message,
      };

      socket.emit("message", payload);
      setState("");
    }
  };
  return (
    <div className="Input">
      <form onSubmit={handleSubmit}>
        <input type="text" name="message" value={state} placeholder={`Message ${firstName || ""} ${lastName || ""}`} required onChange={handleChange} disabled={!Boolean(firstName && lastName)} />
      </form>
    </div>
  );
}

export default Input;
