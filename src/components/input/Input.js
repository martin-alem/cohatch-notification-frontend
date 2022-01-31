import React from "react";
import "./Input.css";

function Input(props) {
  const [state, setState] = React.useState("");
  const handleChange = e => {
    setState({ value: e.target.value });
  };

  const { placeholder } = props;
  return (
    <div className="Input">
      <input type="text" name="message" value={state} placeholder={placeholder} required onChange={handleChange} />
    </div>
  );
}

export default Input;
