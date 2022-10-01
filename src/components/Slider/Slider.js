import React, { useState } from "react";
import plastic from "../../Assets/plastic.png";
import green from "../../Assets/green.png";
import ocean from "../../Assets/ocean.png";
import forest from "../../Assets/forest.png";
import energy from "../../Assets/energy.png";
import left from "../../Assets/ChevronLeft.svg";
import right from "../../Assets/ChevronRight.svg";
import bg from "../../Assets/bg.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Slider.scss";

const Slider = () => {
  const [count, setCount] = useState(0);
  const gallery = [plastic, green, ocean, forest, energy];
  const currentImg = gallery[count];

  function toLeft() {
    setCount(count - 1);
    if (count === 0) {
      setCount(0);
    }
  }

  function toRight() {
    setCount(count + 1);
    if (count === 4) {
      setCount(4);
    }
  }

  return (
    <div className="slider-block">
      <div className="slider"></div>
      <div className="slider-conroler">
        <img src={left} alt="slide to left" className="left" onClick={toLeft} />
        <p className="current">
          <span className="others">{count + 1}/5</span>
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
