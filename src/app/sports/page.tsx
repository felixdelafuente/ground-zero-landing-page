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
import { Carousel } from "flowbite-react";
import { PrimaryServices, CompanyImages } from "@/contents";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Sports() {
  return (
    <main className='double-bg w-screen overflow-hidden'>
      {/* HEADER SECTION */}
      <section
        className='z-20 px-4 md:px-12 lg:px-32 mt-16 h-96 w-screen bg-cover bg-center bg-no-repeat flex items-center bg-gray text-center shadow'
        style={{ backgroundImage: `url(${Images.SportsHeaderBg.src})` }}
      >
        <h1
          className='w-full font-montserrat font-extrabold text-center text-3xl md:text-6xl lg:text-6xl text-white'
          data-aos='fade-up'
        >
          SPORTS
        </h1>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className='pt-36 px-4 md:px-8 lg:px-32 w-full'>
        <h1
          className='text-center font-montserrat font-extrabold text-xl md:text-3xl lg:text-3xl text-white'
          data-aos='fade-up'
          data-aos-delay='300'
        >
          GROUND ZERO SPORTS
        </h1>
        <p
          className='mt-8 text-center font-montserrat text-white'
          data-aos='fade-up'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      {/* SPORTS SECTION */}
      <section className='my-16 w-full flex flex-col'>
        <div
          className='mr-auto w-full lg:w-3/4 flex flex-col lg:grid lg:grid-cols-3 lg:grid-flow-row lg:grid-rows-1 shadow bg-gradient-to-br from-darkGray to-neutral-800 lg:bg-gradient-to-r lg:from-black lg:to-transparent'
          data-aos='fade-right'
        >
          <Image
            className='object-cover object-center h-full'
            src={Images.Sports1}
            alt='Basketball'
          />
          <div className='flex flex-col justify-between md:h-80 lg:h-full lg:col-span-2 p-12'>
            <div>
              <h3
                className='font-montserrat font-extrabold text-2xl md:text-3xl lg:text-3xl text-transparent text-stroke'
                data-aos='fade-up'
              >
                LEGENDS BASKETBALL
              </h3>
              <p
                className='pt-6 font-montserrat font-normal text-base rounded-sm text-white'
                data-aos='fade-up'
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul
                className='mt-4 w-full flex flex-wrap flex-col md:flex-row font-montserrat font-normal text-base text-white'
                data-aos='fade-up'
              >
                <li className='w-full md:w-1/2'>Academies</li>
                <li className='w-full md:w-1/2'>Tune-up Games</li>
                <li className='w-full md:w-1/2'>Club Games</li>
              </ul>
            </div>
            <div className='mt-8 flex text-white text-2xl' data-aos='fade-up'>
              <Link href='#' target='_blank' className='px-2'>
                <FaFacebook />
              </Link>
              <Link
                href='https://www.instagram.com/ground_zero_basketball/'
                target='_blank'
                className='px-2'
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
        <div
          className='ml-auto my-16 w-full lg:w-3/4 flex flex-col-reverse lf:flex-col lg:grid lg:grid-cols-3 lg:grid-flow-row lg:grid-rows-1 shadow bg-gradient-to-br from-darkGray to-neutral-800 lg:bg-gradient-to-l lg:from-black lg:to-transparent'
          data-aos='fade-left'
        >
          <div className='flex flex-col justify-between md:h-80 lg:h-full lg:col-span-2 p-12'>
            <div className='text-left lg:text-right'>
              <h3
                className='font-montserrat font-extrabold text-2xl md:text-3xl lg:text-3xl text-transparent text-stroke'
                data-aos='fade-up'
              >
                BUOYANCY SPORTS
              </h3>
              <p
                className='pt-6 font-montserrat font-normal text-base rounded-sm text-white'
                data-aos='fade-up'
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul
                className='mt-4 w-full flex flex-wrap flex-col md:flex-row font-montserrat font-normal text-base text-white'
                data-aos='fade-up'
              >
                <li className='w-full md:w-1/2'>Swimming</li>
                <li className='w-full md:w-1/2'>Scuba Diving</li>
                <li className='w-full md:w-1/2'>Free Diving</li>
                <li className='w-full md:w-1/2'>Paddle Board Stand</li>
                <li className='w-full md:w-1/2'>Fishing</li>
                <li className='w-full md:w-1/2'>Kayaking</li>
              </ul>
            </div>
            <div
              className='mt-8 flex justify-start lg:justify-end text-white text-2xl'
              data-aos='fade-up'
            >
              <Link
                href='https://www.facebook.com/bouyancyuae'
                target='_blank'
                className='px-2'
              >
                <FaFacebook />
              </Link>
              <Link
                href='https://www.instagram.com/bouyancy_uae/'
                target='_blank'
                className='px-2'
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
          <Image
            className='object-cover object-center h-full'
            src={Images.Sports2}
            alt='Swimmer'
          />
        </div>
        <div
          className='mr-auto w-full lg:w-3/4 flex flex-col lg:grid lg:grid-cols-3 lg:grid-flow-row lg:grid-rows-1 shadow bg-gradient-to-br from-darkGray to-neutral-800 lg:bg-gradient-to-r lg:from-black lg:to-transparent'
          data-aos='fade-right'
        >
          <Image
            className='object-cover object-center h-full'
            src={Images.Sports3}
            alt='Zumba'
          />
          <div className='flex flex-col justify-between md:h-80 lg:h-full lg:col-span-2 p-12'>
            <div>
              <h3
                className='font-montserrat font-extrabold text-2xl md:text-3xl lg:text-3xl text-transparent text-stroke'
                data-aos='fade-up'
              >
                FITNESS GROUND
              </h3>
              <p
                className='pr-0 lg:pr-20 pt-6 font-montserrat font-normal text-base rounded-sm text-white'
                data-aos='fade-up'
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul
                className='mt-4 w-full flex flex-wrap flex-col md:flex-row font-montserrat font-normal text-base text-white'
                data-aos='fade-up'
              >
                <li className='w-full md:w-1/2'>Zumba</li>
                <li className='w-full md:w-1/2'>Aerobics</li>
                <li className='w-full md:w-1/2'>Ballet</li>
                <li className='w-full md:w-1/2'>Yoga</li>
                <li className='w-full md:w-1/2'>Pole Dancing</li>
              </ul>
            </div>
            <div className='mt-8 flex text-white text-2xl' data-aos='fade-up'>
              <Link
                href='https://www.facebook.com/fitnessgrounduae/'
                target='_blank'
                className='px-2'
              >
                <FaFacebook />
              </Link>
              <Link
                href='https://www.instagram.com/fitnessground_uae/'
                target='_blank'
                className='px-2'
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
        <div
          className='ml-auto my-16 w-full lg:w-3/4 flex flex-col-reverse lf:flex-col lg:grid lg:grid-cols-3 lg:grid-flow-row lg:grid-rows-1 shadow bg-gradient-to-br from-darkGray to-neutral-800 lg:bg-gradient-to-l lg:from-black lg:to-transparent'
          data-aos='fade-left'
        >
          <div className='flex flex-col justify-between md:h-80 lg:h-full lg:col-span-2 p-12'>
            <div className='text-left lg:text-right'>
              <h3
                className='font-montserrat font-extrabold text-2xl md:text-3xl lg:text-3xl text-transparent text-stroke'
                data-aos='fade-up'
              >
                SPIKE CLUB
              </h3>
              <p
                className='pt-6 font-montserrat font-normal text-base rounded-sm text-white'
                data-aos='fade-up'
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul
                className='mt-4 w-full flex flex-wrap flex-col md:flex-row font-montserrat font-normal text-base text-white'
                data-aos='fade-up'
              >
                <li className='w-full md:w-1/2'>Academies</li>
                <li className='w-full md:w-1/2'>Tune-up Games</li>
                <li className='w-full md:w-1/2'>Club Games</li>
              </ul>
            </div>
            <div
              className='mt-8 flex justify-start lg:justify-end text-white text-2xl'
              data-aos='fade-up'
            >
              <Link
                href='https://www.facebook.com/profile.php?id=100091982333040'
                target='_blank'
                className='px-2'
              >
                <FaFacebook />
              </Link>
              <Link
                href='https://www.instagram.com/ground_zero_volleyball/'
                target='_blank'
                className='px-2'
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
          <Image
            className='object-cover object-center h-full'
            src={Images.Sports4}
            alt='Volleaball'
          />
        </div>
        <div
          className='mr-auto w-full lg:w-3/4 flex flex-col lg:grid lg:grid-cols-3 lg:grid-flow-row lg:grid-rows-1 shadow bg-gradient-to-br from-darkGray to-neutral-800 lg:bg-gradient-to-r lg:from-black lg:to-transparent'
          data-aos='fade-right'
        >
          <Image
            className='object-cover object-center h-full'
            src={Images.Sports5}
            alt='Badminton smash'
          />
          <div className='flex flex-col justify-between md:h-80 lg:h-full lg:col-span-2 p-12'>
            <div>
              <h3
                className='font-montserrat font-extrabold text-2xl md:text-3xl lg:text-3xl text-transparent text-stroke'
                data-aos='fade-up'
              >
                SMASH CLUB
              </h3>
              <p
                className='pt-6 font-montserrat font-normal text-base rounded-sm text-white'
                data-aos='fade-up'
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul
                className='mt-4 w-full flex flex-wrap flex-col md:flex-row font-montserrat font-normal text-base text-white'
                data-aos='fade-up'
              >
                <li className='w-full md:w-1/2'>Academies</li>
                <li className='w-full md:w-1/2'>Tune-up Games</li>
                <li className='w-full md:w-1/2'>Club Games</li>
              </ul>
            </div>
            <div className='mt-8 flex text-white text-2xl' data-aos='fade-up'>
              <Link href='#' target='_blank' className='px-2'>
                <FaFacebook />
              </Link>
              <Link href='#' target='_blank' className='px-2'>
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
