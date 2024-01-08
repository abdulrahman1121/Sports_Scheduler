import MLBpic from '../images/MLB.jpg';
import React from "react";
import { useState, useEffect } from "react";
import MLBLogo from '../images/MLB.png'
const MLB = () => {

  const [MblTeam, setMblTeam] = useState([]);

  
  useEffect(() => {
    const fetchNba = async () => {
      const res = await fetch(
        "http://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard"
      );
      const data = await res.json();
      if (data.events) {
        setMblTeam(data.events);
      }
      console.log(data);
    };
    fetchNba();
  }, []);

  
  return (
    <div className="divStylee">
      <div className="MLB-logo">
        <h3>MLB</h3>
        <div>
          <img src={MLBLogo} alt="" />
        </div>
      </div>
      <div className="container">
        {MblTeam.map((teams, index) => (
          <div key={index}>
            <div className="boxStyle">
              <img
                className="logo-mlb"
                src={teams.competitions[0].competitors[1].team.logo}
                alt=""
              />
              <img
                className="logo-mlb"
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

export default MLB;

