import React from "react";
import "./Form.css";
import leafRed from "../../Assets/leafRed.svg";
import leafBlue from "../../Assets/leafBlue.svg";

const Form = () => {
  return (
    <div className="form-block">
      <div className="about-form">
        <div className="about">
          <h2>Get Started Today</h2>
          <p>
            Learn more about how you can save our planet's nature. From smart
            consumption to switching to renewable energy, each of us can do our
            part to save the planet.
          </p>
        </div>
        <div className="form-view">
          <div className="form">
            <img src={leafRed} alt="Red leaf on form " className="leafRed" />
            <img src={leafBlue} alt="Blue leaf on form " className="leafBlue" />
            <h2>Log In</h2>
            <form>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <button>BOOK A DEMO</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
