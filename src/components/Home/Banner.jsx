/* eslint-disable no-unused-vars */
import React from 'react';
import { FaCirclePlay } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="relative bg-cover bg-[url('https://i.ibb.co/Nt04vW6/survey-banner.jpg')] bg-no-repeat max-w-7xl mx-auto">
     <div className="absolute inset-0 bg-white opacity-80"></div>
      <div className="relative flex flex-col justify-center items-center h-[350px] md:h-[400px] lg:h-[550px]">
            <div className='bg-white p-6 md:p-10 lg:p-20 mt-16'>
            <h1 className='text-2xl md:text-4xl font-semibold text-center mb-4'>Share Your <span className='text-purple-800'>Opinion</span></h1>
            <p className='font-normal w-[300px] md:w-[500px] lg:w-[650px] text-[10px] md:text-sm text-center mb-4 md:mb-6'>Simplify surveying processes, gather comprehensive data, and make informed, actionable decisions effortlessly for seamless operational precision.</p>
            <Link to="about">
              <button className='bg-purple-800 mx-auto px-4 md:px-7 py-2 md:py-2.5 border-2 border-purple-800 text-white hover:text-purple-800 hover:bg-white rounded-md text-xs md:text-base font-medium flex items-center gap-3'>
                  Explore More
                  <span><FaCirclePlay className='text-sm md:text-lg'/></span>
              </button>
            </Link>
            </div>
      </div>
    </div>
  );
};

export default Banner;
