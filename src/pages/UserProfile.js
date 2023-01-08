import { NavBar } from '../components/NavBar'
import '../css/UserProfile.css'

const UserProfile = (props) => {
  return (
    <>
      <NavBar />
        <div className='user-header'>
          <h1>Space for the Username</h1>
          <div className='pic-section'>This space for user Avatar</div>
          <div className='user-detail-section'>
            <button>Follow</button>
            <button className='msgbtn'>Message</button>
          </div>
        </div>
    </>
  )
}

export default UserProfile