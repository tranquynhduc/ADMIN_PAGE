import React from 'react';
import { Link } from 'react-router-dom';
import './style/Navbar.css';
import {FaGlobeEurope} from 'react-icons/fa'
import {BsBellFill} from 'react-icons/bs';
import {FcSteam} from 'react-icons/fc';

function NavbarAdmin() {
  return (
      <div className='topbar'>
        <div className='topbarwapper'>
        
          <div className='topleft'>
            <Link to='/' className='logo'><FcSteam/></Link>
          </div>
         
          <div className='topright'>
            <div className='topIconContainer' >
            <BsBellFill/>
              <span className='topIconBadge'>2</span>
            </div>
            <div className='topIconContainer' >
            <FaGlobeEurope/>
              <span className='topIconBadge'>2</span>
            </div>
            <div className='topIconContainer' >
            </div>
            <img src='https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-suy-tu-1.jpg' className='topAvatar' />
          </div>
        </div>
      </div>
  )
}

export default NavbarAdmin