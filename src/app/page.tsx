// "use client"

// import React from 'react'
// import Image from 'next/image';
// import { motion } from 'framer-motion'; 
// import HeroSectionImage from '../app/public/ai.png';

// export default function page() {

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 1 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
//   };

  
//       {/* Hero Section */}
//       <motion.div
//         id="home"
//         className="w-full h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-pink-300 via-purple-300 to-purple-400 px-4"
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//       >
//         <motion.div>
//           hello world
//         </motion.div>
//         <motion.div className="w-full lg:w-[50%] text-white text-center lg:text-left" variants={fadeInUp}>
//           <h1 className="text-4xl lg:text-5xl font-bold mb-4">Hi There! 👋🏻</h1>
//           <p className="text-lg lg:text-xl mb-6">Welcome to my Portfolio 🌐</p>
//           <h1 className="text-5xl lg:text-6xl font-extrabold">I am Bushra Ali</h1>
//           <h2 className="text-2xl lg:text-3xl font-medium mt-2">Front-End Developer</h2>
//         </motion.div>
//         <motion.div className="mt-8 lg:ml-10" variants={fadeInUp}>
//           <Image
//             width={300}
//             height={300}
//             src={HeroSectionImage}
//             alt="profile image"
//             className="border-4 border-white rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
//           />
//         </motion.div>
//       </motion.div>

    
  
// }
'use client';

import React, { useState } from 'react';
import Image from 'next/image'; // Import Image component from 'next/image'
import ai from "../app/public/ai.png"; // Assuming the image is in the public folder

export default function App() {
  // State for dropdown visibility
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (<div className='min-h-max w-screen min-w-full 
                bg-gradient-to-r from-pink-400 to-rose-500
                sm:bg-gradient-to-r sm:from-pink-400 sm:to-rose-300
                md:bg-gradient-to-r md:from-yellow-400 md:to-orange-500
                lg:bg-gradient-to-r lg:from-pink-400 lg:to-rose-500
                absolute bg-cover'>
 
    
      {/* Dropdown Section */}
      <div className="w-full">
        {/* Dropdown Button */}
        <button 
          className="w-full text-center text-3xl lg:text-2xl font-serif shadow-md shadow-rose-400 mb-4 px-4 rounded-2xl bg-gradient-to-r from-pink-400 to-rose-300"
          onClick={toggleDropdown}
        >
          Hi There! 👋🏻
        </button>

        {/* Dropdown Content */}
        {isOpen && (
          <div className="text-3xl lg:text-2xl font-serif shadow-md mb-4 px-4 rounded-2xl">
            <h1 className="text-3xl lg:text-2xl font-serif mb-4 px-4">Hi There! 👋🏻</h1>
            <p className="text-3xl lg:text-2xl font-serif mb-4 px-4">
              I'm Bushra Ali ...
            </p>
          </div>
        )}
      </div>

      {/* Welcome Message */}
      <br />
      <div className='text-4xl lg:text-6xl bg-gradient-to-r from-pink-400 to-rose-500 rounded-xl font-serif  px-4 py-2 shadow-2xl shadow-rose-300 animate-bounce'>
        Welcome To My Portfolio
      </div>
      
      <br />
      <br />
      <br />
      <br />
      
      {/* The Full Stack Developer */}
      <p className="text-3xl lg:text-2xl bg-gradient-to-r from-pink-400 to-rose-500 shadow-2xl shadow-rose-800 rounded-xl font-serif mb-4 px-4">
        The Full Stack Developer
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      
      {/* Image of AI */}
      <div className=" flex justify-center mt-8 lg:ml-10">
        <Image
          width={300}
          height={300}
          src={ai}
          alt="ai"
          className="items-center justify-center border-4 border-rose-950 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
        />
      </div>
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      {/* Footer */}
      <footer>
        <p className='text-black flex font-sans text-sm text-center justify-center items-end'>
                Copyright © 2024 This Portfolio. All rights reserved.
        </p>
      </footer>
    </div>
  );
}


