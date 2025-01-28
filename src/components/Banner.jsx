import React from 'react';
import logo from "../assets/Hands.png";

const Banner = () => {
  return (
    <div className='lg:py-20 p-1 dark:bg-bg_footer'>
      {/* Header Section */}
      <div className='flex justify-center pb-5 lg:pb-16 pl-0 pr-0'>
        <div className='mb-5 flex flex-col text-center'>
          <h2 className='text-primary_blue mb-5 font-bold text-lg sm:text-3xl'>What we do</h2>
          <h1 className='font-extrabold text-3xl sm:text-6xl md:text-6xl'>
            <span className='block mb-5'>Making a Difference,</span>
            <span>One Life at a Time.</span>
          </h1>
          <div className='mt-6 text-sm sm:text-base max-w-xl'>
            <p>
              At Hope, we are dedicated to uplifting communities through a range of targeted initiatives. Our focus areas include:
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className='sm:pt-8 sm:pb-8  px-4 sm:px-8 md:px-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center'>
          {/* Left Text Section */}
          <div className='flex flex-col sm:mt-32'>
            <div className='lg:mb-14 mb-5'>
              <h1 className='font-bold text-lg sm:text-xl mb-2'>Education Empowerment</h1>
              <p className='text-sm sm:text-base'>
                Providing resources and support to ensure every child has access to quality education.
              </p>
            </div>
            <div className='lg:mb-14 mb-5'>
              <h1 className='font-bold text-lg sm:text-xl mb-2'>Health and Wellness</h1>
              <p className='text-sm sm:text-base'>
                Delivering healthcare services and promoting healthy living in underserved areas.
              </p>
            </div>
            <div className='lg:mb-14 mb-5'>
              <h1 className='font-bold text-lg sm:text-xl mb-2'>Economic Development</h1>
              <p className='text-sm sm:text-base'>
                Creating opportunities for sustainable income and self-sufficiency through vocational training and micro-financing.
              </p>
            </div>
            <div>
              <h1 className='font-bold text-lg sm:text-xl mb-2'>Environmental Stewardship</h1>
              <p className='text-sm sm:text-base'>
                Protecting our planet by promoting sustainable practices and fostering environmental awareness.
              </p>
            </div>
          </div>

          {/* Right Image Section */}
          <div className='max-h-[500px]'>
            <img src={logo} alt="logo" className='w-full h-auto rounded-2xl object-cover' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
