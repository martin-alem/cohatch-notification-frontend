import React from "react";
import "./RecentChat.css";
import Chat from "../chat/Chat";

function RecentChat() {
  const recentChats = [
    {
      firstName: "Martin",
      lastName: "John",
      lastMessage: "Hi martin, hope you have successfully finished that project",
      time: "12:45AM",
      unread: 400,
      photo: "",
    },
    {
      firstName: "Mary",
      lastName: "Jane Jane Jane",
      lastMessage: "Hi martin, hope you have successfully finished that project",
      time: "12:45AM",
      unread: 4,
      photo: "",
    },
    {
      firstName: "Martin",
      lastName: "John",
      lastMessage: "Hi martin, hope you have successfully finished that project",
      time: "12:45AM",
      unread: 400,
      photo: "",
    },
    {
      firstName: "Mary",
      lastName: "Jane Jane Jane",
      lastMessage: "Hi martin, hope you have successfully finished that project",
      time: "12:45AM",
      unread: 4,
      photo: "",
    },
    {
      firstName: "Martin",
      lastName: "John",
      lastMessage: "Hi martin, hope you have successfully finished that project",
      time: "12:45AM",
      unread: 400,
      photo: "",
    },
    {
      firstName: "Mary",
      lastName: "Jane Jane Jane",
      lastMessage: "Hi martin, hope you have successfully finished that project",
      time: "12:45AM",
      unread: 4,
      photo: "",
    },
    {
      firstName: "Martin",
      lastName: "John",
      lastMessage: "Hi martin, hope you have successfully finished that project",
      time: "12:45AM",
      unread: 400,
      photo: "",
    },
    {
      firstName: "Mary",
      lastName: "Jane Jane Jane",
      lastMessage: "Hi martin, hope you have successfully finished that project",
      time: "12:45AM",
      unread: 4,
      photo: "",
    },
    {
      firstName: "Martin",
      lastName: "John",
      lastMessage: "Hi martin, hope you have successfully finished that project",
      time: "12:45AM",
      unread: 400,
      photo: "",
    },
    {
      firstName: "Mary",
      lastName: "Jane Jane Jane",
      lastMessage: "Hi martin, hope you have successfully finished that project",
      time: "12:45AM",
      unread: 4,
      photo: "",
    },
    {
      firstName: "Martin",
      lastName: "John",
      lastMessage: "Hi martin, hope you have successfully finished that project",
      time: "12:45AM",
      unread: 400,
      photo: "",
    },
    {
      firstName: "Mary",
      lastName: "Jane Jane Jane",
      lastMessage: "Hi martin, hope you have successfully finished that project",
      time: "12:45AM",
      unread: 4,
      photo: "",
    },
    {
      firstName: "Martin",
      lastName: "John",
      lastMessage: "Hi martin, hope you have successfully finished that project",
      time: "12:45AM",
      unread: 400,
      photo: "",
    },
    {
      firstName: "Mary",
      lastName: "Jane Jane Jane",
      lastMessage: "Hi martin, hope you have successfully finished that project",
      time: "12:45AM",
      unread: 4,
      photo: "",
    },
    {
      firstName: "Martin",
      lastName: "John",
      lastMessage: "Hi martin, hope you have successfully finished that project",
      time: "12:45AM",
      unread: 400,
      photo: "",
    },
    {
      firstName: "Mary",
      lastName: "Jane Jane Jane",
      lastMessage: "Hi martin, hope you have successfully finished that project",
      time: "12:45AM",
      unread: 4,
      photo: "",
    },
  ];
  return (
    <div className="RecentChat">
      {recentChats.map((chat, index) => {
        return <Chat chat={chat} key={index} />;
      })}
    </div>
  );
}

export default RecentChat;
