import React from 'react'
import Logo from '../assets/candleLogo.png';
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftside'>
            <img src={Logo} />
        </div>
        <div className='rightside'></div>
          
    </div>
  )
}

export default Navbar
