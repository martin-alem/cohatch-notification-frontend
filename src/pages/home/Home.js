import React from "react";
import "./Home.css";
import OnlineUsers from "../../components/online_users/OnlineUser";
import ChatHeader from "../../components/chat_header/ChatHeader";
import List from "../../components/list/List";
import Messages from "./../../components/messages/Messages";
import Input from "../../components/input/Input";
import httpAgent from "./../../util/httpAgent";
import { UserContext } from "./../../context/userContext";
import useWebSocket from "./../../hooks/useWebSocket";

function Home() {
  const userContext = React.useContext(UserContext);
  const socket = useWebSocket();
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
        }
      } catch (error) {}
    };

    fetchUser();
  }, []);
  return (
    <div className="Home">
      <div className="Home-main">
        <div className="Home-chat-area">
          <div className="header">
            <ChatHeader />
          </div>
          <div className="messages">
            <Messages socket={socket}/>
          </div>
          <div className="input">
            <Input socket={socket} />
          </div>
        </div>
        <div className="Home-online-users">
          <List title="Online Users">
            <OnlineUsers socket={socket} />
          </List>
        </div>
      </div>
    </div>
  );
}

export default Home;
