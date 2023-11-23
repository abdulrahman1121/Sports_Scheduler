import React from "react";
import {Link} from 'react-router-dom'
export const Navbar = () => {
  return (
    <>
      <div className="cont">
        <div className="logo">
          <h2>LiveSync</h2>
        </div>
        <nav className="nav-items">
          <ul>
            <li><Link to={'Content'}>home</Link></li>
            <li>
            <Link to={'NBA'}>NBA</Link>
            </li>
            <li>
              <a href="#">NFL</a>
            </li>
            <li>
              <a href="#">MLB</a>
            </li>
            <li>
              <a href="#">Soccer</a>
            </li>
            <li>
              <a href="#">NHL</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
