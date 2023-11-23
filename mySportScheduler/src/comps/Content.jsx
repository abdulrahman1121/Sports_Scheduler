import React from "react";
import allPic from "../images/allSports.jpg";
import {Link} from 'react-router-dom'
const Content = () => {
  return (
    <div>
      <div style={{ 
        backgroundImage: `url(${allPic})`,
        backgroundSize: 'cover', 
        height: '600px', 
        objectFit: ' cover'
      }}>
        
      </div>
      <div className="info">
        <Link to={'/Livegames'}><button>Live games</button></Link>
        <Link to={'/Upcoming'}><button>Upcoming games</button></Link>
        
        
      </div>
    </div>
  );
};

export default Content;
