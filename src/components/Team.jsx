import React from 'react';
import logo1 from '../assets/Lady.png';
import logo2 from '../assets/Lady2.png';
import logo3 from '../assets/Lady3.png';
import logo4 from '../assets/Guy.png';

const teamData = [
  {
    img: logo1,
    post: 'Founder & Executive Director',
    name: 'Emma Johnson',
    comment: 'Emma Johnson founded Hope in 2023 and has over 20 years of nonprofit experience. Her passion for education and health drives Hope’s mission, inspiring the team with her leadership and dedication to making a difference.',
  },
  {
    img: logo2,
    post: 'Director of Programs',
    name: 'Michael Ramirez',
    comment: 'Michael Ramirez, with a background in social work and public health, oversees all of Hope’s initiatives. His strategic planning and compassionate approach ensure our programs effectively meet community needs.',
  },
  {
    img: logo3,
    post: 'Head of Education Initiative',
    name: 'Sophia Lee',
    comment: 'Sophia Lee designs and leads our education programs. With over a decade of teaching experience, she is committed to providing quality education and creating opportunities for children to thrive.',
  },
  {
    img: logo4,
    post: 'Community Health Coordinator',
    name: 'Dora Thompson',
    comment: 'Dora Thompson manages our health and wellness programs. With a background in nursing and public health, she focuses on improving health outcomes and promoting preventive care in underserved communities.',
  },
];

const TeamMember = ({ img, post, name, comment }) => (
  <div className="flex flex-col items-center px-2 sm:px-5 text-center py-6 dark:text-white bg-white dark:bg-bg_footer rounded-2xl shadow-md">
    <img src={img} alt={`${name}`} className="w-24 h-24 rounded-full mb-4 object-cover" />
    <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-1">{post}</h2>
    <h1 className="text-xl font-bold text-gray-500 dark:text-white mb-3">{name}</h1>
    <p className="text-sm text-gray-600 dark:text-white">{comment}</p>
  </div>
);

const Team = () => {
  return (
    <div className="bg-bg_primary text-gray-400 dark:text-white dark:bg-bg_footer pb-2 sm:pb-5">
      <div className="px-4 sm:px-8 lg:px-16 sm:py-20 p-10">
        {/* Heading Section */}
        <div className="text-center sm:mb-16 mb-5">
          <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
          <p className="max-w-2xl mx-auto">
            Our dedicated team works tirelessly to bring hope and positive change to communities worldwide.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid dark:bg-bg_footer grid-cols-1 sm:px-10 sm:p-0 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {teamData.map((member, index) => (
            <TeamMember
              key={index}
              img={member.img}
              post={member.post}
              name={member.name}
              comment={member.comment}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
