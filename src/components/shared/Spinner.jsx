import Lottie from 'lottie-react';
import spinner from '../../assets/spinner.json'

const Spinner = () => {
  return (
    <div className='flex justify-center py-28'>
        <div className='w-[100px] mx-auto'>
            <Lottie animationData={spinner} loop={true} />
        </div>
    </div>
  )
}

export default Spinner
