import React from 'react'
import { NavBar } from '../components/NavBar'
import '../css/home.css'

const Home = () => {
  return (
    <div className='homebg'>
        <div>
            {/* <h1 className='home-title centered'>
                Welcome to Travel Write!
            </h1> */}
            <NavBar />
        </div>
        <div className='cont1'>
            <img src='https://www.kcrw.com/join/join-kcrw-images/caribbean-background-banner-1.jpg' alt='Resort' className='home-resort' />
            <div className='home-title centered'>
                Welcome to Travel Write!
            </div>
        </div>
        <div>
            <h1 className='middleTitleTxt'>
                Travel Write is your go to app for saving, blogging, and rating your travel experiences!
            </h1>
        </div>
        <div className='container'>
            <div className='txtcont1'>
                <h2>
                    Your Experience
                </h2>
                <p>
                    Travel Write is all about YOUR experience! Your travel experience will help other users get insight on things like fun iteneraries, was the food good, whether the location has good night life nearby, if you experienced theft or even racism, etc. By simply detailing and/or rating your experience during your travels, you can help someone else determine if that kind of trip would be a good fit for them! Another benefit: a space to save your travel memories! 
                </p>
            </div>
            <div className='txtcont2'>
                <h2>
                    Others' Experience
                </h2>
                <p>
                    Travel Write is a community for bridging travelers. You can view other user's travel experiences as well! Not all destinations have been safe for all groups of people. Travel Write is great for being prepared on what to expect or even what to avoid. Whether you have kids or you're traveling alone, its best to know as much as possible! Travel Write is also great for helping you decide on what to do. Check out someone else's itenerary for ideas on what to do in that location!
                </p>
            </div>
        </div>
    </div>
  )
}

export default Home