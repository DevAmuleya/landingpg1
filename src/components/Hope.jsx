import React from 'react';
import logo1 from '../assets/B1.png';
import logo2 from '../assets/B2.png';
import logo3 from '../assets/B3.png';
import logo4 from '../assets/B4.png';
import logo5 from '../assets/B5.png';
import logo6 from '../assets/B6.png';

const teamData = [
  {
    img: logo1,
    comment: 'Emma Johnson founded Hope in 2023 and has over 20 years of nonprofit experience. Her passion for education and health drives Hope’s mission, inspiring the team with her leadership and dedication to making a difference.',
    name: 'Emma Johnson',
  },
  {
    img: logo2,
    comment: 'Michael Ramirez, with a background in social work and public health, oversees all of Hope’s initiatives. His strategic planning and compassionate approach ensure our programs effectively meet community needs.',
    name: 'Michael Ramirez',
  },
  {
    img: logo3,
    comment: 'Sophia Lee designs and leads our education programs. With over a decade of teaching experience, she is committed to providing quality education and creating opportunities for children to thrive.',
    name: 'Sophia Lee',
  },
  {
    img: logo4,
    comment: 'Dora Thompson manages our health and wellness programs. With a background in nursing and public health, she focuses on improving health outcomes and promoting preventive care in underserved communities.',
    name: 'Dora Thompson',
  },
  {
    img: logo5,
    comment: 'Dora Thompson manages our health and wellness programs. With a background in nursing and public health, she focuses on improving health outcomes and promoting preventive care in underserved communities.',
    name: 'Dora Thompson',
  },
  {
    img: logo6,
    comment: 'Dora Thompson manages our health and wellness programs. With a background in nursing and public health, she focuses on improving health outcomes and promoting preventive care in underserved communities.',
    name: 'Dora Thompson',
  },
];

const TeamMember = ({ img, name, comment }) => (
  <div className="flex flex-col px-2 sm:px-8 py-8 dark:text-white dark:bg-bg_footer bg-gray-100 rounded-2xl shadow-md">
    <img src={img} alt={name} className="w-20 h-20 rounded-full mb-4 object-cover mx-auto" />
    <p className="text-gray-600 dark:text-white text-sm mb-4">{comment}</p>
    <h1 className="text-xl font-bold text-gray-800 dark:text-white">{name}</h1>
  </div>
);

const Team = () => {
  return (
    <div className="bg-white dark:text-white dark:bg-bg_footer pb-10 sm:pb-20">
      <div className="px-4 sm:px-8 lg:px-16 lg:py-20 pt-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-500 dark:text-white mb-4">Voices of Hope</h1>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member, index) => (
            <TeamMember
              key={index}
              img={member.img}
              comment={member.comment}
              name={member.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
