import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const { googleSignIn } = useAuth();
    const navigate = useNavigate();

    // google sign up
    const handleGoogleSignUp = () => {
        googleSignIn()
        .then((result) => {
            navigate('/');
        })
        .catch((error) => {
            console.error(error);
        });
    };

  return (
    <div className="flex justify-between items-center mx-auto">
        <hr className='border-black w-[172px] border-[1px]'/>
        <button onClick={handleGoogleSignUp} className="border-[1.5px] border-black p-1.5 rounded-full">
            <FaGoogle className="text-sm"></FaGoogle>
        </button>
        <hr className='border-black w-[172px] border-[1px]'/>
    </div>
  )
}

export default SocialLogin
