import React from "react";
import "./Home.css";
import Header from "./../../components/header/Header";
import RecentChat from "../../components/recent-chat/RecentChat";
import List from "../../components/list/List";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <div className="Home-main">
          <div className="Home-recent-chats">
            <List title="Recent Chats">
              <RecentChat />
            </List>
          </div>
          <div className="Home-chat-area"></div>
          <div className="Home-online-users"></div>
        </div>
      </div>
    );
  }
}

export default Home;
