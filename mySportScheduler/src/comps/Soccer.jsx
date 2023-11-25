import React from 'react';
import Soccerpic from '../images/Soccer.jpg';

const Soccer = () => {
    const divStyle = {
        backgroundImage: ` url(${Soccerpic}) `,
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
export default Soccer;
