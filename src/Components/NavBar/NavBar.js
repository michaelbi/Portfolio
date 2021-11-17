import React, { useState, useRef, useEffect } from "react";
import "./NavBar.css";
import { links } from "../../data/NavData/navdata";

export default function TopBar({ setNavHeight }) {
  const nav = useRef();
  const linksList = useRef(null);
  const [navClass, setNavClass] = useState("");
  const [isOpen, setIsOpen] = useState("");

  useEffect(() => {
    setNavHeight(nav.current.offsetHeight + 20);

    const changeOpacity = () => {
      if (nav.current && window.scrollY >= nav.current.offsetHeight) {
        setNavClass("full-op");
      } else {
        setNavClass("");
      }
    };

    window.addEventListener("scroll", changeOpacity);

    return () => window.removeEventListener("scroll", changeOpacity);

    // eslint-disable-next-line
  }, []);

  return (
    <div className={`navbar ${navClass}`} ref={nav}>
      <div className="nav-icon">
        <small>Michael</small>
      </div>

      <div
        className={`humburger ${isOpen}`}
        onClick={() => {
          setIsOpen((open) => (open === "" ? "close" : ""));
        }}
      >
        <div className="bar first" />
        <div className="bar second" />
        <div className="bar third" />
      </div>

      <ul
        className={`nav-items${isOpen === "close" ? "" : " close"} ${navClass}`}
        ref={linksList}
        style={{
          top:
            nav.current && window.innerWidth < 768
              ? nav.current.offsetHeight + "px"
              : "",
        }}
      >
        {console.log(navClass)}
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
