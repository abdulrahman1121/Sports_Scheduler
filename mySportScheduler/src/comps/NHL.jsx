import React from 'react';
import NHLpic from '../images/NHL.jpg'

const NHL = () => {
    const divStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${NHLpic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "900px",
      };

      
  const boxStyle = {
    width: "200px",
    height: "200px",
    backgroundColor: "lightblue",
    border: "2px solid blue",
    borderRadius: "8px",
    textAlign: "center",
    paddingTop: "20px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
      return (
        <div style={divStyle}>

        <div style={boxStyle}>
        <p>This is a div box</p>
      
      </div>
      </div>
    );
}



export default NHL;
