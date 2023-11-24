import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Container from './Container'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-5 border-b-[1px]'>
        <Container>
          <div className='flex items-center justify-between gap-4 md:gap-0'>
            <h1 className='text-xl font-bold'>Out<span className='text-purple-700'>Poll</span></h1>

            {/* Dropdown Menu */}
            <div className='relative'>
                <div className='flex flex-row items-center gap-5'>
                    <div className='hidden lg:block'>
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                            isActive ? 'font-medium text-sm py-1 px-1.5 border-b-2 border-purple-700' : 'font-medium text-sm'
                            }
                            >
                                Home
                        </NavLink>
                    </div>
                    <div onClick={() => setIsOpen(!isOpen)}>
                        <AiOutlineMenu className='lg:hidden'/>
                        <div className='hidden lg:block'>
                            <NavLink
                                to='/signin'
                                className={({ isActive }) =>
                                isActive ? 'font-medium text-sm py-1 px-1.5 border-b-2 border-purple-700' : 'font-medium text-sm'
                                }
                                >
                                    Sign in
                            </NavLink>
                        </div>  
                    </div>
                </div>
                {isOpen && (
                    <div className='absolute rounded-xl shadow-md p-6 w-[200px] bg-white overflow-hidden right-0 top-12 text-sm lg:hidden'>
                    <div className='flex flex-col cursor-pointer'>
                        <NavLink
                                to='/signin'
                                className={({ isActive }) =>
                                isActive ? 'font-medium text-sm text-purple-700' : 'font-medium text-sm'
                                }
                                >
                                    Sign in
                        </NavLink>
                    </div>
                    </div>
                )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
