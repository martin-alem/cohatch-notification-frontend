import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ChatContext = React.createContext();

function ChatContextProvider(props) {
  const [chat, setChat] = useLocalStorage("current_chat", {});
  return <ChatContext.Provider value={{ chat, setChat }}>{props.children}</ChatContext.Provider>;
}

export { ChatContext, ChatContextProvider };
