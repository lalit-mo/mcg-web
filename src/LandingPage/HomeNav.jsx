import React from 'react'
import "./HomeNav.css";
import { Link, useLocation } from "react-router-dom";

const HomeNav = ({value}) => {
  // Get the current pathname from useLocation hook
  const location = useLocation();
  const currentPath = location.pathname;


  return (
    <div>
      <nav className="nb">
        <div className="center-nav">
          <a className="logo" href="/">
            {/* <img className="logo" src={logo} /> */}
          </a>
     
          <ul id="navbar" className="navbar">

           
            {/* <ul className="screenonly">
              <a  className={currentPath === "/home" ? "active" : "notactive"} href="/home">MCG</a>
            </ul> */}

            <ul className="screenonly">
              <Link className={"notactive"} to="/home">
                MCG
              </Link>
          </ul>
            
            {/* <ul className="screenonly">
              <Link className={"notactive"} to="/cu">
                Contact Us
              </Link>
          </ul> */}
      
          </ul>   
        </div>
      </nav>

    </div>
  );
};

export default HomeNav






