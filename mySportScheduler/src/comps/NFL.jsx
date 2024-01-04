import NFLpic from "../images/NFL.jpg";
import NFLlogo from "../images/nfl.png";
import React from "react";
import { useState, useEffect } from "react";
import MLBLogo from "../images/MLB.png";
const NFL = () => {
  const [NflTeam, setNflTeam] = useState([]);

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
      const res = await fetch(
        "http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard"
      );
      const data = await res.json();
      if (data.events) {
        setNflTeam(data.events);
      }
      console.log(data);
    };
    fetchNba();
  }, []);

  return (
    <div className="divStyle2">
      <div className="NBA-logo">
        <h3>Nfl</h3>
        <div>
          <img src={NFLlogo} alt="" />
        </div>
      </div>
      <div className="container">
        {NflTeam.map((teams, index) => (
          <div key={index}>
            <div className="boxStyle">
              <img
                className="logo-nfl"
                src={teams.competitions[0].competitors[1].team.logo}
                alt=""
              />
              <img
                className="logo-nfl"
                src={teams.competitions[0].competitors[0].team.logo}
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
