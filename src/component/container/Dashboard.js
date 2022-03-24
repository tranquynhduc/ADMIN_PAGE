import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Dashboard.css';
import { AiFillHome } from 'react-icons/ai';
import { GrUser } from 'react-icons/gr';
import { FaLuggageCart } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';


function Dashboard() {
  return (
    <div className='dashboard'>
       <div className='dashboardWapper'>
        <div className='dashboardMenu'>
          <h3 className='dashboardTitle'>Dashboard</h3>
          <ul className='dashboardList'>
            <Link className='dashboardListItem ' to='/'>
              <AiFillHome className='icon'/> Home
            </Link>
            <Link className='dashboardListItem' to='/UserList'>
              <GrUser className='icon'/> Users
            </Link>
            <Link className='dashboardListItem' to='/Addproduct'>
              <FaLuggageCart className='icon' />  Products
            </Link>
            <Link className='dashboardListItem' to='/About'>
              <FcAbout className='icon' />  About
            </Link>
          </ul>
        </div>
      </div> 
    </div>
  )
}

export default Dashboard