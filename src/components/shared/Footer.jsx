import { BsFacebook, BsPinterest } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import Container from './Container';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-black py-10'>
      <Container>
            <h1 className='text-xl font-bold text-white text-center mb-5'>Out<span className='text-purple-700'>Poll</span></h1>
            <div className='text-zinc-400 flex justify-center text-xs md:text-sm gap-4 mb-5'>
                <Link to='about' className='hover:text-zinc-300'>About Us</Link>
                <Link to='contact' className='hover:text-zinc-300'>Contact Us</Link>
                <Link to='privacy' className='hover:text-zinc-300'>Privacy Policy </Link>
                <Link to='help' className='hover:text-zinc-300'>Help Center</Link>
            </div>
            <div className='text-white text-2xl flex items-center gap-4 justify-center mb-10'>
                <i><BsFacebook></BsFacebook></i>
                <i><BsPinterest></BsPinterest></i>
                <i className='text-[28px]'><AiFillTwitterCircle></AiFillTwitterCircle></i>
            </div>
            <hr className='border-zinc-600 border-[0.5px] mb-10'/>
            <p className='text-xs text-zinc-100 text-center'>Copyright © {new Date().getFullYear()} OutPoll. All Right Reserved</p>
      </Container>
    </div>
  )
}

export default Footer
