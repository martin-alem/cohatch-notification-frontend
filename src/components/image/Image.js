import React from "react";
import "./Image.css";
import Photo from "./../../images/user.jpg";

function Image(props) {
  const { photo, size, alt } = props;
  return (
    <div className="Image">
      <img src={Photo} alt={alt} className={`Image-image Image-${size}`} />
    </div>
  );
}

export default Image;
