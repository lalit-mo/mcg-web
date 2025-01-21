import React from 'react'
import HomeNav from './HomeNav'
import "./Home.css";
import homemainImg from "./LPimgs/land.png"
import mem from "./LPimgs/mem.png"
import pub from "./LPimgs/pub.png"
import aboutus from "./LPimgs/aboutus.png"
import talks from "./LPimgs/talks.png"



function Home() {
  return (
    <div className='homepage'>
    
{/* Customised navbar just for the landing page */}
      <HomeNav/>

{/* Main head with images head and parah */}
      <div className='home-head'>
        <div className='main-box'>
          <h1 className='main-head'>Music Cognition Group</h1>
          <p className='main-para'>We are an interdisciplinary research group working on all things music. Our research encompasses music information retrieval, music psychology and neuroscience among other fields.</p>

          {/* 3 buttons for mem, pub, about-us */}
      <div className='threeBTsbox'>
        <a href='/mem'><img className='threeBT' src={mem}/></a>
        <a href='/jnc'><img className='threeBT' src={pub}/></a>
        <a href='/talks'><img className='threeBT' src={talks}/></a>
        <a href='/about'><img className='threeBT' src={aboutus}/></a>
        

      </div>
        </div>     
        
        


      </div>
      <img className='main-head-img' src={homemainImg} alt="main img"/>


      
    </div>
  )
}

export default Home