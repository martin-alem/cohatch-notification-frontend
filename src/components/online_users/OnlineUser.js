import React from "react";
import "./OnlineUser.css";
import User from "./../user/User";
import httpAgent from "./../../util/httpAgent";
import { UserContext } from "./../../context/userContext";

function OnlineUser({ socket }) {
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
    socket.on("join", listenForOnlineUsers);
    socket.on("leave", listenForOnlineUsersLeave);
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

  const listenForOnlineUsers = user => {
    const onlineUser = JSON.parse(user);
    setOnlineUsers(prevState => {
      if (inObjectArray(onlineUser, prevState, "_id")) {
        return prevState;
      } else {
        return [...prevState, onlineUser];
      }
    });
  };

  const listenForOnlineUsersLeave = user => {
    const onlineUser = JSON.parse(user);
    setOnlineUsers(prevState => {
      const newOnlineUsers = removeInObjectArray(onlineUser, prevState, "_id");
      return newOnlineUsers;
    });
  };

  const inObjectArray = (object, array, field) => {
    for (const value of array) {
      if (object[field] === value[field]) {
        return true;
      }
    }
    return false;
  };

  const removeInObjectArray = (object, array, field) => {
    const newArray = [];
    for (const value of array) {
      if (object[field] !== value[field]) {
        newArray.push(value);
      }
    }
    return newArray;
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
