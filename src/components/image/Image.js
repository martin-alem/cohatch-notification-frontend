import React from "react";
import "./Image.css";
import Photo from "./../../images/user.jpg";

class Image extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { photo, size, alt } = this.props;
    return (
      <div className="Image">
        <img src={Photo} alt={alt} className={`Image-image Image-${size}`} />
      </div>
    );
  }
}

export default Image;
