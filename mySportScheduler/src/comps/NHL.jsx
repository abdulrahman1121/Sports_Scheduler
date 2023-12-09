import React from 'react';
import NHLpic from '../images/NHL.jpg'
import NHLLogo from '../images/nhl.png'
import {useEffect, useState} from 'react';

const NHL = () => {
  const [nhlInfo, setNhlInfo] = useState([]);
    const divStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${NHLpic})`,
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
  const fetchNHL = async () => {
    const res = await fetch(
      "http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/scoreboard"
    );
    const data = await res.json();
    if (data.events) {
      setNhlInfo(data.events);
    }
    console.log(data);
  };
  fetchNHL();
}, []);


return (
  <div style={divStyle}>
    <div className="nhl-logo">
    <h3>NHL</h3>
    <img src={NHLLogo} alt="" />
    </div>
    <div className="container">
      {nhlInfo.map((teams, index) => (
        <div key={index}>
          <div className="boxStyle">
            <img className="logo-nhl"
              src={teams.competitions[0].competitors[0].team.logo}
              alt=""
            />
            <img className="logo-nhl"
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



export default NHL;
