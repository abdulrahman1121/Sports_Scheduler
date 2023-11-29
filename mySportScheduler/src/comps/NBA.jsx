import React from "react";
import NBApic from "../images/NBA2.jpg";
import { useState, useEffect } from "react";
const NBA = () => {
  const [nabInfo, setNbaInfoo] = useState([]);
  const divStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${NBApic})`,
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
    const fetchNba = async () => {
      const res = await fetch(
        "http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard"
      );
      const data = await res.json();
      if (data.events) {
        setNbaInfoo(data.events);
      }
      console.log(data);
    };
    fetchNba();
  }, []);

  return (
    <div style={divStyle}>
      <h3>NBA</h3>
      <div className="container">
        {nabInfo.map((teams, index) => (
          <div key={index}>
            <div className="boxStyle">
              <img className="logo-nba"
                src={teams.competitions[0].competitors[0].team.logo}
                alt=""
              />
              <img className="logo-nba"
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

export default NBA;

{
  /* <div style={box2Style}>
         <p>This is div for teams</p>
       </div> */
}
