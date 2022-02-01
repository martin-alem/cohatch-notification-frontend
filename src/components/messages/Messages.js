import React from "react";
import "./Messages.css";
import Message from "./../message/Message";
import { MessageContext } from "./../../context/messageContext";
import { UserContext } from "./../../context/userContext";
import { NotificationContext } from "./../../context/notificationContext";

function Messages({ socket }) {
  const notificationContext = React.useContext(NotificationContext);
  const {setNotificationCount } = notificationContext;
  const messageContext = React.useContext(MessageContext);
  const userContext = React.useContext(UserContext);
  const messages = messageContext.messages;
  const user = userContext.user;

  const modifyMessage = payload => {
    const { sender, message, time } = payload;
    const source = user["_id"] === sender["_id"] ? "local" : "remote";
    const modifiedMessage = {
      firstName: sender["firstName"],
      lastName: sender["lastName"],
      source: source,
      message: message,
      time: time,
    };
    return modifiedMessage;
  };

  const display = ({ sender }) => {
    const current_chat = JSON.parse(window.localStorage.getItem("current_chat"));
    if (sender._id === user._id) {
      return true;
    } else if (sender._id === current_chat._id) {
      return true;
    } else {
      return false;
    }
  };

  const notify = payload => {
    setNotificationCount(prevState => prevState + 1);
    const { firstName, lastName, picture } = payload.sender;
    const title = `COhatch Notification`;
    const body = `${firstName} ${lastName} sent a message`;
    const options = {
      body,
      image: picture,
      tag: "This is a tag",
      renotify: true,
    };
    new window.Notification(title, options);
  };

  React.useEffect(() => {
    socket.on("message", payload => {
      const modifiedMessage = modifyMessage(payload);
      const current_chat = JSON.parse(window.localStorage.getItem("current_chat"));
      if (Object.keys(current_chat).length > 0) {
        if (display(payload)) {
          messageContext.setMessages(prevState => {
            return [...prevState, modifiedMessage];
          });
        } else {
          notify(payload);
        }
      } else {
        notify(payload);
      }
    });
  }, []);

  React.useEffect(() => {
    if (window.Notification.permission === "default") {
      Notification.requestPermission().then(permission => {
        console.log(`You granted us permission to display notification: ${permission}`);
      });
    }
  }, []);
  return (
    <div className="Messages">
      {messages.map((message, index) => {
        return <Message key={index} message={message} />;
      })}
    </div>
  );
}

export default Messages;
