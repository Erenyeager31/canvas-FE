// import React from "react";
// import Footer from "../components/Footer.jsx";

// const AboutUs = () => {
//   const teamMembers = [
//     { name: "Ankit Poriya", role: "Frontend Dev, UI/UX Designer" },
//     { name: "Dishant Shah", role: "ML Engineer, Backend Dev" },
//     { name: "Sukumar Soni", role: "Blockchain Dev, Data Analyst" },
//     { name: "Bruno Pegado", role: "Project Manager, Full Stack Dev" },
//   ];

//   return (
//     <>
//       <div className="mx-4 mt-8">
//         {/* <NavBar></NavBar> */}
//         <div className="p-6 sm:p-12">
//           {/* About Section */}
//           <section className="mb-12">
//             <h2 className="text-xl sm:text-2xl font-semibold text-[#6A3A9F] mb-4">
//               About
//             </h2>
//             <div className="bg-[#D9D9D9] rounded-3xl h-48 sm:h-64"></div>
//           </section>

//           {/* Meet the Team Section */}
//           <section>
//             <h2 className="text-xl sm:text-2xl font-semibold text-[#6A3A9F] mb-6">
//               Meet the Team
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
//               {teamMembers.map((member, index) => (
//                 <div className="">
//                   <div
//                     key={index}
//                     className="flex flex-col items-center bg-[#D9D9D9] rounded-3xl h-48 sm:h-56 p-4 "
//                   >
//                     <div className="h-24 w-24 bg-gray-100 rounded-full mb-4"></div>
//                     <h3 className="font-semibold text-lg bg-[#D9D9D9]">{member.name}</h3>
//                     <p className="bg-[#D9D9D9] text-sm">{member.role}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>
//       </div>
//       {/* <Footer></Footer> */}
//     </>
//   );
// };

// export default AboutUs;

// code with animation

import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer.jsx";

const AboutUs = () => {
  const teamMembers = [
    { name: "Ankit Poriya", role: "Frontend Dev, UI/UX Designer", image: "../src/assets/ankit.png"},
    { name: "Dishant Shah", role: "ML Engineer, Backend Dev",image: "path_to_ankit_image.jpg" },
    { name: "Sukumar Soni", role: "Blockchain Dev, Data Analyst",image: "../src/assets/SUKUMAR.jpg" },
    { name: "Bruno Pegado", role: "Project Manager, Full Stack Dev",image: "../src/assets/bruno.jpg" },
  ];

  return (
    <>
      <div className="mx-4 mt-8">
        {/* <NavBar></NavBar> */}
        <div className="p-6 sm:p-12">
          {/* About Section */}
          <section className="mb-12">
            <motion.h2
              className="text-xl sm:text-2xl font-semibold text-[#6A3A9F] mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              About
            </motion.h2>
            <motion.div
              className="bg-[#D9D9D9] rounded-3xl h-48 sm:h-64 p-6 text-lg"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, duration: 0.6 }}
            >
              {/* <p className="bg-[#D9D9D9] text-base sm:text-lg md:text-xl leading-relaxed break-words"> */}
                At our core, we are revolutionizing the way ideas transform into
                captivating videos. Our AI-driven platform simplifies the video
                production process, enabling users to create engaging content
                with just a few clicks. By automating script generation, visual
                content creation, and audio synchronization, we ensure a
                seamless and high-quality video output every time. Our mission
                is to make video creation accessible to everyone, regardless of
                technical expertise. We address the challenges of converting
                text to video efficiently, scaling production, and maintaining
                consistent quality. Through innovative AI solutions, we enhance
                customization, foster greater user engagement, and democratize
                digital media creation for a diverse audience. Join us as we
                redefine the future of video production, making it easier and
                more accessible for creators worldwide.
           
            </motion.div>
          </section>

          {/* Meet the Team Section */}
          <section>
            <motion.h2
              className="text-xl sm:text-2xl font-semibold text-[#6A3A9F] mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Meet the Team
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                  className=""
                >
                  <div className="flex flex-col items-center bg-[#D9D9D9] rounded-3xl h-48 sm:h-56 p-4">
                  <img
                      src={member.image}
                      alt={member.name}
                      className="h-24 w-24 bg-gray-100 rounded-full mb-4 object-cover"
                    />
                    <h3 className="font-semibold text-lg bg-[#D9D9D9]">
                      {member.name}
                    </h3>
                    <p className="bg-[#D9D9D9] text-sm">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </>
  );
};

export default AboutUs;
