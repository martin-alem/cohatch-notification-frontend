import React from "react";
import "./Navigation.css";
import httpAgent from "./../../util/httpAgent";
import {NotificationContext} from "./../../context/notificationContext"

function Navigation ()
{
  const notificationContext = React.useContext( NotificationContext )
  const { notificationCount, setNotificationCount } = notificationContext;
  const logout = async () => {
    try {
      const option = {
        headers: { Accept: "application/json" },
        body: null,
      };

      const serverResponse = await httpAgent("POST", `${process.env.REACT_APP_AUTH_API}/api/v1/logout`, option);
      if (serverResponse.ok) {
        window.localStorage.clear();
        window.location.replace("/");
      } else {
        console.error("Unable to logout");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="Navigation">
      <div className="Navigation-notification">
        <div className="floating ui black label">{notificationCount}</div>
        <span className="material-icons-outlined Navigation-notification">notifications</span>
      </div>
      <div className="Navigation-logout">
        <span onClick={logout} className="material-icons-outlined Navigation-logout">
          logout
        </span>
      </div>
    </div>
  );
}

export default Navigation;
