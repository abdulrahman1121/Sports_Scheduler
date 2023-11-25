import React from 'react';
import NFLpic from '../images/NFL.jpg'

const NFL = () => {
    const divStyle = {
        backgroundImage: ` url(${NFLpic}) `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "900px",
      };
      return (
        <div style={divStyle}>
            
        </div>
    );
}

export default NFL;
