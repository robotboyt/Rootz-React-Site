import React from "react";
import styleHeader from "./Header.module.scss";
import logo from "../../Assets/Logo.svg";

const Header = () => {
  return (
    <div className={styleHeader.headerBlock}>
      <div className={styleHeader.header}>
        <div className={styleHeader.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styleHeader.navBar}>
          <ul>
            <li>Home</li>
            <li>Our mission</li>
            <li>Places</li>
            <li>Team</li>
          </ul>
        </div>
        <div className={styleHeader.button} onClick={() => null}>
          Apply
        </div>
      </div>
    </div>
  );
};

export default Header;
