import { Link } from 'react-router-dom'
import { useState } from 'react';
import { TbEye } from 'react-icons/tb';
import { TbEyeClosed } from 'react-icons/tb';
import Container from '../components/shared/Container';
import SocialLogin from '../components/shared/SocialLogin';

const SignUp = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="pt-36 pb-20">
        <Container>
            <div className="p-8 w-4/5 md:w-3/5 lg:w-2/5 mx-auto rounded-md">
                <h2 className="text-2xl font-bold text-center mb-1">
                    Create Account
                </h2>
                <p className='text-center text-xs font-medium text-zinc-400 mb-12'>Start your journey: sign up and join today.</p>
                <form>
                <div className='mb-5'>
                    <div className='flex items-center border-[1.5px] border-zinc-300 rounded-md'>
                        <input
                        type='text'
                        name='name'
                        placeholder='Name*'
                        className='input flex-grow focus:outline-none rounded-md placeholder:text-zinc-500 placeholder:text-sm text-sm pl-4 p-2.5'
                        required
                        />
                    </div>
                </div>
                <div className='mb-5'>
                    <div className='flex items-center border-[1.5px] border-zinc-300 rounded-md'>
                        <input
                        type='email'
                        name='email'
                        placeholder='Email*'
                        className='input flex-grow focus:outline-none rounded-md placeholder:text-zinc-500 placeholder:text-sm text-sm pl-4 p-2.5'
                        required
                        />
                    </div>
                </div>
                <div className='mb-5'>
                    <div className='flex items-center border-[1.5px] border-zinc-300 rounded-md'>
                        <input
                        type='text'
                        name='photo'
                        placeholder='Photo URL*'
                        className='input flex-grow focus:outline-none rounded-md placeholder:text-zinc-500 placeholder:text-sm text-sm pl-4 p-2.5'
                        required
                        />
                    </div>
                </div>
                <div className='mb-1'>
                    <div className='flex items-center border-[1.5px] border-zinc-300 rounded-md'>
                        <input
                        type={passwordVisible ? 'text' : 'password'}
                        name='password'
                        placeholder='Password*'
                        className='input flex-grow focus:outline-none rounded-md placeholder:text-zinc-500 placeholder:text-sm text-sm pl-4 p-2.5'
                        required
                        />
                        <button
                        type='button'
                        onClick={() => setPasswordVisible(!passwordVisible)}
                        className='flex items-center pr-3.5'
                        >
                        <i className='text-gray-500 text-lg'>
                            {passwordVisible ? <TbEye /> : <TbEyeClosed />}
                        </i>
                        </button>
                    </div>
                </div>
                {/* <p className='mt-2 text-xs text-red-600 font-semibold'>{error}</p> */}
                <div className="mt-6 mb-4">
                    <button type='submit' className="p-2.5 w-full bg-purple-800 border-2 border-purple-800 hover:bg-white hover:text-purple-800 rounded-md text-white font-semibold text-sm">
                    SIGN UP
                    </button>
                </div>
                </form>
                <p className='text-xs text-zinc-500 font-medium text-center mb-4'>or sign up with</p>
                <SocialLogin></SocialLogin>
                <p className="text-zinc-500 text-center text-xs font-medium mt-5">
                    Already have an account?{" "}
                    <Link to="/signin">
                    <span className="text-purple-700 underline">Sign in</span>
                    </Link>
                </p>
            </div>
        </Container>
    </div>
  )
}

export default SignUp
