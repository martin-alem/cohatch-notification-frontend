import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const MessageContext = React.createContext();

function MessageContextProvider(props) {
  const [messages, setMessages] = useLocalStorage("messages", []);
  return <MessageContext.Provider value={{ messages, setMessages }}>{props.children}</MessageContext.Provider>;
}

export { MessageContext, MessageContextProvider };
