import React, { useState } from "react";
import Form from "../Form/Form";
import Header from "../Header/Header";
import Intro from "../Intro/Intro";
import Question from "../Question/Question";
import Slider from "../Slider/Slider";
import Team from "../Team/Team";
import Footer from "../Footer/Footer";
import styleLending from "./Lending.module.scss";

const Lending = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  return (
    <div className={styleLending.lending}>
      <Header width={width} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {!menuOpen ? (
        <div>
          <Intro />
          <Team width={width} />
          <Form />
          <Question />
          <Slider width={width} />
          <Footer />
        </div>
      ) : null}
    </div>
  );
};

export default Lending;
