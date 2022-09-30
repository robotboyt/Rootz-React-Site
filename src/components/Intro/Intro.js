import React from "react";
import headline from "../../Assets/Headline.svg";
import group from "../../Assets/Group.svg";
import headIcon from "../../Assets/head.svg";
import parrot from "../../Assets/Parrot.svg";
import locationIcon from "../../Assets/Vector.svg";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro-block">
      <div className="intro">
        <div className="descrirption-block">
          <div className="description">
            <img src={headline} alt="Nature needs you" className="desc-img" />
            <p>
              The scale of the challenges facing our planet can seem daunting,
              but we can all do something.
            </p>
            <div className="input-block">
              <img
                src={locationIcon}
                alt="input location icon"
                className="input-icon"
              />
              <input
                type="search"
                className="desc-input"
                placeholder="Find the place to help"
              />
              <button className="input-btn">Search</button>
            </div>
          </div>
        </div>
        <div className="images">
          <img src={parrot} alt="parrot" className="parrot" />
          <img src={group} alt="parrot" className="group" />
          <img src={headIcon} alt="parrot" className="headIcon" />
          <div className="members">
            <span id="span-1">Members</span>
            <span id="span-2">29100</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
