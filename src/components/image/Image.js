import React from "react";
import "./Image.css";

function Image(props) {
  const { photo, size, alt } = props;
  return (
    <div className="Image">
      <img src={photo} alt={alt} className={`Image-image Image-${size}`} />
    </div>
  );
}

export default Image;
