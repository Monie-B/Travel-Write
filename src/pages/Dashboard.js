import { NavBar } from '../components/NavBar'
import TabComps from '../components/TabComps'
import '../css/dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashbg'>
      <NavBar />
        <div>
            <h1 className='dash-title'>
                Add a New Travel Experience
            </h1>
            <TabComps />
        </div>
    </div>
  )
}

export default Dashboard