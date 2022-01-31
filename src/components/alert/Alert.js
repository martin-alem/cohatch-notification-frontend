import React from "react";

function Alert(props) {
  const { heading, message, type, visibility } = props;
  return (
    <div className={`ui ${type} message transition ${visibility}`}>
      <div className="header">{heading}</div>
      {message}
    </div>
  );
}

export default Alert;
