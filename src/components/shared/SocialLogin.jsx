import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const SocialLogin = () => {

    const { googleSignIn } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    // google sign up
    const handleGoogleSignUp = () => {
        googleSignIn()
        .then(result =>{
            // create user entry in the database
            const userInfo = {
              email: result.user?.email,
              name: result.user?.displayName,
              photo: result.user?.photoURL,
              role: 'user'
            }
            axiosPublic.post('/users', userInfo)
            .then((result) => {
              navigate('/');
            })
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
