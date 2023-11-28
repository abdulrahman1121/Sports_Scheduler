import React from 'react';
import NFLpic from '../images/NFL.jpg'

const NFL = () => {
    const divStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${NFLpic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "900px",
      };
      
    const boxStyle = {
        width: "400px",
        height: "300px",
        backgroundColor: "lightblue",
        border: "2px solid blue",
        borderRadius: "5px",
        textAlign: "center",
        paddingTop: "20px",
        position: "absolute",
        top: "75%",
        left: "50%",
        transform: "translate(-75%, -25%)",
      };
    
      const box2Style = {
        width: "200px",
        height: "200px",
        backgroundColor: "red",
        border: "2px solid yellow",
        borderRadius: "5px",
        textAlign: "center",
        paddingTop: "20px",
        position: "absolute",
        top: "75%",
        left: "50%",
        transform: "translate(150%, -150%)",
  };
      return (
      <div style={divStyle}>
          <h3>NHL</h3>
          
      <div style={boxStyle}>
          <p>This is a div box</p>
      
      <div style={box2Style}>
        <p>This is div for teams</p>
          </div>
        </div>
      </div>
      
      );
  }

export default NFL;
