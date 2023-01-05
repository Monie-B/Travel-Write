import React from 'react'
import { NavBar } from '../components/NavBar'
import '../css/home.css'

const Home = () => {
  return (
    <div className='homebg'>
        <h1 className='home-title'>
            Welcome to Travel Write!
        </h1>
        <NavBar />
    </div>
  )
}

export default Home