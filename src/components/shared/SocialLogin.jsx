import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {

  return (
    <div className="flex justify-between items-center mx-auto">
        <hr className='border-black w-[172px] border-[1px]'/>
        <button className="border-[1.5px] border-black p-1.5 rounded-full">
            <FaGoogle className="text-sm"></FaGoogle>
        </button>
        <hr className='border-black w-[172px] border-[1px]'/>
    </div>
  )
}

export default SocialLogin
