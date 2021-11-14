import React from "react";
import "./about.css";
import Container from "../Container/Container";
import AboutIco from "../../svg/about.svg";
import Michael from "../../images/Michael.jpg";

export default function About() {
  return (
    <Container>
      <div className="about-card" id="about">
        <div className="about-bar">
          <img src={Michael} alt="" />
          <h1>Michael Bitan</h1>
        </div>
        <p>Computer siecnce 3rd year BA student.</p>
      </div>
      <img src={AboutIco} alt="" className="about-svg" />
    </Container>
  );
}
