import React from 'react';
import NFLpic from '../images/NFL.jpg'
import { useState, useEffect } from "react";

const NFL = () => {
  const [nflInfo, setnflInfo] = useState([]);
  const divStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${NFLpic})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "900px",
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
    const fetchNFL = async () => {
      const res = await fetch(
        "http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard"
      );
      const data = await res.json();
      if (data.events) {
        setnflInfo(data.events);
      }
      console.log(data);
    };
    fetchNFL();
  }, []);
  

  return (
    <div style={divStyle}>
      <h3>NFL</h3>
      <div className="container">
        {nflInfo.map((teams, index) => (
          <div key={index}>
            <div className="boxStyle">
              <img className="logo-nfl"
                src={teams.competitions[0].competitors[0].team.logo}
                alt=""
              />
              <img className="logo-nfl"
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

export default NFL;

{
  /* <div style={box2Style}>
         <p>This is div for teams</p>
       </div> */
}
