import React from "react";
import "./Home.css";
import RecentChats from "../../components/recent-chats/RecentChat";
import OnlineUsers from "../../components/online_users/OnlineUser";
import ChatHeader from "../../components/chat_header/ChatHeader";
import List from "../../components/list/List";
import Messages from "./../../components/messages/Messages";
import Input from "../../components/input/Input";
import httpAgent from "./../../util/httpAgent";
import { UserContext } from "./../../context/userContext";

function Home(props) {
  const [error, setError] = React.useState(false);
  const userContext = React.useContext(UserContext);
  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const option = {
          headers: { Accept: "application/json" },
          body: null,
        };
        const serverResponse = await httpAgent("GET", `${process.env.REACT_APP_AUTH_API}/api/v1/authorize`, option);
        if (serverResponse.ok) {
          const jsonResponse = await serverResponse.json();
          userContext.setUser(jsonResponse["payload"]);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      }
    };

    fetchUser();
  }, []);
  return (
    <div className="Home">
      <div className="Home-main">
        <div className="Home-recent-chats">
          <List title="Recent Chats">
            <RecentChats />
          </List>
        </div>
        <div className="Home-chat-area">
          <div className="header">
            <ChatHeader />
          </div>
          <div className="messages">
            <Messages />
          </div>
          <div className="input">
            <Input />
          </div>
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

export default Home;
