import React from "react";
import "./contacts.css";

function Contact() {
  return (
    <div id="contacts">
      <div>email</div>
      <div>facebook</div>
      <div>lindIN</div>
      <form>
        <input name="email" type="email" placeholder="email" />
        <input name="message" type="text" placeholder="contact message" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Contact;
