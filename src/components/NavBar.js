import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
        <Link to="/">Home</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/UserProfile">User Profile</Link>
    </>
  )
}
