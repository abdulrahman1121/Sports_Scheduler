import Soccerpic from '../images/Soccer.jpg';
import SoccerLogo from '../images/soccer-logo.png';
import {useState, useEffect} from 'react';

const Soccer = () => {
    const [soccerInfo, setSoccerInfo] = useState([]);
    const divStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Soccerpic})`,
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
          <div style={divStyle}>
          <div className="soccer-logo">
          <h3>Soccer</h3>
          <img src={SoccerLogo} alt="" />
          </div>
          <div className="container">
            {soccerInfo.map((teams, index) => (
              <div key={index}>
                <div className="boxStyle">
                  <img className="logo-soccer"
                    src={teams.competitions[0].competitors[0].team.logo}
                    alt=""
                  />
                  <img className="logo-soccer"
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
      
export default Soccer;
