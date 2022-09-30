import React from "react";
import "./Team.css";
import line1 from "../../Assets/line1.svg";
import line2 from "../../Assets/line2.svg";
import person1 from "../../Assets/img1.png";
import person2 from "../../Assets/img2.png";
import person3 from "../../Assets/img3.png";

const Team = () => {
  return (
    <div className="team-block">
      <div className="about-team">
        <div className="team-text">
          <h1>Our Top Team</h1>
          <p>Learn more about how you can save our planet's nature.</p>
        </div>
        <div className="team-photo">
          <div className="photo-block">
            <img src={line1} alt="line between" className="line1" />
            <img src={line2} alt="line between" className="line2" />
            <img src={person1} alt="photo first person" className="person1" />
            <img src={person2} alt="photo second person" className="person2" />
            <img src={person3} alt="photo third person" className="person3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
