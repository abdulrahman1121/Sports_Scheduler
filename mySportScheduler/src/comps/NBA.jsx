import React from "react";
import NBApic from "../images/NBA2.jpg";
import { useState, useEffect } from "react";
// const [nabInfo,setNbaInfoo] = useState([])
const NBA = () => {
    const divStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${NBApic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "900px",
      };

    const boxStyle = {
        width: "300px",
        height: "300px",
        backgroundColor: "lightblue",
        border: "2px solid blue",
        borderRadius: "5px",
        textAlign: "center",
        paddingTop: "20px",
        position: "absolute",
        top: "75%",
        left: "50%",
        transform: "translate(-50%, -75%)",
      };
    
      const box2Style = {
        width: "200px",
        height: "200px",
        backgroundColor: "orange",
        border: "2px solid green",
        borderRadius: "5px",
        textAlign: "center",
        paddingTop: "20px",
        position: "absolute",
        top: "75%",
        left: "50%",
        transform: "translate(150%, -150%)",
  };
  useEffect(() => {
    const fetchNba = async () => {
      const res = await fetch('http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard')
      const data = await res.json()
      console.log(data)
    };
    fetchNba();
  }, []);
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

export default NBA;