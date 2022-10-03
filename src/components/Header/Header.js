import React from "react";
import logo from "../../Assets/Logo.svg";
import menuIcon from "../../Assets/menuIcon.svg";
import iconClose from "../../Assets/iconClose.svg";
import styleHeader from "./Header.module.scss";

const Header = ({ width, menuOpen, setMenuOpen }) => {
  return (
    <div className={styleHeader.headerBlock}>
      <div className={styleHeader.header}>
        <div className={styleHeader.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styleHeader.navBar}>
          {width <= 724 ? (
            <img
              style={{ cursor: "pointer" }}
              src={menuOpen ? iconClose : menuIcon}
              alt="menuBtn"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          ) : (
            <ul>
              <li>Home</li>
              <li>Our mission</li>
              <li>Places</li>
              <li>Team</li>
            </ul>
          )}
        </div>
        {width <= 724 ? null : (
          <button className={styleHeader.button} onClick={() => alert("APPLY")}>
            Apply
          </button>
        )}
        {menuOpen ? (
          <div className={styleHeader.menuBar}>
            <ul>
              <li>Home</li>
              <li>Our mission</li>
              <li>Places</li>
              <li>Team</li>
            </ul>
            <button onClick={() => alert("APPLY")}>Apply</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
