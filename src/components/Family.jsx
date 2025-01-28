import React from 'react';
import logo from "../assets/Moon.png";

const Family = () => {
  return (
    <div className='bg-white dark:bg-bg_footer'>
      <div className='sm:py-20 pt-4 px-4 sm:px-8 lg:px-16'>
        {/* Header Section */}
        <div className='flex '>
            <div className='sm:mb-32 mt-5 flex flex-col justify-start font-extrabold'>
                <h1 className='text-primary_blue p:10 text-5xl sm:pl-20 lg:text-[150px] block justify-end'>
                    <span className='block'>Friends. Family.</span>
                    <span className='block'>Communities</span>
                </h1>
            </div>
        </div>

        {/* Content Section */}
        <div className='grid px-1 lg:px-10 grid-cols-1 lg:grid-cols-2 sm:gap-28 gap-10 sm:mt-16 mt-5'>
          {/* Text Section */}
          <div className='flex flex-col justify-center'>
            <h1 className='font-extrabold text-2xl sm:text-3xl mb-6'>The Journey of Hope</h1>
            <div className='text-base lg:leading-relaxed text-gray-700 dark:text-white'>
                <p className='mb-4'>
                Hope was born out of a deep-seated belief that every life holds immense value and potential. Founded in [Year], our organization began with a small group of passionate individuals determined to make a difference. From humble beginnings, we have grown into a network of dedicated volunteers, supporters, and partners all united by a common goal: to bring hope to those who need it most.
                </p>
                <p className='mb-4'>
                Our journey has been marked by countless stories of transformation and triumph. From a child who received a scholarship and became the first in their family to attend college, to communities that have blossomed through our sustainable farming programs—these successes fuel our commitment to continue our work with unwavering dedication. We invite you to be a part of our story.
                </p>
                <p className='sm:mb-4'>
                Together, we can turn the tide and create a world where hope is a reality for everyone.
                </p>
            </div>
          </div>

          {/* Image Section */}
          <div className='flex items-center'>
            <img
              src={logo}
              alt="Hope"
              className='w-full h-auto rounded-2xl object-cover shadow-md'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Family;
