import React from "react";
import "./Header.css";
import logo from "../../Assets/Logo.svg";

const Header = () => {
  return (
    <div className="header-block">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-bar">
          <ul>
            <li>Home</li>
            <li>Our mission</li>
            <li>Places</li>
            <li>Team</li>
          </ul>
        </div>
        <div className="button" onClick={() => null}>
          Apply
        </div>
      </div>
    </div>
  );
};

export default Header;
