import React from "react";
import "./List.css";

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, title } = this.props;
    return (
      <div className="List">
        <h1 className="ui huge header">{title}</h1>
        <div className="ui section divider"></div>
        {children}
      </div>
    );
  }
}

export default List;
