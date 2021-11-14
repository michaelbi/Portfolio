import React from "react";
import "./container.css";

const Container = ({ children }) => {
  return (
    <div className="outter_container">
      <div className="container">{children}</div>
    </div>
  );
};

export default Container;
