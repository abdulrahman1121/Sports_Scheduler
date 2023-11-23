import React from "react";
import {Link} from 'react-router-dom'
export const Navbar = () => {
  return (
    <>
      <div className="cont">
        <div className="logo">
          <h2 >LiveSync</h2>
        </div>
        <nav className="nav-items">
          <ul>
            <li><Link to={'Content'}>home</Link></li>

            <li><Link to={'NBA'}>NBA</Link></li>
            
            <li><Link to={'NFL'}>NFL</Link></li>

            <li><Link to={'MLB'}>MLB</Link></li>
            
            <li><Link to={'Soccer'}>Soccer</Link></li>
            
            <li><Link to={'NHL'}>NHL</Link></li>

          </ul>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
