import React from 'react';
import NavBar from "../components/NavBar.jsx";

const AboutUs = () => {
  const teamMembers = [
    { name: 'Ankit Poriya', role: 'Frontend Dev, UI/UX Designer' },
    { name: 'Dishant Shah', role: 'ML Engineer, Backend Dev' },
    { name: 'Sukumar Soni', role: 'Blockchain Dev, Data Analyst' },
    { name: 'Bruno Pegado', role: 'Project Manager, Full Stack Dev' },
  ];

  return (
    <>
    {/* <NavBar></NavBar> */}
    <div className="p-6 sm:p-12">
      {/* About Section */}
      <section className="mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-purple-700 mb-4">About</h2>
        <div className="bg-gray-200 rounded-lg h-48 sm:h-64"></div>
      </section>

      {/* Meet the Team Section */}
      <section>
        <h2 className="text-xl sm:text-2xl font-semibold text-purple-700 mb-6">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
          {teamMembers.map((member, index) => (
           <div className=''>
           <div
              key={index}
              className="flex flex-col items-center bg-gray-200 rounded-lg h-48 sm:h-56 p-4 "
            >
              <div className="h-24 w-24 bg-gray-300 rounded-full mb-4"></div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
            </div>
          ))}
        </div>
      </section>
    </div>

    </>
  );
};

export default AboutUs;
