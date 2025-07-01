import React from 'react'
import "./PubNav.css"
import { Link, useLocation } from "react-router-dom";


const PubNav = ({value}) => {
    const location = useLocation();
    const currentPath = location.pathname;


  return (
    <div>
      <nav className="Pnb">
        <div className="Pcenter-nav">
          <a className="Plogo" href="/">
            {/* <img className="logo" src={logo} /> */}
          </a>
     
          <ul id="navbar" className="Pnavbar">

           
           

            <div className='Pmiddle-nav'>
                <ul className="Pmidnav">
                    <a  className={currentPath === "/jnc" ? "active" : "notactive"} href="/jnc">Journals Articles and Conference Proceedings</a>
                </ul>
                <ul className="Pmidnav">
                    <a  className={currentPath === "/pres" ? "active" : "notactive"} href="/pres">Conference Presentations</a>
                </ul>
                <ul className="Pmidnav">
                    <a  className={currentPath === "/bnt" ? "active" : "notactive"} href="/bnt">Books & Thesis</a>
                </ul>
                <ul className="Pmidnav">
                    <a  className={currentPath === "/ptnt" ? "active" : "notactive"} href="/ptnt">Patents</a>
                </ul>
            </div>
            
      
          </ul>   
        </div>
      </nav>

    </div>
  )
}

export default PubNav;