import React from "react";
import Form from "../Form/Form";
import Header from "../Header/Header";
import Intro from "../Intro/Intro";
import Question from "../Question/Question";
import Slider from "../Slider/Slider";
import Team from "../Team/Team";
import Footer from "../Footer/Footer";
import styleLending from "./Lending.module.scss";

const Lending = () => {
  return (
    <div className={styleLending.lending}>
      <div className={styleLending.headerInfo}>
        <Header />
        <Intro />
      </div>
      <Team />
      <Form />
      <Question />
      <Slider />
      <Footer />
    </div>
  );
};

export default Lending;
