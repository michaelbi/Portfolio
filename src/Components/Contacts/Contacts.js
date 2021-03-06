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
        name="contact"
        // action="/thanks"
        method="POST"
        // data-netlify="true"
        className="contact-form"
        autoComplete="off"
        // onSubmit={(event) => {
        //   event.preventDefault();
        // }}
      >
        <input
          name="name"
          className="s-input name"
          type="text"
          placeholder="name"
          required
        />
        <input
          name="email"
          className="s-input"
          type="email"
          placeholder="email"
          required
        />
        <textarea
          name="message"
          className="s-input"
          placeholder="contact message"
          required
        />
        <input type="hidden" name="form-name" value="contact" />

        {/* <input type="hidden" name="contact" value="contactForm" /> */}
        <button name="sub" type="submit">
          Send
        </button>
      </form>
    </Container>
  );
}

export default Contact;
