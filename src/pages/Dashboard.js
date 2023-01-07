import { NavBar } from '../components/NavBar'
import '../css/dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashbg'>
      <NavBar />
        <div>
            <h1 className='dash-title'>
                Add a New Travel Experience
            </h1>
        </div>
    </div>
  )
}

export default Dashboard