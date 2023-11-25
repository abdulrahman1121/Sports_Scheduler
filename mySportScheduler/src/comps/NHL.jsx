import React from 'react';
import NHLpic from '../images/NHL.jpg'

const NHL = () => {
    const divStyle = {
        backgroundImage: ` url(${NHLpic}) `,
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

export default NHL;
