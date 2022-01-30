import React from "react";
import "./Input.css";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { placeholder } = this.props;
    return (
      <div className="Input">
        <input type="text" name="message" value={this.state.value} placeholder={placeholder} required onChange={this.handleChange} />
      </div>
    );
  }
}

export default Input;
