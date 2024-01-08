import Soccerpic from '../images/Soccer.jpg';
import SoccerLogo from '../images/soccer-logo.png';
import {useState, useEffect} from 'react';

const Soccer = () => {
    const [soccerInfo, setSoccerInfo] = useState([]);
    
    useEffect(() => {
      const fetchSoccer = async () => {
        const res = await fetch(
          "http://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard"
        );
        const data = await res.json();
        if(data.events){
          setSoccerInfo(data.events);
        }
        console.log(data);
      };
    fetchSoccer();
}, [])

    
    
return (
  <div className="divStyle4">
    <div className="soccer-logo">
      <h3>Premier League</h3>
    <div>
      <img src={SoccerLogo} alt="" />
    </div>
  </div>
  <div className="container">
    {soccerInfo.map((teams, index) => (
    <div key={index}>
      <div className="boxStyle">
        <img className="logo-soccer"
        src={teams.competitions[0].competitors[1].team.logo}
        alt=""
        />
        <img className="logo-soccer"
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
      
export default Soccer;
