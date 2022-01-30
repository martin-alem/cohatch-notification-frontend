import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./../../pages/home/Home";
import Login from "./../../pages/login/Login";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" exact component={Home} />
        </Switch>
        <Login />
      </div>
    );
  }
}

export default App;
