import React from "react";
import Container from "../Container/Container";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IconContext } from "react-icons";

import "./contacts.css";

function Contact() {
  return (
    <Container divId="contacts">
      <IconContext.Provider
        value={{ size: "25px", color: "rgb(167, 223, 36)" }}
      >
        <div className="social-c">
          <div>
            <MdOutlineAlternateEmail />
            email
          </div>
          <div>
            <BsFacebook />
            facebook
          </div>
          <div>
            <BsLinkedin />
            lindIN
          </div>
        </div>
      </IconContext.Provider>
      <form
        action="/index.html"
        method="POST"
        netlify
        name="contact"
        className="contact-form"
        autoComplete="off"
        // onSubmit={(event) => {
        //   event.preventDefault();
        // }}
      >
        <input
          className="s-input"
          name="email"
          type="email"
          placeholder="email"
          required
        />
        <textarea
          className="s-input"
          name="message"
          placeholder="contact message"
          required
        />
        <input type="hidden" name="form-name" value="contactForm" />
        <input type="submit" />
      </form>
    </Container>
  );
}

export default Contact;
