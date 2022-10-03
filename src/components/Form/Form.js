import React, { useState } from "react";
import leafRed from "../../Assets/leafRed.svg";
import leafBlue from "../../Assets/leafBlue.svg";
import styleForm from "./Form.module.scss";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const getDataForm = (e) => {
    e.preventDefault();
    console.log(`User Name: ${name}`);
    console.log(`User Email: ${email}`);

    setName("");
    setEmail("");
  };

  return (
    <div className={styleForm.formBlock}>
      <div className={styleForm.aboutForm}>
        <div className={styleForm.about}>
          <h2>Get Started Today!</h2>
          <p>
            Learn more about how you can save our planet's nature. From smart
            consumption to switching to renewable energy, each of us can do our
            part to save the planet.
          </p>
        </div>
        <div className={styleForm.formView}>
          <div className={styleForm.form}>
            <img
              src={leafRed}
              alt="Red leaf on form "
              className={styleForm.leafRed}
            />
            <img
              src={leafBlue}
              alt="Blue leaf on form "
              className={styleForm.leafBlue}
            />
            <h2>Log In</h2>
            <form>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={getDataForm}>BOOK A DEMO</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
