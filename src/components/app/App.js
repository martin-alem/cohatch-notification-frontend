import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./../../pages/home/Home";
import Login from "./../../pages/login/Login";
import { UserContextProvider } from "./../../context/userContext";

function App() {
  return (
    <div className="App">
      <Switch>
        <UserContextProvider>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
        </UserContextProvider>
      </Switch>
    </div>
  );
}

export default App;
