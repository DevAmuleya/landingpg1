import React from 'react';
import logo from "../assets/Thands.png";

const Vision = () => {
  return (
    <div className='lg:pt-40 sm:pt-28 pt-10 text-gray-700 dark:text-white dark:bg-bg_footer'>
        <div className=' sm:pb-14'>
            <div className='px-1 sm:px-8 lg:px-16'>
                {/* Header Section */}
                <div className='text-center'>
                    <h2 className='text-primary_blue font-bold text-xl sm:text-2xl mb-6'>About us</h2>
                    <h1 className='font-extrabold text-xl sm:text-3xl md:text-6xl mb-6'>A Future Filled with Hope</h1>
                    <p className='text-sm sm:text-base'>
                        At Hope, we are dedicated to uplifting communities through a range of targeted initiatives.
                    </p>
                </div>

                {/* Image Section */}
                <div className='mt-10 mb-10'>
                <img
                    src={logo}
                    alt="logo"
                    className='rounded-xl w-full h-auto object-cover'
                />
                </div>

                {/* Grid Section */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 px-5 lg:px-10'>
                {/* Mission */}
                <div>
                    <h1 className='font-extrabold text-xl sm:text-2xl mb-3'>Our Mission</h1>
                    <p className='text-base sm:text-lg '>
                    Our mission is to empower individuals and communities by providing the tools and support they need to overcome challenges and achieve their fullest potential through collaborative efforts.
                    </p>
                </div>
                {/* Vision */}
                <div>
                    <h1 className='font-extrabold text-xl sm:text-2xl mb-3'>Our Vision</h1>
                    <p className='text-base sm:text-lg'>
                    Our vision is a world where every individual, regardless of their background or circumstances, has the opportunity to thrive. We envision communities that are resilient, self-reliant, and full of promise.
                    </p>
                </div>
                {/* Global Movement */}
                <div>
                    <h1 className='font-extrabold text-xl sm:text-2xl mb-3'>Global Movement</h1>
                    <p className='text-base sm:text-lg'>
                    We envision a global movement where compassion and empathy drive action, where the barriers of inequality and injustice are dismantled, and where hope is not just a fleeting sentiment but a tangible reality.
                    </p>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Vision;
