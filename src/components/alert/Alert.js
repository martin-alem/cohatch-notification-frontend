import React from "react";

class Alert extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { heading, message, type, visibility } = this.props;
    return (
      <div className={`ui ${type} message transition ${visibility}`}>
        <div className="header">{heading}</div>
        {message}
      </div>
    );
  }
}

export default Alert;
