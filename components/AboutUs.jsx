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
    { name: "Ankit Poriya", role: "Frontend Dev, UI/UX Designer" },
    { name: "Dishant Shah", role: "ML Engineer, Backend Dev" },
    { name: "Sukumar Soni", role: "Blockchain Dev, Data Analyst" },
    { name: "Bruno Pegado", role: "Project Manager, Full Stack Dev" },
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
              className="bg-[#D9D9D9] rounded-3xl h-48 sm:h-64"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, duration: 0.6 }}
            ></motion.div>
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
                  transition={{ type: "spring", stiffness: 100, duration: 0.6, delay: index * 0.2 }}
                  className=""
                >
                  <div className="flex flex-col items-center bg-[#D9D9D9] rounded-3xl h-48 sm:h-56 p-4">
                    <div className="h-24 w-24 bg-gray-100 rounded-full mb-4"></div>
                    <h3 className="font-semibold text-lg bg-[#D9D9D9]">{member.name}</h3>
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
