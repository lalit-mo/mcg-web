import React from 'react'
import "./UniNavbar.css";
import { Link, useLocation } from "react-router-dom";

const UniNavbar = ({value}) => {
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

           
            <ul className="screenonly">
              <a  className={currentPath === "/home" ? "active" : "notactive"} href="/home">MCG</a>
            </ul>

            <div className='middle-nav'>
                <ul className="midnav">
                    <a  className={currentPath === "/mem" ? "active" : "notactive"} href="/mem">Members</a>
                </ul>
                <ul className="midnav">
                    <a  className={currentPath === "/jnc" ? "active" : "notactive"} href="/jnc">Publications</a>
                </ul>
                <ul className="midnav">
                    <a  className={currentPath === "/talks" ? "active" : "notactive"} href="/talks">Talks</a>
                </ul>
                <ul className="midnav">
                    <a  className={currentPath === "/about" ? "active" : "notactive"} href="/about">About Us</a>
                </ul>
                
            </div>
            
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

export default UniNavbar






