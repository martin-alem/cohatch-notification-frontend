import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const NotificationContext = React.createContext();

function NotificationContextProvider(props) {
  const [notificationCount, setNotificationCount] = useLocalStorage("total_notification", 0);
  return <NotificationContext.Provider value={{ notificationCount, setNotificationCount }}>{props.children}</NotificationContext.Provider>;
}

export { NotificationContext, NotificationContextProvider };
