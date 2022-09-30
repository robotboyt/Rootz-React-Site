import React from "react";
import "./Footer.css";
import twitter from "../../Assets/Twitter.svg";
import facebook from "../../Assets/facebook.svg";
import linkedIn from "../../Assets/in.svg";

const Footer = () => {
  return (
    <div className="footer-block">
      <div className="footer">
        <div className="Contacts">
          <h2>CONTACTS</h2>
          <p>2019 Rootz Foundation.</p>
          <p>All RightReserverd</p>
        </div>
        <div className="Headquarters">
          <h2>Headquarters</h2>
          <p>1234 Taliban</p>
          <p>Los Angeles, La 1234567</p>
          <p>(123)456-7890</p>
        </div>
        <div className="Social-media">
          <h2>Social media</h2>
          <div className="links">
            <div className="social">
              <img src={twitter} alt="twitter link" />
            </div>
            <div className="social">
              <img src={facebook} alt="facebook link" />
            </div>
            <div className="social">
              <img src={linkedIn} alt="linkedIn link" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
