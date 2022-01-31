import React from "react";
import useWebSocket from "./../hooks/useWebSocket";

const SocketContext = React.createContext();

function SocketContextProvider(props) {
  const socket = useWebSocket();
  return <SocketContext.Provider value={{ socket }}>{props.children}</SocketContext.Provider>;
}

export { SocketContext, SocketContextProvider };
