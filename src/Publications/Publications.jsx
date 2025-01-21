import React from 'react'
import UniNavbar from '../UniNavbar'
import './Publications.css'
import Researchcollab from './Researchcollab'

import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';
import PubNav from './Pub-navbar/PubNav';

function Publications() {
  return (
    <div>
        <div>
            <UniNavbar/>
        </div>
        <div>
            <PubNav/>
        </div>
        
    </div>
  )
}

export default Publications