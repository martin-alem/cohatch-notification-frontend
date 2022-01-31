import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./../../pages/home/Home";
import Login from "./../../pages/login/Login";
import { UserContextProvider } from "./../../context/userContext";
import { ChatContextProvider } from "./../../context/chatContext";
import { MessageContextProvider } from "./../../context/messageContext";
import { NotificationContextProvider } from "./../../context/notificationContext";

function App() {
  return (
    <div className="App">
      <Switch>
        <UserContextProvider>
          <Route path="/" exact component={Login} />
          <ChatContextProvider>
            <MessageContextProvider>
              <NotificationContextProvider>
                <Route path="/home" exact component={Home} />
              </NotificationContextProvider>
            </MessageContextProvider>
          </ChatContextProvider>
        </UserContextProvider>
      </Switch>
    </div>
  );
}

export default App;
