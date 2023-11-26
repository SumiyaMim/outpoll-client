import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { LuMenu } from "react-icons/lu";
import Container from './Container'
import useAuth from '../../hooks/useAuth'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const { user, signOutUser } = useAuth();
    const navigate = useNavigate();

    const handleSignOut = (e) => {
        e.preventDefault();
        signOutUser(); 
        navigate('/signin'); 
    };

  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-5 border-b-[1px]'>
        <Container>
          <div className='flex items-center justify-between gap-4 md:gap-0'>
            <h1 className='text-xl font-bold'>Out<span className='text-purple-700'>Poll</span></h1>

            {/* Dropdown Menu */}
            <div className='relative'>
                <div className='flex flex-row items-center gap-6'>
                    <div className='hidden lg:block'>
                        <div className='flex items-center gap-6'>
                            <NavLink
                                to='/'
                                className={({ isActive }) =>
                                isActive ? 'font-medium text-sm py-1 px-1.5 border-b-2 border-purple-700' : 'font-medium text-sm py-1 px-1.5'
                                }
                                >
                                    Home
                            </NavLink>
                            <NavLink
                                to='/about'
                                className={({ isActive }) =>
                                isActive ? 'font-medium text-sm py-1 px-1.5 border-b-2 border-purple-700' : 'font-medium text-sm py-1 px-1.5'
                                }
                                >
                                    About
                            </NavLink>
                            <NavLink
                                to='/surveys'
                                className={({ isActive }) =>
                                isActive ? 'font-medium text-sm py-1 px-1.5 border-b-2 border-purple-700' : 'font-medium text-sm py-1 px-1.5'
                                }
                                >
                                    Surveys
                            </NavLink>
                            <NavLink
                                to='/pricing'
                                className={({ isActive }) =>
                                isActive ? 'font-medium text-sm py-1 px-1.5 border-b-2 border-purple-700' : 'font-medium text-sm py-1 px-1.5'
                                }
                                >
                                    Pricing
                            </NavLink>
                            <NavLink
                                to='/contact'
                                className={({ isActive }) =>
                                isActive ? 'font-medium text-sm py-1 px-1.5 border-b-2 border-purple-700' : 'font-medium text-sm py-1 px-1.5'
                                }
                                >
                                    Contact
                            </NavLink>
                        </div>
                    </div>
                    {user?.email ? (
                        <div onClick={() => setIsOpen(!isOpen)}>
                            <label tabIndex={0} className="avatar">
                                <div className="w-9 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} className='rounded-full'/>
                                </div>
                            </label>
                        </div>
                    ) : (
                    <div onClick={() => setIsOpen(!isOpen)}>
                        <LuMenu className='lg:hidden'/>
                        <div className='hidden lg:block'>
                            <NavLink
                                to='/signin'
                                className={({ isActive }) =>
                                isActive ? 'font-medium text-sm py-1 px-1.5 border-b-2 border-purple-700' : 'font-medium text-sm py-1 px-1.5'
                                }
                                >
                                    Sign in
                            </NavLink>
                        </div> 
                    </div>
                    )
                    }
                </div>
                {isOpen && (
                <>
                    {user?.email && (
                    <div className='absolute rounded-xl shadow-md p-6 w-[200px] bg-white overflow-hidden right-0 top-16 text-sm hidden lg:block'>
                       <div className='hidden lg:block'>
                            <div className='flex flex-col gap-2.5'>
                                    <>
                                    <p className='font-medium text-sm'>{user.displayName}</p>
                                    <NavLink
                                        to='/my-profile'
                                        className='font-medium text-sm hover:text-purple-800'
                                        >
                                            My Profile
                                    </NavLink>
                                    <NavLink
                                        to='/dashboard'
                                        className='font-medium text-sm hover:text-purple-800'
                                        >
                                            Dashboard
                                    </NavLink>
                                    <div>
                                        <button onClick={handleSignOut} className='font-medium text-sm hover:text-purple-800'>Sign out</button>
                                    </div>
                                    </>
                            </div>
                        </div>
                    </div>
                    )}
                    <div className='absolute rounded-xl shadow-md p-6 w-[200px] bg-white overflow-hidden right-0 top-16 text-sm lg:hidden'>
                        <div className='block lg:hidden'>
                            <div className='flex flex-col gap-2.5'>
                                {user?.email && <p className='font-medium text-sm'>{user.displayName}</p>}
                                <NavLink
                                    to='/my-profile'
                                    className={({ isActive }) =>
                                    isActive ? 'font-medium text-sm text-purple-800' : 'font-medium text-sm'
                                    }
                                    >
                                        My Profile
                                </NavLink>
                                <NavLink
                                    to='/dashboard'
                                    className={({ isActive }) =>
                                    isActive ? 'font-medium text-sm text-purple-800' : 'font-medium text-sm'
                                    }
                                    >
                                        Dashboard
                                </NavLink>
                                <NavLink
                                    to='/'
                                    className={({ isActive }) =>
                                    isActive ? 'font-medium text-sm text-purple-800' : 'font-medium text-sm'
                                    }
                                    >
                                        Home
                                </NavLink>
                                <NavLink
                                    to='/about'
                                    className={({ isActive }) =>
                                    isActive ? 'font-medium text-sm text-purple-800' : 'font-medium text-sm'
                                    }
                                    >
                                        About
                                </NavLink>
                                <NavLink
                                    to='/surveys'
                                    className={({ isActive }) =>
                                    isActive ? 'font-medium text-sm text-purple-800' : 'font-medium text-sm'
                                    }
                                    >
                                        Surveys
                                </NavLink>
                                <NavLink
                                    to='/pricing'
                                    className={({ isActive }) =>
                                    isActive ? 'font-medium text-sm text-purple-800' : 'font-medium text-sm'
                                    }
                                    >
                                        Pricing
                                </NavLink>
                                <NavLink
                                    to='/contact'
                                    className={({ isActive }) =>
                                    isActive ? 'font-medium text-sm text-purple-800' : 'font-medium text-sm'
                                    }
                                    >
                                        Contact
                                </NavLink>
                                {user?.email ? (
                                    <div>
                                        <button onClick={handleSignOut} className="font-medium text-sm hover:text-purple-800">Sign out</button>
                                    </div>
                                    ) : (
                                    <NavLink
                                        to='/signin'
                                        className={({ isActive }) =>
                                        isActive ? 'font-medium text-sm text-purple-800' : 'font-medium text-sm'
                                        }
                                        >
                                            Sign in
                                    </NavLink>
                                    )
                                }
                            </div>
                        </div> 
                    </div>
                </>
                )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
