import React from 'react'
import Footer from '../components/Footer'
import { Header } from '../components/Header'
import '../css/home.css'
import '../css/blobz.css'

const Home = () => {
  return (
    <div>
        <div>
            <Header />
        </div>
        <div className='cont1'>
            <img src='https://www.kcrw.com/join/join-kcrw-images/caribbean-background-banner-1.jpg' alt='Resort' className='home-resort' />
            <div className='home-title centered'>
                Welcome to Travel Write!
            </div>
        </div>
        <div>
            <h1 className='middleTitleTxt'>
                Travel Write is all about YOUR experience!
            </h1>
        </div>
        <div className='container1'>
            <div className='txtcont1'>
                <h2 className='home-h2'>
                    Your Experience
                </h2>
                <p>
                     Your travel experience will help other users get insight on things like fun iteneraries, if the food was good, whether the location has good night life nearby, if you experienced theft or even how you were treated, etc. 
                </p>
            </div>
            <div className='img-div1'>
                <img src='https://rb.gy/q4aubu' alt='resort' className='home-resort2' />
            </div>
        </div>
        <div>
            <h1 className='middleTitleTxt'>
                Travel Write is your go to app for saving, blogging, and rating your travel experiences!
            </h1>
        </div>
        {/* <div class="tk-blob">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
                <path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"></path>
            </svg>
        </div> */}
        <div className='container2'>
            <div className='img-div2'>
                <img src='https://rb.gy/3eo6vo' alt='kids on vacation at a waterpark' className='home-resort3' />
            </div>
            <div className='txtcont2'>
                <h2 className='home-h2'>
                    Your Experience Helps Others
                </h2>
                <p>
                By simply detailing and/or rating your experience during your travels, you can help someone else determine if that kind of trip would be a good fit for them! Another benefit: a space to save your travel memories!
                </p>
            </div>
        </div>
        <div>
            <h1 className='middleTitleTxt'>
                Enjoy an app that's dedicated to blog style user reviews!
            </h1>
        </div>
        <div className='container3'>
            <div className='txtcont3'>
                <h2 className='home-h2'>
                    Stay Safe!
                </h2>
                <p>
                    Travel Write is a community for bridging travelers. You can view other user's travel experiences as well! Not all destinations have been safe for all groups of people. Travel Write is great for being prepared on what to expect or even what to avoid.
                </p>
            </div>
            <div className='img-div3'>
                <img src='https://rb.gy/smubkb' alt='group of women riding in a boat' className='home-girlstrip'/>
            </div>
            <div className='txtcont3'>
                <h2 className='home-h2'>
                        Others' Experience
                </h2>
                    <p>
                        Whether you have kids or you're traveling alone, its best to know as much as possible! Travel Write is also great for helping you decide on what to do. Check out someone else's itenerary for ideas on what to do in that location!
                    </p>
                </div>
            </div>
            <div>
                <h1 className='middleTitleTxt bottomTxt'>
                    Whether you are creating or just viewing, get started today!
                </h1>
            </div>
        <Footer />
    </div>
  )
}

export default Home