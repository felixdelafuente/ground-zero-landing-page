"use client";
import "src/app/globals.css";
import { Images } from "@/core";
import Divider from "../../components/Navbar";
import { FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Partners } from "@/contents";
import { Tooltip } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function GroundZeroClub() {
  return (
    <main className='double-bg w-screen overflow-hidden'>
      {/* HEADER SECTION */}
      <section
        className='z-20 px-4 md:px-12 lg:px-32 mt-16 h-96 w-screen bg-cover bg-center bg-no-repeat flex items-center bg-gray text-center shadow'
        style={{ backgroundImage: `url(${Images.GroundZeroClubHeaderBg.src})` }}
      >
        <h1
          className='w-full font-montserrat font-extrabold text-center text-3xl md:text-6xl lg:text-6xl text-white'
          data-aos='fade-up'
        >
          GROUND ZERO CLUB
        </h1>
      </section>

      {/* PARTNERS SECTION */}
      <section className='px-4 md:px-8 lg:px-32 pt-36 w-full flex flex-col'>
        <h1
          className='text-center font-montserrat font-extrabold text-xl md:text-3xl lg:text-3xl text-white'
          data-aos='fade-up'
          data-aos-delay='300'
        >
          MEET OUR PARTNERS
        </h1>
        <div className='mt-14 w-full flex flex-wrap items-center justify-center'>
          {Partners.partners.map((partner) => {
            return (
              <div
                key={partner.name}
                className='flex justify-center items-center w-full md:w-auto mx-0 my-4 md:m-4 lg:m-8'
                data-aos='fade-up'
              >
                <Tooltip
                  content={partner.name}
                  placement='bottom'
                  style='light'
                >
                  <Link href={partner.link} target='_blank'>
                    <Image
                      src={partner.logo.src}
                      alt={partner.name}
                      width={128}
                      height={128}
                    />
                  </Link>
                </Tooltip>
              </div>
            );
          })}
        </div>
      </section>

      {/* BE A MEMBER SECTION */}
      <section className='px-4 md:px-8 lg:px-32 pt-36 w-full flex flex-col'>
        <h1
          className='text-center font-montserrat font-extrabold text-xl md:text-3xl lg:text-3xl text-white'
          data-aos='fade-up'
        >
          Choose the membership type that&apos;s right for you
        </h1>
        <div className='mt-14 w-full flex flex-col lg:flex-row space-x-0 lg:space-x-20 space-y-10 lg:space-y-0 items-center justify-center'>
          <div
            className='transition duration-300 w-full lg:w-96 p-8 bg-gradient-to-br from-neutral-700 to-neutral-500 shadow hover:shadow-lg -translate-y-0 hover:-translate-y-2 rounded-sm'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <h3 className='font-montserrat font-bold text-2xl text-white'>
              Membership Type
            </h3>
            <p className='pt-2 font-montserrat font-normal text-base text-neutral-300'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h2 className='py-6 font-montserrat font-bold text-4xl text-white'>
              Free
            </h2>
            <button className='transition duration-300 w-full px-8 py-3 border-2 border-white font-montserrat font-semibold text-sm text-center text-white hover:text-black bg-transparent hover:bg-white rounded-sm'>
              REGISTER AS MEMBER
            </button>
            <ul className='pt-4 font-montserrat font-normal text-base text-white'>
              <li className='flex items-center py-2'>
                <FaCheckCircle className='mr-4 -mt-1 text-green-500' /> Sample
                benefit placeholder
              </li>
              <li className='flex items-center py-2'>
                <FaCheckCircle className='mr-4 -mt-1 text-green-500' /> Sample
                benefit placeholder
              </li>
              <li className='flex items-center py-2'>
                <FaCheckCircle className='mr-4 -mt-1 text-green-500' /> Sample
                benefit placeholder
              </li>
              <li className='flex items-center py-2'>
                <FaCheckCircle className='mr-4 -mt-1 text-green-500' /> Sample
                benefit placeholder
              </li>
              <li className='flex items-center py-2'>
                <FaCheckCircle className='mr-4 -mt-1 text-green-500' /> Sample
                benefit placeholder
              </li>
            </ul>
          </div>
          <div
            className='transition duration-300 w-full lg:w-96 p-8 bg-gradient-to-br from-neutral-200 to-white shadow hover:shadow-lg -translate-y-0 hover:-translate-y-2 rounded-sm'
            data-aos='fade-up'
            data-aos-delay='600'
          >
            <h3 className='font-montserrat font-bold text-2xl text-black'>
              Membership Type
            </h3>
            <p className='pt-2 font-montserrat font-normal text-base text-neutral-700'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h2 className='py-6 font-montserrat font-bold text-4xl text-black'>
              $9.99
            </h2>
            <button className='transition duration-300 w-full px-8 py-3 border-2 border-black font-montserrat font-semibold text-sm text-center text-white hover:text-black bg-black hover:bg-transparent rounded-sm'>
              REGISTER AS MEMBER
            </button>
            <ul className='pt-4 font-montserrat font-normal text-base text-black'>
              <li className='flex items-center py-2'>
                <FaCheckCircle className='mr-4 -mt-1 text-green-500' /> Sample
                benefit placeholder
              </li>
              <li className='flex items-center py-2'>
                <FaCheckCircle className='mr-4 -mt-1 text-green-500' /> Sample
                benefit placeholder
              </li>
              <li className='flex items-center py-2'>
                <FaCheckCircle className='mr-4 -mt-1 text-green-500' /> Sample
                benefit placeholder
              </li>
              <li className='flex items-center py-2'>
                <FaCheckCircle className='mr-4 -mt-1 text-green-500' /> Sample
                benefit placeholder
              </li>
              <li className='flex items-center py-2'>
                <FaCheckCircle className='mr-4 -mt-1 text-green-500' /> Sample
                benefit placeholder
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className='mt-32' />
    </main>
  );
}
