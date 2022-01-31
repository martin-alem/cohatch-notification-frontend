import React from "react";
import "./RecentChat.css";
import Chat from "../chat/Chat";
import useLocalStorage from "../../hooks/useLocalStorage";
import httpAgent from "./../../util/httpAgent";
import { UserContext } from "./../../context/userContext";

function RecentChat() {
  const [recentChats, setRecentChats] = useLocalStorage("recent_chats", []);
  const userContext = React.useContext(UserContext);
  const user = userContext.user;

  React.useEffect(() => {
    const fetchRecentChats = async () => {
      try {
        const option = {
          headers: { Accept: "application/json" },
          body: null,
        };
        const serverResponse = await httpAgent("GET", `${process.env.REACT_APP_MESSAGING_API}/api/v1/recent_chats/${user._id}`, option);
        if (serverResponse.ok) {
          const jsonResponse = await serverResponse.json();
          setRecentChats(jsonResponse["payload"]);
        }
      } catch (error) {}
    };

    fetchRecentChats();
  }, []);
  return (
    <div className="RecentChat">
      {recentChats.map((chat, index) => {
        return <Chat chat={chat} key={index} />;
      })}
    </div>
  );
}

export default RecentChat;
