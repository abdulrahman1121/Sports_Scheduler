import React from 'react';
import Soccerpic from '../images/Soccer.jpg';

const Soccer = () => {
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
            <h3>Soccer</h3>
            
        <div style={boxStyle}>
            <p>This is a div box</p>
        
        <div style={box2Style}>
          <p>This is div for teams</p>
            </div>
          </div>
        </div>
        
        );
    }
      
export default Soccer;
