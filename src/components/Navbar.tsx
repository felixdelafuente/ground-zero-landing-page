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
            <Link href='/'>
              <Image src={Images.LogoSm} alt='Ground Zero Logo' height={24} className='my-1' />
            </Link>
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
                  className='transition duration-300 py-6 px-6 text-white lg:hover:text-black bg-transparent lg:hover:bg-gradient-to-t from-white font-montserrat font-bold text-sm'
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href='/sports'
                  className='transition duration-300 py-6 px-6 text-white lg:hover:text-black bg-transparent lg:hover:bg-gradient-to-t from-white font-montserrat font-bold text-sm'
                >
                  SPORTS
                </Link>
              </li>
              <li>
                <Link
                  href='/legends-club'
                  className='transition duration-300 py-6 px-6 text-white lg:hover:text-black bg-transparent lg:hover:bg-gradient-to-t from-white font-montserrat font-bold text-sm'
                >
                  LEGENDS CLUB
                </Link>
              </li>
              <li>
                <Link
                  href='/contact-us'
                  className='transition duration-300 py-6 px-6 text-white lg:hover:text-black bg-transparent lg:hover:bg-gradient-to-t from-white font-montserrat font-bold text-sm'
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}