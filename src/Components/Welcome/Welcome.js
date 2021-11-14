import React from "react";
import Container from "../Container/Container";
import "./welcome.css";
import { default as welcome_svg } from "../../svg/welcome.svg";

const Wellcome = () => {
  return (
    <Container>
      <div className="welcome_container">
        <div className="wel_img">
          <img src={welcome_svg} alt="" />
        </div>
        <h1 className="wel-text">Hello.</h1>
      </div>
    </Container>
  );
};

export default Wellcome;
