import React, { useContext, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import './Navbar.css'
import axios from '../../axios';
import { searchUrl } from '../../url';
import { SearchContext } from '../../contexts/SearchContext';
import { Link, useNavigate } from 'react-router-dom';
import { QueryContext } from '../../contexts/queryContext';

export default function Navbar() {
  const {searchQuery,setSearchQuery} = useContext(QueryContext)
  const {setSearchResult} = useContext(SearchContext)
  const navigate = useNavigate()
  const handleSearch = (e)=>{
    e.preventDefault()
    axios.get(`${searchUrl}&query=${searchQuery}`).then((res)=>{
      setSearchResult(res.data.results)
      console.log(res.data.results)
    })
    navigate('/search')
  }
  return (
    <div className='navbar'>
        <Link to='/' ><img className='nav-logo' src="/Images/nav-icon.png" alt="Netfilx" /></Link>
        <ul className='nav-icons-list'>
          <li className='nav-list-item'>
            <form className='search-form' onSubmit={handleSearch}>
              <input type='text' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} className='search-inp' placeholder='Search for movie' />
              <button type='submit' className='search-button'><IoSearch /></button>
            </form>
          </li>
          <li className='nav-list-item'>HDS</li>
          <li className='nav-list-item'>DVD</li>
          <li className='nav-list-item'><FaBell /></li>
          <li><img className='avatar-icon' src="/Images/Netflix-avatar.png" alt="" /></li>
        </ul>
    </div>
  )
}
