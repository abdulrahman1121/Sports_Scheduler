import React from 'react';
import NHLpic from '../images/NHL.jpg'
import NHLLogo from '../images/nhl.png'
import {useEffect, useState} from 'react';

const NHL = () => {
  const [nhlInfo, setNhlInfo] = useState([]);
      

useEffect(() => {
  const fetchNHL = async () => {
    const res = await fetch(
      "http://site.api.espn.com/apis/site/v2/sports/hockey/nhl/scoreboard"
    );
    const data = await res.json();
    // if (data.events) {
    //   setNhlInfo(data.events);
    // }
    data.events ? setNhlInfo(data.events) : ''
    console.log(data);
  };
  fetchNHL();
}, []);


return (
  <div className='divStyle5'>
    <div className="nhl-logo">
      <h3>NHL</h3>
    <div>
      <img src={NHLLogo} alt="" />
    </div>
  </div>
  <div className="container">
      {nhlInfo.map((teams, index) => (
        <div key={index}>
          <div className="boxStyle">
            <img className="logo-nhl"
              src={teams.competitions[0].competitors[1].team.logo}
              alt=""
            />
            <img className="logo-nhl"
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



export default NHL;
