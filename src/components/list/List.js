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
        <div className="List-header">
          <h1 className="ui huge header">{title}</h1>
        </div>
        <div className="ui section divider"></div>
        <div className="List-children">{children}</div>
      </div>
    );
  }
}

export default List;
