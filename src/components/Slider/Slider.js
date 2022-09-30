import React, { useState } from "react";
import "./Slider.css";
import plastic from "../../Assets/plastic.png";
import green from "../../Assets/green.png";
import ocean from "../../Assets/ocean.png";
import forest from "../../Assets/forest.png";
import energy from "../../Assets/energy.png";
import left from "../../Assets/ChevronLeft.svg";
import right from "../../Assets/ChevronRight.svg";
import bg from "../../Assets/bg.svg";

const Slider = () => {
  let id1 = 1;
  let id2 = 2;
  let id3 = 3;
  let id4 = 4;
  let id5 = 5;

  const [current, setCurrent] = useState(id3);

  const toLeft = () => {
    setCurrent(current - 1);
    if (current === 1) {
      setCurrent(1);
    }
  };

  const toRight = () => {
    setCurrent(current + 1);
    if (current === 5) {
      setCurrent(5);
    }
  };
  return (
    <div className="slider-block">
      <div className="slider">
        <img src={plastic} alt="" id={id1} className="slide1" />
        <img src={green} alt="" id={id2} className="slide2" />
        <img src={ocean} alt="" id={id3} className="slide3" />
        <img src={forest} alt="" id={id4} className="slide4" />
        <img src={energy} alt="" id={id5} className="slide5" />
      </div>
      <div className="slider-conroler">
        <img src={left} alt="slide to left" className="left" onClick={toLeft} />
        <p className="current">
          {current}
          <span className="others">/5</span>
        </p>
        <img
          src={right}
          alt="slide to right"
          className="right"
          onClick={toRight}
        />
      </div>
    </div>
  );
};

export default Slider;
