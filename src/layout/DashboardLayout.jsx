import { Outlet } from "react-router-dom"
import Sidebar from "../components/dashboard/Sidebar"

const DashboardLayout = () => {
  return (
    <div>
        <div className='relative min-h-screen lg:flex'>
            {/* Sidebar Component */}
            <Sidebar/>
            <div className='flex-1 md:ml-64'>
            <div className='p-5'>
                {/* Outlet for dynamic contents */}
                <Outlet/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout
