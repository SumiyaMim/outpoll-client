import error from '../assets/error.json'
import Lottie from "lottie-react"
import { BiArrowBack } from "react-icons/bi";
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='w-[300px] md:w-[400px] lg:w-[500px] mx-auto my-10 md:my-0'>
            <Lottie animationData={error} loop={true} />
        </div>
        <div className='mb-5'>
            <Link to='/'>
                <button className='flex items-center gap-2 bg-purple-800 px-4 py-2 rounded-lg text-white'>
                    <i><BiArrowBack className='text-xl'></BiArrowBack></i>
                    <p className='text-sm font-medium'>Back to home</p>
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Error
