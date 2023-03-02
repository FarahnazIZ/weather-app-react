import React from "react";
import image from "./img/cloudy.jpg";

export default function Background(props) {
  return (
    <div className="Background">
      <div className="overlay"></div>
      <img src={image} alt="" />
    </div>
  );
}
