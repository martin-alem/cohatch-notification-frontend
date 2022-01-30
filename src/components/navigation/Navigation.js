import React from "react";
import "./Navigation.css";

class Navigation extends React.Component {
  render() {
    return (
      <div className="Navigation">
        <div className="Navigation-notification">
          <div className="floating ui black label">220</div>
          <span className="material-icons-outlined Navigation-notification">
            notifications
          </span>
        </div>
        <div className="Navigation-logout">
          <span className="material-icons-outlined Navigation-logout">logout</span>
        </div>
      </div>
    );
  }
}

export default Navigation;
