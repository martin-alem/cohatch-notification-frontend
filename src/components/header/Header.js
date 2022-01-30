import React from "react";
import "./Header.css";
import Image from "./../image/Image";
import Navigation from "./../navigation/Navigation";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <Image size="small" alt="Martin" />
        <Navigation />
      </div>
    );
  }
}

export default Header;
