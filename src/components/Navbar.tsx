"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Images } from "@/core";
import Image from "next/image";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className=' w-screen bg-darkGray shadow fixed top-0 z-50'>
      <div className='justify-between mx-4 md:mx-8 lg:mx-24 md:items-center md:flex md:px-8'>
        <div>
          <div className='flex items-center justify-between py-2 md:py-4 md:block'>
            <a href='#'>
              <Image src={Images.LogoSm} alt='Ground Zero Logo' height={36} />
            </a>
            <div className='md:hidden'>
              <button
                className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <FaTimes className='text-white' />
                ) : (
                  <FaBars className='text-white' />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-8 lg:pb-0 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className='items-center justify-center space-y-8 md:flex md:space-y-0'>
              <li>
                <Link
                  href='/'
                  className='py-6 px-6 text-white lg:hover:text-black bg-transparent lg:hover:bg-gradient-to-t from-white font-montserrat font-bold text-sm'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/ground-zero-club'
                  className='py-6 px-6 text-white lg:hover:text-black bg-transparent lg:hover:bg-gradient-to-t from-white font-montserrat font-bold text-sm'
                >
                  Ground Zero Club
                </Link>
              </li>
              {/* <li className='text-white font-montserrat font-bold text-sm'>
                  <Link href='#members'>MEMBERS</Link>
                </li>
                <li className='text-white font-montserrat font-bold text-sm'>
                  <Link href='#sports'>SPORTS</Link>
                </li> */}
              <li>
                <Link
                  href='#team'
                  className='py-6 px-6 text-white lg:hover:text-black bg-transparent lg:hover:bg-gradient-to-t from-white font-montserrat font-bold text-sm'
                >
                  MEET THE TEAM
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

// "use client";
// import React from "react";
// import { FaBars } from "react-icons/fa";
// import { Images } from "@/core";
// import Image from "next/image";

// export default function Navbar() {
//   const [navbarOpen, setNavbarOpen] = React.useState(false);
//   return (
//     <div className='fixed top-0 w-full z-50'>
//       <nav className='sticky h-20 w-full flex flex-wrap items-center justify-between px-2 py-4 bg-gray drop-shadow'>
//         <div className='px-4 mx-10 w-full flex flex-wrap items-center justify-between'>
//           <div className='flex justify-start lg:w-auto'>
//             <a href='#home'>
//               <Image src={Images.LogoSm} alt='Ground Zero Logo' />
//             </a>
//             <button
//               className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
//               type='button'
//               onClick={() => setNavbarOpen(!navbarOpen)}
//             >
//               <FaBars />
//             </button>
//           </div>
//           <div
//             className={
//               "lg:flex flex-grow items-center" +
//               (navbarOpen ? " flex" : " hidden")
//             }
//             id='example-navbar-danger'
//           >
//             <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
//               <li className='nav-item'>
//                 <a
//                   className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
//                   href='#about'
//                 >
//                   <i className='text-montserrat text-5xl text-red-200 opacity-75'></i>
//                   <span className='ml-2'>ABOUT</span>
//                 </a>
//               </li>
//               <li className='nav-item'>
//                 <a
//                   className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
//                   href='#services'
//                 >
//                   <i className='text-lg text-white opacity-75'></i>
//                   <span className='ml-2'>SERVICES</span>
//                 </a>
//               </li>
//               <li className='nav-item'>
//                 <a
//                   className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
//                   href='#coaches'
//                 >
//                   <i className='text-lg text-white opacity-75'></i>
//                   <span className='ml-2'>COACHES</span>
//                 </a>
//               </li>
//               <li className='nav-item'>
//                 <a
//                   className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
//                   href='#sports'
//                 >
//                   <i className='text-lg text-white opacity-75'></i>
//                   <span className='ml-2'>SPORTS</span>
//                 </a>
//               </li>
//               <li className='nav-item'>
//                 <a
//                   className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
//                   href='#team'
//                 >
//                   <i className='text-lg text-white opacity-75'></i>
//                   <span className='ml-2'>TEAM</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }
