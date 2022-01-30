import React from "react";
import "./Home.css";
import Header from "./../../components/header/Header";
import RecentChats from "../../components/recent-chats/RecentChat";
import OnlineUsers from "../../components/online_users/OnlineUser";
import ChatHeader from "../../components/chat_header/ChatHeader";
import List from "../../components/list/List";
import Messages from "./../../components/messages/Messages";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <div className="Home-main">
          <div className="Home-recent-chats">
            <List title="Recent Chats">
              <RecentChats />
            </List>
          </div>
          <div className="Home-chat-area">
            <ChatHeader />
            <Messages />
          </div>
          <div className="Home-online-users">
            <List title="Online Users">
              <OnlineUsers />
            </List>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
