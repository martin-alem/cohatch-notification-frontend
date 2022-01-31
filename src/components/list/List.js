import React from "react";
import "./List.css";

function List(props) {
  const { children, title } = props;
  return (
    <div className="List">
      <div className="List-header">
        <h1 className="ui huge header">{title}</h1>
      </div>
      <div className="ui section divider"></div>
      <div className="List-children">{children}</div>
    </div>
  );
}

export default List;
