import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <img className='nav-logo' src="/Images/nav-icon.png" alt="Netfilx" />
        <ul className='nav-icons-list'>
          <li className='nav-list-item'><IoSearch /></li>
          <li className='nav-list-item'>HDS</li>
          <li className='nav-list-item'>DVD</li>
          <li className='nav-list-item'><FaBell /></li>
          <li><img className='avatar-icon' src="/Images/Netflix-avatar.png" alt="" /></li>
        </ul>
    </div>
  )
}
