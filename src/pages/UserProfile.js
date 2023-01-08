import { NavBar } from '../components/NavBar'
import '../css/UserProfile.css'

const UserProfile = (props) => {
  return (
    <>
      <NavBar />
        <div className='user-header'>
          <h1>Space for the Username</h1>
          <div className='pic-section'>
            <img src='user.png' alt='user icon' className='userpic' />
          </div>
          <div className='user-detail-section'>
            <div className='btns'>
              <button>Follow</button>
              <button className='msgbtn'>Message</button>
            </div>
            <h3>User's actual Name goes here</h3>
              <p>User bio/description goes here. Hello everyone! Welcome to my travel page. Message me if you have any further questions!</p>
          </div>
        </div>
    </>
  )
}

export default UserProfile