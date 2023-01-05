import { NavBar } from '../components/NavBar'
import '../css/UserProfile.css'

const UserProfile = (props) => {
  return (
    <div className='userbg'>
        <h1>
            <h1>Welcome to Your User Profile</h1>
        </h1>
        <NavBar />
    </div>
  )
}

export default UserProfile