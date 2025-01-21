import React from 'react'
import { Link, useLocation } from "react-router-dom";
import "./Talknav.css"

const Talknav = ({value}) => {
    const location = useLocation();
    const currentPath = location.pathname;


  return (
    <div>
        <nav className="Nnb">
        <div className="Ncenter-nav">
          <a className="Nlogo" href="/">
            {/* <img className="logo" src={logo} /> */}
          </a>
     
          <ul id="navbar" className="Nnavbar">

           
           

            <div className='Nmiddle-nav'>
                <ul className="Nmidnav">
                    <a  className={currentPath === "/jnc" ? "active" : "notactive"} href="/jnc">Keynotes</a>
                </ul>
                <ul className="Nmidnav">
                    <a  className={currentPath === "/pres" ? "active" : "notactive"} href="/pres">Press</a>
                </ul>
                
               
                
            </div>
            
      
          </ul>   
        </div>
      </nav>
    </div>
  )
}

export default Talknav