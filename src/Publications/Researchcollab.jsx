import React from 'react';
import './Researchcollab.css';
import oslo from "./Publications-imgs/Oslo University seal 1.png";
import mexico from "./Publications-imgs/mexico.png";
import jyva from "./Publications-imgs/UoJlogo.png";
import neuro from "./Publications-imgs/NIMHANS logo 1.png";
import mib from "./Publications-imgs/Center for Music 1.png";
import sym from "./Publications-imgs/Symbiosis University logo 1.png";
import soundBrilliance from "./Publications-imgs/soundBrilliance.svg";
import precog from "./Publications-imgs/Precog_IIITH_Logo1.png";
import kshetra from "./Publications-imgs/kshetra.png";
import jcu from "./Publications-imgs/JCU_Logo_Horizontal_RGB.svg";
import dst from "./Publications-imgs/dst-logo.png";
import ihub from "./Publications-imgs/ihub.png";
import nserb from "./Publications-imgs/nserb.png";

function Researchcollab() {
  return (
    <div className='container'>
      <h1 className='researchHead-pub'>Research Collaborations (Past and Present)</h1>
      <div className='main-collab-container'>
        {/* University of Oslo */}
        <div className='collab-container'>
          <img className='collab-logo' src={oslo} alt="University of Oslo" />
          <p className='collab-p'>University of Oslo</p>
        </div>

        {/* University of Mexico */}
        <div className='collab-container'>
          <img className='collab-logo' src={mexico} alt="University of Mexico" />
          <p className='collab-p'>University of Mexico</p>
        </div>

        {/* University of Jyväskylä */}
        <div className='collab-container'>
          <img className='collab-logo' src={jyva} alt="University of Jyväskylä" />
          <p className='collab-p'>University of Jyväskylä</p>
        </div>

        {/* National Institute of Mental Health & Neuro Sciences */}
        <div className='collab-container'>
          <img className='collab-logo' src={neuro} alt="NIMHANS" />
          <p className='collab-p'>NIMHANS</p>
        </div>

        {/* Center for Music in the Brain */}
        <div className='collab-container'>
          <img className='collab-logo' src={mib} alt="Center for Music in the Brain" />
          <p className='collab-p'>Center for Music in the Brain</p>
        </div>

        {/* Symbiosis University */}
        <div className='collab-container'>
          <img className='collab-logo' src={sym} alt="Symbiosis University" />
          <p className='collab-p'>Symbiosis University</p>
        </div>

        {/* SoundBrilliance */}
        <div className='collab-container'>
          <img className='collab-logo' src={soundBrilliance} alt="SoundBrilliance" />
          <p className='collab-p'></p>
        </div>

        {/* PreCog IIIT-H */}
        <div className='collab-container'>
          <img className='collab-logo' src={precog} alt="PreCog IIIT-H" />
          <p className='collab-p'></p>
        </div>

        {/* Kshetra Assisted Living */}
        <div className='collab-container'>
          <img className='collab-logo' src={kshetra} alt="Kshetra Assisted Living" />
          <p className='collab-p'>Kshetra Assisted Living</p>
        </div>

        {/* James Cook University, Australia */}
        <div className='collab-container'>
          <img className='collab-logo' src={jcu} alt="James Cook University, Australia" />
          <p className='collab-p'>James Cook University</p>
        </div>
      </div>

      {/* Funding Section */}
      <h1 className='researchHead-pub'>Funding</h1>
      <div className='funding-container'>
        {/* DST */}
        <div className='funding-item'>
          <img className='funding-logo' src={dst} alt="DST" />
          <p className='funding-text'>My Music and I: Mining Mental States and Traits Via Music Listening</p>
        </div>

        {/* iHub */}
        <div className='funding-item'>
          <img className='funding-logo' src={ihub} alt="iHub" />
          <p className='funding-text'>Music & Social Media: Characterizing Well-being of Indian Citizens during the Pandemic</p>
        </div>

        {/* NSERB */}
        <div className='funding-item'>
          <img className='funding-logo' src={nserb} alt="NSERB" />
          <p className='funding-text'>Music, Brain, and Culture: Modelling Implicit Musical Knowledge with Deep Neural Networks</p>
        </div>
      </div>
    </div>
  );
}

export default Researchcollab;