import React from 'react';
import NFLpic from '../images/NFL.jpg';
import NFLlogo from '../images/nfl.png';
import { useState, useEffect } from "react";

const NFL = () => {
  const [nflInfo, setNflInfo] = useState([]);
  // const divStyle = {
  //   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${NFLpic})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   width: "100%",
  //   height: "900px",
  //   fontSize: "12px"
  // };

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
        setNflInfo(data.events);
      }
      console.log(data);
    };
    
    fetchNFL();
  }, []);
  

  return (
    <div className='divStyle2'>
      <div className="nfl-logo">
      <h3>NFL</h3>
      <div>
      <img src={NFLlogo} alt="" />
      </div>
      </div>
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
