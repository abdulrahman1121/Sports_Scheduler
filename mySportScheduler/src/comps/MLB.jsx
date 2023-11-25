import React from 'react';
import MLBpic from '../images/MLB.jpg';

const MLB = () => {
    const divStyle = {
        backgroundImage: ` url(${MLBpic}) `,
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
