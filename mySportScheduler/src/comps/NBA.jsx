import React from "react";
import NBApic from "../images/NBA.JPG";

const NBA = () => {
  const divStyle = {
    backgroundImage: ` url(${NBApic}) `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "900px",
  };
  return (
    <div style={divStyle}>
      <h1>This is NBA page</h1>
    </div>
  );
};

export default NBA;
