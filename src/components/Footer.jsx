import React from 'react'; 

const Footer = () => {
  return (
    <div className='pb-16 bg-bg_footer text-white'>
      <div className='p-8 sm:p-12 lg:p-16'>
        {/* Grid layout for all screen sizes */}
        <div className='grid grid-cols-1 sm:grid-cols-7 gap-8 border-b border-white justify-between pb-16'>
          <div className='col-span-1 sm:col-start-1 sm:col-end-2 mb-5'>
            <h1>
              <span className='block text-4xl font-extrabold mb-10'>Hope</span>
              <span className='font-bold'>Contact:</span>
            </h1>
            <p>
              <span className='block underline'>1800 123 4567</span>
              <span>
                <a href="mailto:info@Hope.io" className='underline'>info@Hope.io</a>
              </span>
            </p>
            <div className='flex mt-8'>
              <ul className='flex justify-between gap-4'>
                <li className='flex gap-4 text-xl text-primary_blue'>
                  <a href="#" aria-label="Facebook">
                    <i className='icon-facebook-f'></i>
                  </a>

                  <a href="#" aria-label="Pinterest">
                    <i className='icon-pinterest'></i>
                  </a>

                  <a href="#" aria-label="Twitter">
                    <i className='icon-twitter'></i>
                  </a>

                  <a href="#" aria-label="LinkedIn">
                    <i className='icon-linkedin'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-span-1 sm:col-start-6 sm:col-end-7 flex flex-col space-y-4 mb-5'>
            <p>About us</p>
            <p>Campaigns</p>
            <p>Get involved</p>
            <p>Contact us</p>
          </div>
          <div className='col-span-1 sm:col-start-7 sm:col-end-8 lg:pl-20 flex flex-col space-y-4'>
            <p>About us</p>
            <p>Campaigns</p>
            <p>Get involved</p>
            <p>Contact us</p>
          </div>
        </div>

        {/* Footer bottom */}
        <div className='pt-8'>
          <div className='grid grid-cols-1 lg:grid-cols-6 gap-4'>
            
            {/* Copyright Section */}
            <div className='mb-14 col-span-1 lg:col-start-1 lg:col-end-3 text-start'>
              <p>&copy; 2025 Hope. All Rights Reserved.</p>
            </div>
            <div className='mb-8 col-span-1 lg:col-start-5 lg:col-end-6 text-start lg:text-right sm:pl-4'>
              <p>Privacy Policy</p>
            </div>
            <div className='col-span-1 lg:col-start-6 lg:col-end-7 text-start lg:text-right sm:pl-4'>
              <p>Terms of Service</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
