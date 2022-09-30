import React from "react";
import Form from "../Form/Form";
import Header from "../Header/Header";
import Intro from "../Intro/Intro";
import Team from "../Team/Team";
import "./Lending.css";

const Lending = () => {
  return (
    <div className="lending">
      <div className="header-intro" style={{ background: "#F7F3F4" }}>
        <Header />
        <Intro />
      </div>
      <div className="team-form">
        <Team />
        <Form />
      </div>
    </div>
  );
};

export default Lending;
