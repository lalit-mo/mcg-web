import React from 'react';
import UniNavbar from '../UniNavbar';
import './About.css';
import Researchcollab from '../Publications/Researchcollab';
import infographic from './info-graphic.png'; // Import the infographic image

function About() {
  return (
    <div>
      <div>
        <UniNavbar />
      </div>
      <div>
        <h1 className='au-head'>
          About Us
        </h1>
        <p className='au-parah'>
          In the Music Cognition Group, we investigate audio perception and understanding. The human brain has the ability to intuitively understand complex relationships between frequencies and beats, and attribute symbolic and emotional meaning to them. <br/><br/>

          We study various aspects of music cognition, such as how listening habits relate to mental health, how music genres evolve over time, and the role of lyrics versus music in emotional perception. We also investigate when repetitive sounds become musical and how different content mediums influence music popularity trends, and how we can generate personalized soundtracks to accompany and enhance other activities such as reading. <br/><br/>
        </p>
        <img src={infographic} alt="Infographic" className='infographic' /> {/* Add the infographic image */}
        <Researchcollab />
      </div>
    </div>
  );
}

export default About;