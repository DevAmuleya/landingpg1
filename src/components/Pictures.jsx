import React from 'react';
import logo1 from '../assets/C1.png';
import logo2 from '../assets/C2.png';
import logo3 from '../assets/C3.png';
import logo4 from '../assets/C4.png';
import logo5 from '../assets/C5.png';
import logo6 from '../assets/C6.png';

const Images = [
  { img: logo1, alt: 'Image 1 Description' },
  { img: logo2, alt: 'Image 2 Description' },
  { img: logo3, alt: 'Image 3 Description' },
  { img: logo4, alt: 'Image 4 Description' },
  { img: logo5, alt: 'Image 5 Description' },
  { img: logo6, alt: 'Image 6 Description' },
];

const Pictures = () => {
  return (
    <div className="pt-1 px-4 sm:px-8 lg:px-16 dark:bg-bg_footer">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Images.map((data, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={data.img}
              alt={data.alt}
              className="w-full h-auto object-cover rounded-md shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pictures;
