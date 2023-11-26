import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { LuMenu } from "react-icons/lu";
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

const Sidebar = () => {

  const { signOutUser } = useAuth()
  const [isActive, setActive] = useState(false)

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between py-4 px-8 md:hidden'>
        <div>
          <div className='block cursor-pointer font-bold'>
                <h1 className='text-xl font-bold'>Out<span className='text-purple-700'>Poll</span></h1>
          </div>
        </div>

        <button
          onClick={handleToggle}
        >
          <LuMenu className='h-5 w-5' />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className='w-full hidden md:flex px-4 py-2 rounded-lg justify-center items-center mx-auto'>
                <h1 className='text-xl font-bold'>Out<span className='text-purple-700'>Poll</span></h1>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            <nav>
             

            </nav>
          </div>
        </div>

        <div>
          <hr />
          <Link to='/' className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-purple-800 hover:text-white transition-colors duration-300 transform rounded-md'>
            <FaHome className='w-5 h-5' />

            <span className='mx-4 font-medium'>Home</span>
          </Link>
          <button onClick={signOutUser} className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-purple-800 hover:text-white transition-colors duration-300 transform rounded-md'>
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Sign out</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar