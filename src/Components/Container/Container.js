import React from "react";
import "./container.css";

const Container = ({ children, divId }) => {
  return (
    <div className="outter_container" id={divId}>
      <div className="container">{children}</div>
    </div>
  );
};

export default Container;
