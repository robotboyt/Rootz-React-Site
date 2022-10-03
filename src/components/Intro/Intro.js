import React, { useState } from "react";
import headline from "../../Assets/Headline.svg";
import group from "../../Assets/Group.svg";
import headIcon from "../../Assets/head.svg";
import parrot from "../../Assets/Parrot.svg";
import locationIcon from "../../Assets/Vector.svg";
import styleIntro from "./Intro.module.scss";

const Intro = () => {
  const [place, setPlace] = useState("");

  const getPlace = () => {
    console.log(place);
  };
  return (
    <div className={styleIntro.introView}>
      <div className={styleIntro.introBlock}>
        <div className={styleIntro.intro}>
          <div className={styleIntro.descrirptionBlock}>
            <div className={styleIntro.description}>
              <img
                src={headline}
                alt="Nature needs you"
                className={styleIntro.descImg}
              />
              <p>
                The scale of the challenges facing our planet can seem daunting,
                but we can all do something.
              </p>
              <div>
                <img
                  src={locationIcon}
                  alt="input location icon"
                  className={styleIntro.inputIcon}
                />
                <input
                  type="search"
                  className={styleIntro.descInput}
                  placeholder="Find the place to help"
                  onChange={(e) => setPlace(e.target.value)}
                />
                <button className={styleIntro.inputBtn} onClick={getPlace}>
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className={styleIntro.images}>
            <img src={parrot} alt="parrot" className="parrot" />
            <img src={group} alt="group" className={styleIntro.group} />
            <img
              src={headIcon}
              alt="headLike"
              className={styleIntro.headIcon}
            />
            <div className={styleIntro.members}>
              <span id="span-1">Members</span>
              <span className={styleIntro.span2}>29128</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
