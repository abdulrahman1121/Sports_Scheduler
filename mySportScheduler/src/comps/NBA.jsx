import React from "react";
import NBApic from "../images/NBA.jpg";

const NBA = () => {
  const divStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${NBApic})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "900px",
    
  };
    return (
      <div style={divStyle}>
          
      </div>
  );
}

export default NBA;
