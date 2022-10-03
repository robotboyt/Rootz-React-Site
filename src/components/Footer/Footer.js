import React from "react";
import twitter from "../../Assets/Twitter.svg";
import facebook from "../../Assets/facebook.svg";
import linkedIn from "../../Assets/in.svg";
import styleFooter from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styleFooter.footerBlock}>
      <div className={styleFooter.footer}>
        <div className={styleFooter.Contacts}>
          <h2>CONTACTS</h2>
          <p>2019 Rootz Foundation. All RightReserverd</p>
        </div>
        <div className={styleFooter.Headquarters}>
          <h2>Headquarters</h2>
          <p>1234 Taliban</p>
          <p>Los Angeles, La 1234567</p>
          <p>(123)456-7890</p>
        </div>
        <div className={styleFooter.SocialMedia}>
          <h2>Social media</h2>
          <div className={styleFooter.links}>
            <div className={styleFooter.social}>
              <img src={twitter} alt="twitter link" />
            </div>
            <div className={styleFooter.social}>
              <img src={facebook} alt="facebook link" />
            </div>
            <div className={styleFooter.social}>
              <img src={linkedIn} alt="linkedIn link" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
