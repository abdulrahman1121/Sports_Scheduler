import React from 'react';
import NHLpic from '../images/NHL.jpg'

const NHL = () => {
    const divStyle = {
        backgroundImage: ` url(${NHLpic}) `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "900px",
        import React from "react";

const DivBox = () => {
          const boxStyle = {
            width: "200px",
            height: "200px",
            backgroundColor: "lightblue",
            border: "2px solid blue",
            borderRadius: "8px",
            textAlign: "center",
            paddingTop: "20px",
          };
        
          return (
            <div style={boxStyle}>
              <p>This is a div box</p>
            </div>
          );
        };
        
        export default DivBox;
        
      };
      return (
        <div style={divStyle}>
            
        </div>
    );
}

export default NHL;
