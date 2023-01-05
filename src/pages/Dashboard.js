import { NavBar } from '../components/NavBar'
import '../css/dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashbg'>
        <div>
            <h1 className='dash-title'>
                Welcome to Your Dashboard
            </h1>
        </div>
        <NavBar />
    </div>
  )
}

export default Dashboard