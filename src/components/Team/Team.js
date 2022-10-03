import React from "react";
import line1 from "../../Assets/line1.svg";
import line2 from "../../Assets/line2.svg";
import person1 from "../../Assets/img1.png";
import person2 from "../../Assets/img2.png";
import person3 from "../../Assets/img3.png";
import lineSmall1 from "../../Assets/lineSmall1.svg";
import lineSmall2 from "../../Assets/lineSmall2.svg";
import styleTeam from "./Team.module.scss";

const Team = ({ width }) => {
  return (
    <div className={styleTeam.teamBlock}>
      <div className={styleTeam.aboutTeam}>
        <div className={styleTeam.teamText}>
          <h1>Our Top Team</h1>
          <p>Learn more about how you can save our planet's nature.</p>
        </div>
        <div className={styleTeam.teamPhoto}>
          <div className={styleTeam.photoBlock}>
            <img
              src={width <= 1180 ? lineSmall1 : line1}
              alt="line between"
              className={styleTeam.line1}
            />
            <img
              src={width <= 1180 ? lineSmall2 : line2}
              alt="line between"
              className={styleTeam.line2}
            />
            <img
              src={person1}
              alt="first person"
              className={styleTeam.person1}
            />
            <img
              src={person2}
              alt="second person"
              className={styleTeam.person2}
            />
            <img
              src={person3}
              alt="third person"
              className={styleTeam.person3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
