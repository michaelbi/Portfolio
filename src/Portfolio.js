import React, { useState } from "react";
import "./Portfolio.css";
import { NavBar, About, Projects, Contacts, Welcome } from "./Components";

function App() {
  const [navHeight, setNavHeight] = useState("30");
  return (
    <div className="App">
      <NavBar setNavHeight={setNavHeight} />
      <div style={{ height: navHeight + "px" }} />
      <Welcome />
      <About />
      <Projects />
      <Contacts />
      <div style={{ height: navHeight + "px" }} />
    </div>
  );
}

export default App;
