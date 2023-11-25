import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { TbEye } from 'react-icons/tb';
import { TbEyeClosed } from 'react-icons/tb';
import Container from '../components/shared/Container';
import SocialLogin from '../components/shared/SocialLogin';
import useAuth from '../hooks/useAuth';
import { Helmet } from 'react-helmet-async';

const SignIn = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const { signInUser } = useAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();  

    // sign in user
    const handleSignIn = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        if (email && password) {
        signInUser(email, password)
            .then((result) => {
            // navigate after login
            navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
            setError('Invalid email or password');
            });
        } else {
        setError('Invalid email or password');
        }
    };
    
  return (
    <div className="pt-36 pb-20">
        <Helmet>
           <title>OutPoll | Sign in</title>
        </Helmet>    
        <Container>
            <div className="p-8 md:w-3/5 lg:w-2/5 mx-auto rounded-md">
                <h2 className="text-2xl font-bold text-center mb-12">
                Welcome to Out<span className='text-purple-700'>Poll</span>
                </h2>
                <form onSubmit={handleSignIn}>
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
                <p className='mt-2 text-xs text-red-600 font-semibold'>{error}</p>
                <div className="mt-6 mb-4">
                    <button type='submit' className="p-2.5 w-full bg-purple-800 border-2 border-purple-800 hover:bg-white hover:text-purple-800 rounded-md text-white font-semibold text-sm">
                    SIGN IN
                    </button>
                </div>
                </form>
                <p className='text-xs text-zinc-500 font-medium text-center mb-4'>or sign in with</p>
                <SocialLogin></SocialLogin>
                <p className="text-zinc-500 text-center text-xs font-medium mt-5">
                    Don’t have an account?{" "}
                    <Link to="/signup">
                    <span className="text-purple-700 underline">Sign up</span>
                    </Link>
                </p>
            </div>
        </Container>
    </div>
  )
}

export default SignIn
