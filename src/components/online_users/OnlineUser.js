import React from "react";
import "./OnlineUser.css";
import User from "./../user/User";
import httpAgent from "./../../util/httpAgent";
import { UserContext } from "./../../context/userContext";

function OnlineUser() {
  const userContext = React.useContext(UserContext);
  const { _id: userId } = userContext.user;
  const [onlineUsers, setOnlineUsers] = React.useState([]);

  React.useEffect(() => {
    const fetchOnlineUsers = async () => {
      try {
        const option = {
          headers: { Accept: "application/json" },
          body: null,
        };
        const serverResponse = await httpAgent("GET", `${process.env.REACT_APP_MESSAGING_API}/api/v1/online_users`, option);
        if (serverResponse.ok) {
          const jsonResponse = await serverResponse.json();
          const onlineUsers = sanitizeResponse(jsonResponse["payload"]);
          setOnlineUsers(onlineUsers);
        }
      } catch (error) {}
    };

    fetchOnlineUsers();
  }, []);

  const sanitizeResponse = response => {
    const onlineUsers = [];
    for (const key in response) {
      const value = JSON.parse(response[key]);
      if (key !== userId) {
        onlineUsers.push(value);
      }
    }
    return onlineUsers;
  };
  return (
    <div className="OnlineUsers">
      {onlineUsers.map(user => {
        return <User user={user} key={user._id} />;
      })}
    </div>
  );
}

export default OnlineUser;
