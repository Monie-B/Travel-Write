import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

export const NavBar = () => {
  return (
    <div className='nav'>
        <Link to="/"><button>Home</button></Link>
        <Link to="/Dashboard"><button>Dashboard</button></Link>
        <Link to="/UserProfile"><button>User Profile</button></Link>
    </div>
  )
}
