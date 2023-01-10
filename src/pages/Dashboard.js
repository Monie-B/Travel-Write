import { NavBar } from '../components/NavBar'
import NewTravelForm from '../components/NewTravelForm'
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
        <NewTravelForm />
    </div>
  )
}

export default Dashboard