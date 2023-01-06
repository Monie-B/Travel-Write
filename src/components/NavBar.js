import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

export const NavBar = () => {
  return (
    <div className='nav'>
        <Link to="/">Home</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/UserProfile">User Profile</Link>
    </div>
  )
}
