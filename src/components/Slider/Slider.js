import React from "react";
import "./Slider.css";
import plastic from "../../Assets/plastic.png";
import green from "../../Assets/green.png";
import ocean from "../../Assets/ocean.png";
import forest from "../../Assets/forest.png";
import energy from "../../Assets/energy.png";

const Slider = () => {
  return (
    <div className="slider-block">
      <div className="slider">
        <img src={plastic} alt="" />
        <img src={green} alt="" />
        <img src={ocean} alt="" />
        <img src={forest} alt="" />
        <img src={energy} alt="" />
      </div>
      <div className="slider-conroler">
        <span>{`<`}</span>
        <span>1/5</span>
        <span>{`>`}</span>
      </div>
    </div>
  );
};

export default Slider;
