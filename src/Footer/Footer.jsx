import React from 'react';
import "./Footer.css";
import csllogo from "./Foot-imgs/cog-sci-logo-2.png";
import { Link } from 'react-router-dom';
import fb from "./Foot-imgs/fb.svg";
import lk from "./Foot-imgs/linked.svg";
import insta from "./Foot-imgs/insta.svg";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='sb__footer section__padding'>
        <div className='sb__footer-links'>
          <hr />
          <div className='sb-nabi'>
            <div className='sb__footer-below'>
              <div className='sb__footer-content'>
                <a className="logo" href="https://csl.iiit.ac.in/index.html">
                  <img className="logo-img" src={csllogo} alt="Logo" />
                </a>
                <div className='sb__footer-text'>
                  <p>&copy;{new Date().getFullYear()} Music Cognition Group.</p>
                  <p>International Institute of Information Technology,<br /> Hyderabad 500032</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;