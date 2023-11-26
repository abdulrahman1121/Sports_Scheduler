import React from 'react';
import MLBpic from '../images/MLB.jpg';

const MLB = () => {
    const divStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${MLBpic})`,
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

export default MLB;
