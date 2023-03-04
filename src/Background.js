import React from "react";
import Images from "./img/index";

export default function Background(props) {
  return (
    <div className="Background">
      <div className="overlay"></div>
      <img src={Images.brokenCloudsD} alt="" />
    </div>
  );
}
