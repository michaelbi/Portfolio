import React from "react";
import "./NavBar.css";
import { links } from "../../data/NavData/navdata";

export default function TopBar() {
  return (
    <div className="navbar">
      <div className="nav-icon">
        <small>Michael</small>
      </div>

      <ul className="nav-items">
        {links.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.link}>
                <h5>{item.text}</h5>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
