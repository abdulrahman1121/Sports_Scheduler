import React from 'react';
import MLBpic from '../images/MLB.jpg';
import MLBLogo from '../images/MLB.png'
import { useState, useEffect } from "react";

const MLB = () => {
  const [mlbInfo, setMlbInfo] = useState([]);
    // const divStyle = {
    //     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${MLBpic})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     width: "100%",
    //     height: "900px",
    //   };

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
        backgroundColor: "purple",
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
    const fetchMLB = async () => {
      const res = await fetch(
        "http://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard"
      );
      const data = await res.json();
      if (data.events) {
        setMlbInfo(data.events);
      }
      console.log(data);
    };
    fetchMLB();
  }, []);

  return (
    <div className='divStyle3'>
      <div className="mlb-logo">
      <h3>MLB</h3>
      <div>
      <img src={MLBLogo} alt="" />
      </div>
      </div>
      <div className="container">
        {mlbInfo.map((teams, index) => (
          <div key={index}>
            <div className="boxStyle">
              <img className="logo-mlb"
                src={teams.competitions[0].competitors[0].team.logo}
                alt=""
              />
              <img className="logo-mlb"
                src={teams.competitions[0].competitors[1].team.logo}
                alt=""
              />
            </div>
            <h2>{teams.shortName}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};


export default MLB;
