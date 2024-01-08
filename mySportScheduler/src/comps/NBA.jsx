import React from "react";
import NBApic from "../images/NBA2.jpg";
import NBAlogo from "../images/nba-logo.jpg";
import { useState, useEffect } from "react";

const NBA = () => {
  const [nbaInfo, setNbaInfo] = useState([]);
  //const [nbaTeam, setNbaTeam] = useState([]);


  useEffect(() => {
    const fetchNba = async () => {
      const res = await fetch(
        "http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard"
      );
      const data = await res.json();
      if (data.events) {
        setNbaInfo(data.events);
      }
      console.log(data);
    };
    fetchNba();
  }, []);

  // useEffect(() => {
  //   const fetchTeam = async () => {
  //     const res = await fetch(
  //       "http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams"
  //     );
  //     const data = await res.json();
  //     if (data.events) {
  //       setNbaTeam(data.evebts);
  //     }
  //     console.log(data);
  //   };
  //   fetchTeam();
  // }, []);

  return (
    <div className="divStyle">
      <div className="NBA-logo">
        <h3>NBA</h3>
        <div>
          <img src={NBAlogo} alt="" />
        </div>
      </div>
    <div className="container">
      {nbaInfo.map((teams, index) => (
          <div key={index}>
            <div className="boxStyle"> 
              <img className="logo-nba"
                src={teams.competitions[0].competitors[1].team.logo}
                alt=""
              />
              <img
                className="logo-nba"
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

export default NBA;

{
  /* <div style={box2Style}>
         <p>This is div for teams</p>
       </div> */
}
