import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./../../pages/home/Home";
import Login from "./../../pages/login/Login";
import { UserContextProvider } from "./../../context/userContext";
import { SocketContextProvider } from "./../../context/socketContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Switch>
          <Route path="/" exact component={Login} />
          <SocketContextProvider>
            <Route path="/home" exact component={Home} />
          </SocketContextProvider>
        </Switch>
      </UserContextProvider>
    </div>
  );
}

export default App;
