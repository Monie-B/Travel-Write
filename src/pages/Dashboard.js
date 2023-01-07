import { NavBar } from '../components/NavBar'
import SideNav from '../components/SideNav'
import '../css/dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashbg'>
      <NavBar />
        <div>
            <h1 className='dash-title'>
                Add a New Travel Experience
            </h1>
            <SideNav />
        </div>
    </div>
  )
}

export default Dashboard