import React from 'react'
import back from "./ContactImg/MacBook Pro 14_ - 13.png"
import "./Contact.css"
import HomeNav from '../LandingPage/HomeNav'
import fb from "./ContactImg/facebook.png"
import lk from "./ContactImg/linkedin.png"
import gs from "./ContactImg/googlesch.png"


function Contact() {
  return (
    <div>
        
        <img className='backcu' src={back}></img>
        <HomeNav/>
        <div className='contact'>
            <h1 className='headcu'>Contact Us</h1>
            <p className='bodycu'><b>Email</b> : vinoo.alluri@iiit.ac.in</p>
            <p className='bodycu'><b>Office</b>: International Institute of Information Technology, Gachibowli, Hyderbad. India - 500032 </p>
        </div>

        <div>
            <a href='https://web.archive.org/web/20230928105710/https://www.facebook.com/vinoo.alluri'><img className='threeBTCU'  src={fb}></img></a>
            <a href='https://web.archive.org/web/20230928105710/https://www.facebook.com/vinoo.alluri'><img className='threeBTCU'  src={lk}></img></a>
            <a href='https://web.archive.org/web/20230928105710/https://www.facebook.com/vinoo.alluri'><img className='threeBTCU'  src={gs}></img></a>
        </div>
        
    </div>
  )
}

export default Contact