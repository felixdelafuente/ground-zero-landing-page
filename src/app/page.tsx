"use client";
import "src/app/globals.css";
import { Images } from "@/core";
import { Company } from "@/contents";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaCaretRight,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";
import { Carousel, Tab, Animate, initTE } from "tw-elements";
import { Disclosure, Transition } from "@headlessui/react";

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    initTE({ Carousel, Tab, Animate });
  }, []);
  return (
    <main className='double-bg w-screen overflow-hidden '>
      {/* NAVIGATION BAR */}
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
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
                <li>
                  <Link
                    href='#about'
                    className='py-6 px-2 text-white hover:text-black bg-transparent hover:bg-gradient-to-t from-white font-montserrat font-bold text-sm'
                  >
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link
                    href='#services'
                    className='py-6 px-2 text-white hover:text-black bg-transparent hover:bg-gradient-to-t from-white font-montserrat font-bold text-sm'
                  >
                    OUR SERVICES
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
                    className='py-6 px-2 text-white hover:text-black bg-transparent hover:bg-gradient-to-t from-white font-montserrat font-bold text-sm'
                  >
                    MEET THE TEAM
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* HEADER SECTION */}
      <section
        className='z-20 px-4 md:px-12 lg:px-32 h-screen w-screen bg-cover bg-center bg-no-repeat flex items-center bg-gray'
        style={{ backgroundImage: `url(${Images.HeaderBg.src})` }}
      >
        <div className='w-full lg:w-2/4 xl:1/3'>
          <h1 className='font-montserrat font-extrabold text-xl md:text-3xl lg:text-2xl text-white'>
            UNLEASH YOUR EMPLOYEES&apos;
          </h1>
          <h1 className='font-montserrat font-extrabold text-3xl md:text-6xl lg:text-6xl text-white'>
            FULL POTENTIAL,
            <br />
            PRODUCTIVITY,
            <br />& PERFORMANCE
          </h1>
          <h1 className='font-montserrat font-extrabold text-xl md:text-3xl lg:text-2xl text-transparent text-stroke'>
            WITH OUR TAILOR-MADE SPORTS AND WELLNESS PROGRAMS
          </h1>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id='about'
        className='pr-4 md:pr-8 lg:pr-32 pt-36 w-full flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:grid-flow-row gap-10 md:gap-10 lg:gap-20'
        data-te-animation-init
        data-te-animation-start='onScroll'
        data-te-animation-on-scroll='repeat'
        data-te-animation-show-on-load='false'
        data-te-animation='[slide-right_1s_ease-in-out]'
      >
        <div className=''>
          <Image src={Images.SportsEvent} alt={"Various sports events"} />
        </div>
        <div className='pl-4 pr-4 md:pl-14 md:pr-14 lg:pr-0 lg:pl-0'>
          <h1 className='pt-6 lg:pt-0 text-start lg:text-end font-montserrat font-extrabold text-2xl md:text-3xl lg:text-5xl text-white'>
            IGNITE PRODUCTIVITY AND PERFORMANCE THROUGH WELLNESS AND SPORTS
            ACTIVITIES
          </h1>
          <p className='pt-6 text-start lg:text-end font-montserrat font-normal text-base text-white'>
            Supercharge your company&apos;s productivity and performance with
            our dynamic sports and wellness program. Through our proven
            strategies and invigorating activities, we empower your team to
            thrive, achieving unparalleled success. Research shows that
            employees who engage in regular physical activities experience a
            remarkable 50% increase in productivity levels.
            <br />
            <br />
            Our tailored program offers a range of activities, fostering
            collaboration and motivation. By investing in our sports and
            wellness program, you create a workplace culture that attracts top
            talent, reduces absenteeism, and saves on healthcare costs. Ignite
            your team&apos;s potential and witness productivity soar to new
            heights.
          </p>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        id='services'
        className='px-0 pt-36 w-full'
        data-te-animation-init
        data-te-animation-start='onScroll'
        data-te-animation-on-scroll='repeat'
        data-te-animation-show-on-load='false'
        data-te-animation='[slide-right_1s_ease-in-out]'
      >
        <h1 className='px-4 md:px-8 lg:px-32 text-center font-montserrat font-extrabold text-2xl md:text-3xl lg:text-5xl text-white'>
          PRIMARY SERVICES FOR CORPORATE AND ORGANIZATIONS
        </h1>
        <p className='px-4 md:px-8 lg:px-32 mt-8 text-center font-montserrat text-white'>
          Ground Zero Company is a pioneering provider of personalized wellness
          and sports activities for UAE companies. Their expert team designs
          tailored programs that promote teamwork, collaboration, and work-life
          balance. By choosing Ground Zero, companies can enhance employee
          well-being, boost morale, and unlock their full potential.
          {/* Discover the unparalleled services of Ground Zero Company, the
          pioneers in personalized and custom-fit wellness and sports activities
          for companies in the UAE. We specialize in tailoring programs that
          cater to the unique needs of your organization, ensuring maximum
          impact and outstanding results. Our expert team designs engaging
          activities that promote teamwork, collaboration, and a healthy
          work-life balance. Whether it&apos;s fitness challenges, team sports,
          mindfulness sessions, or personalized training plans, we have you
          covered. Elevate your company&apos;s well-being, boost employee
          morale, and unlock their full potential with Ground Zero Company.
          Experience the difference personalized wellness and sports activities
          can make for your organization. */}
        </p>
        <div className='pt-14'>
          <div
            id='carouselExampleIndicators'
            className='relative'
            data-te-carousel-init
            data-te-carousel-slide
          >
            {/* Carousel indicators */}
            <div
              className='absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0'
              data-te-carousel-indicators
            >
              <button
                type='button'
                data-te-target='#carouselExampleIndicators'
                data-te-slide-to='0'
                data-te-carousel-active
                className='mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none'
                aria-current='true'
                aria-label='Slide 1'
              ></button>
              <button
                type='button'
                data-te-target='#carouselExampleIndicators'
                data-te-slide-to='1'
                className='mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none'
                aria-label='Slide 2'
              ></button>
              <button
                type='button'
                data-te-target='#carouselExampleIndicators'
                data-te-slide-to='2'
                className='mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none'
                aria-label='Slide 3'
              ></button>
              <button
                type='button'
                data-te-target='#carouselExampleIndicators'
                data-te-slide-to='3'
                className='mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none'
                aria-label='Slide 4'
              ></button>
              <button
                type='button'
                data-te-target='#carouselExampleIndicators'
                data-te-slide-to='4'
                className='mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none'
                aria-label='Slide 5'
              ></button>
              <button
                type='button'
                data-te-target='#carouselExampleIndicators'
                data-te-slide-to='5'
                className='mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none'
                aria-label='Slide 6'
              ></button>
              <button
                type='button'
                data-te-target='#carouselExampleIndicators'
                data-te-slide-to='6'
                className='mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none'
                aria-label='Slide 7'
              ></button>
              <button
                type='button'
                data-te-target='#carouselExampleIndicators'
                data-te-slide-to='7'
                className='mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none'
                aria-label='Slide 1'
              ></button>
            </div>

            {/* Carousel items */}
            <div className="relative h-auto lg:h-80 w-full overflow-hidden after:clear-both after:block after:content-['']">
              {/* Slide 1 */}
              <div
                className='h-full pl-0 lg:pl-20 shadow bg-gradient-to-br from-darkGray to-neutral-800 relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'
                data-te-carousel-item
                data-te-carousel-active
              >
                <div className='h-full w-full flex flex-col-reverse lg:grid lg:grid-cols-3 lg:grid-flow-row lg:grid-rows-1'>
                  <div className='md:h-80 lg:h-full lg:col-span-2 p-12'>
                    <h3 className='font-montserrat font-extrabold text-2xl md:text-3xl lg:text-3xl text-transparent text-stroke'>
                      CORPORATE FITNESS CHALLENGES
                    </h3>
                    <p className='pr-0 lg:pr-20 pt-6 font-montserrat font-normal text-base text-white'>
                      Engage employees in friendly competitions and challenges
                      that promote physical activity and boost motivation. These
                      challenges can include step challenges, weight loss
                      challenges, or team-based fitness competitions.
                    </p>
                  </div>
                  <div className='lg:col-span-1 overflow-hidden'>
                    <Image
                      className='object-cover object-center h-full'
                      src={Images.CarouselSlide1}
                      alt='Sports Events Coverage'
                    />
                  </div>
                </div>
              </div>
              {/* Slide 2 */}
              <div
                className='h-full pl-0 lg:pl-20 shadow bg-gradient-to-br from-darkGray to-neutral-800 relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'
                data-te-carousel-item
              >
                <div className='h-full w-full flex flex-col-reverse lg:grid lg:grid-cols-3 lg:grid-flow-row lg:grid-rows-1'>
                  <div className='md:h-80 lg:h-full lg:col-span-2 p-12'>
                    <h3 className='font-montserrat font-extrabold text-2xl md:text-3xl lg:text-3xl text-transparent text-stroke'>
                      WELLNESS WORKSHOPS
                    </h3>
                    <p className='pr-0 lg:pr-20 pt-6 font-montserrat font-normal text-base text-white'>
                      Conduct educational workshops on topics such as stress
                      management, nutrition, mindfulness, and work-life balance.
                      These workshops provide valuable insights and practical
                      strategies for employees to enhance their overall
                      well-being.
                    </p>
                  </div>
                  <div className='lg:col-span-1 overflow-hidden'>
                    <Image
                      className='object-cover object-center h-full'
                      src={Images.CarouselSlide2}
                      alt='Race & Timing Management'
                    />
                  </div>
                </div>
              </div>
              {/* Slide 3 */}
              <div
                className='h-full pl-0 lg:pl-20 shadow bg-gradient-to-br from-darkGray to-neutral-800 relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'
                data-te-carousel-item
              >
                <div className='h-full w-full flex flex-col-reverse lg:grid lg:grid-cols-3 lg:grid-flow-row lg:grid-rows-1'>
                  <div className='md:h-80 lg:h-full lg:col-span-2 p-12'>
                    <h3 className='font-montserrat font-extrabold text-2xl md:text-3xl lg:text-3xl text-transparent text-stroke'>
                      GROUP EXERCISE CLASSES
                    </h3>
                    <p className='pr-0 lg:pr-20 pt-6 font-montserrat font-normal text-base text-white'>
                      Offer a variety of fitness classes tailored to different
                      fitness levels and preferences. Options can include yoga,
                      pilates, Zumba, HIIT (high-intensity interval training),
                      and strength training. These classes promote physical
                      fitness and create a sense of community among employees.
                    </p>
                  </div>
                  <div className='lg:col-span-1 overflow-hidden'>
                    <Image
                      className='object-cover object-center h-full'
                      src={Images.CarouselSlide3}
                      alt='Public Leagues & Sports Competition'
                    />
                  </div>
                </div>
              </div>
              {/* Slide 4 */}
              <div
                className='h-full pl-0 lg:pl-20 shadow bg-gradient-to-br from-darkGray to-neutral-800 relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'
                data-te-carousel-item
              >
                <div className='h-full w-full flex flex-col-reverse lg:grid lg:grid-cols-3 lg:grid-flow-row lg:grid-rows-1'>
                  <div className='md:h-80 lg:h-full lg:col-span-2 p-12'>
                    <h3 className='font-montserrat font-extrabold text-2xl md:text-3xl lg:text-3xl text-transparent text-stroke'>
                      SPORTS LEAGUES AND TOURNAMENTS
                    </h3>
                    <p className='pr-0 lg:pr-20 pt-6 font-montserrat font-normal text-base text-white'>
                      Organize sports leagues and tournaments that allow
                      employees to participate in friendly competitions. Popular
                      options include football (soccer), basketball, volleyball,
                      and cricket. These activities promote teamwork,
                      camaraderie, and a healthy competitive spirit.
                    </p>
                  </div>
                  <div className='lg:col-span-1 overflow-hidden'>
                    <Image
                      className='object-cover object-center h-full'
                      src={Images.CarouselSlide4}
                      alt='Sports Club Management'
                    />
                  </div>
                </div>
              </div>
              {/* Slide 5 */}
              <div
                className='h-full pl-0 lg:pl-20 shadow bg-gradient-to-br from-darkGray to-neutral-800 relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'
                data-te-carousel-item
              >
                <div className='h-full w-full flex flex-col-reverse lg:grid lg:grid-cols-3 lg:grid-flow-row lg:grid-rows-1'>
                  <div className='md:h-80 lg:h-full lg:col-span-2 p-12'>
                    <h3 className='font-montserrat font-extrabold text-2xl md:text-3xl lg:text-3xl text-transparent text-stroke'>
                      WELLNESS CHALLENGES AND INCENTIVE PROGRAMS
                    </h3>
                    <p className='pr-0 lg:pr-20 pt-6 font-montserrat font-normal text-base text-white'>
                      Implement wellness challenges and incentive programs to
                      encourage employees to adopt healthy habits. These
                      programs can include tracking steps, achieving fitness
                      goals, or practicing mindfulness. Rewarding participants
                      with incentives further motivates them to prioritize their
                      well-being.
                    </p>
                  </div>
                  <div className='lg:col-span-1 overflow-hidden'>
                    <Image
                      className='object-cover object-center h-full'
                      src={Images.CarouselSlide5}
                      alt='Corporate Sports & Internal Events'
                    />
                  </div>
                </div>
              </div>
              {/* Slide 6 */}
              <div
                className='h-full pl-0 lg:pl-20 shadow bg-gradient-to-br from-darkGray to-neutral-800 relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'
                data-te-carousel-item
              >
                <div className='h-full w-full flex flex-col-reverse lg:grid lg:grid-cols-3 lg:grid-flow-row lg:grid-rows-1'>
                  <div className='md:h-80 lg:h-full lg:col-span-2 p-12'>
                    <h3 className='font-montserrat font-extrabold text-2xl md:text-3xl lg:text-3xl text-transparent text-stroke'>
                      ON-SITE WELLNESS EVENTS
                    </h3>
                    <p className='pr-0 lg:pr-20 pt-6 font-montserrat font-normal text-base text-white'>
                      Host on-site wellness events such as health fairs,
                      wellness expos, and health screenings. These events
                      provide employees with access to valuable resources,
                      information, and services related to their health and
                      well-being.
                    </p>
                  </div>
                  <div className='lg:col-span-1 overflow-hidden'>
                    <Image
                      className='object-cover object-center h-full'
                      src={Images.CarouselSlide6}
                      alt='Sports Facility Management'
                    />
                  </div>
                </div>
              </div>
              {/* Slide 7 */}
              <div
                className='h-full pl-0 lg:pl-20 shadow bg-gradient-to-br from-darkGray to-neutral-800 relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'
                data-te-carousel-item
              >
                <div className='h-full w-full flex flex-col-reverse lg:grid lg:grid-cols-3 lg:grid-flow-row lg:grid-rows-1'>
                  <div className='md:h-80 lg:h-full lg:col-span-2 p-12'>
                    <h3 className='font-montserrat font-extrabold text-2xl md:text-3xl lg:text-3xl text-transparent text-stroke'>
                      PERSONALIZED TRAINING PLANS
                    </h3>
                    <p className='pr-0 lg:pr-20 pt-6 font-montserrat font-normal text-base text-white'>
                      Offer personalized training plans tailored to individual
                      employee needs and goals. These plans can include fitness
                      assessments, one-on-one coaching sessions, and customized
                      workout routines to help employees achieve their desired
                      fitness levels.
                    </p>
                  </div>
                  <div className='lg:col-span-1 overflow-hidden'>
                    <Image
                      src={Images.CarouselSlide7}
                      alt='Sports Academy'
                      className='object-cover object-center h-full'
                    />
                  </div>
                </div>
              </div>
              {/* Slide 8 */}
              <div
                className='h-full pl-0 lg:pl-20 shadow bg-gradient-to-br from-darkGray to-neutral-800 relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'
                data-te-carousel-item
              >
                <div className='h-full w-full flex flex-col-reverse lg:grid lg:grid-cols-3 lg:grid-flow-row lg:grid-rows-1'>
                  <div className='md:h-80 lg:h-full lg:col-span-2 p-12'>
                    <h3 className='font-montserrat font-extrabold text-2xl md:text-3xl lg:text-3xl text-transparent text-stroke'>
                      EMPLOYEE ASSISTANCE PROGRAMS (EAP)
                    </h3>
                    <p className='pr-0 lg:pr-20 pt-6 font-montserrat font-normal text-base text-white'>
                      Implement wellness challenges and incentive programs to
                      encourage employees to adopt healthy habits. These
                      programs can include tracking steps, achieving fitness
                      goals, or practicing mindfulness. Rewarding participants
                      with incentives further motivates them to prioritize their
                      well-being.
                    </p>
                  </div>
                  <div className='lg:col-span-1 overflow-hidden'>
                    <Image
                      className='object-cover object-center h-full'
                      src={Images.CarouselSlide8}
                      alt='Professional Athlete coaching'
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel controls - prev item */}
            <button
              className='absolute bottom-0 left-0 top-0 z-[1] flex w-[5%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none'
              type='button'
              data-te-target='#carouselExampleIndicators'
              data-te-slide='prev'
            >
              <span className='inline-block h-8 w-8'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M15.75 19.5L8.25 12l7.5-7.5'
                  />
                </svg>
              </span>
              <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
                Previous
              </span>
            </button>
            {/* Carousel controls - next item */}
            <button
              className='absolute bottom-0 right-0 top-0 z-[1] flex w-[5%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none'
              type='button'
              data-te-target='#carouselExampleIndicators'
              data-te-slide='next'
            >
              <span className='inline-block h-8 w-8'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M8.25 4.5l7.5 7.5-7.5 7.5'
                  />
                </svg>
              </span>
              <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
                Next
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* FITNESS SPORTS SECTION */}
      <section className='px-4 md:px-14 lg:px-32 mt-36 w-full'>
        <h1 className='text-center font-montserrat font-extrabold text-2xl md:text-4xl lg:text-6xl text-white'>
          SPECIAL SERVICES
        </h1>
        <div className='pt-14 flex flex-col md:flex-row'>
          <div className='w-full md:w-1/2 mr-0 md:mr-4'>
            <Disclosure>
              {({ open }) => (
                /* Use the `open` state to conditionally change the direction of an icon. */
                <>
                  <Disclosure.Button className='w-full px-2 py-2 mb-4 flex items-center bg-gradient-to-r from-black hover:from-white  text-xl font-montserrat font-bold text-white hover:text-black text-left'>
                    <FaCaretRight
                      className={open ? "rotate-90 transform mr-2" : "mr-2"}
                    />
                    SPORTS ACADEMY
                  </Disclosure.Button>
                  <Transition
                    enter='transition duration-100 ease-out'
                    enterFrom='transform scale-95 opacity-0'
                    enterTo='transform scale-100 opacity-100'
                    leave='transition duration-75 ease-out'
                    leaveFrom='transform scale-100 opacity-100'
                    leaveTo='transform scale-95 opacity-0'
                  >
                    <Disclosure.Panel className='px-8 mb-8 text-white text-base font-montserrat'>
                      Our sports academy offers specialized training programs
                      for childrens, youth, females and males in various sports,
                      including basketball, football, volleyball, tennis, and
                      more. Our experienced memberes provide personalized
                      coaching to young athletes of all skill levels, helping
                      them to improve their techniques and develop their
                      physical abilities. We also offer academic support in the
                      form of tutoring and homework assistance.
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                /* Use the `open` state to conditionally change the direction of an icon. */
                <>
                  <Disclosure.Button className='w-full px-2 py-2 mb-4 flex items-center bg-gradient-to-r from-black hover:from-white  text-xl font-montserrat font-bold text-white hover:text-black text-left'>
                    <FaCaretRight
                      className={open ? "rotate-90 transform mr-2" : "mr-2"}
                    />
                    LEAGUES FOR SCHOOLS, UNIVERISTIES & ACADEMIES
                  </Disclosure.Button>
                  <Transition
                    enter='transition duration-100 ease-out'
                    enterFrom='transform scale-95 opacity-0'
                    enterTo='transform scale-100 opacity-100'
                    leave='transition duration-75 ease-out'
                    leaveFrom='transform scale-100 opacity-100'
                    leaveTo='transform scale-95 opacity-0'
                  >
                    <Disclosure.Panel className='px-8 mb-8 text-white text-base font-montserrat'>
                      We organize leagues for schools, universities, and
                      academies, providing a platform for young athletes to
                      compete against each other and showcase their skills. Our
                      leagues are designed to promote healthy competition and
                      sportsmanship, and we ensure that all matches are
                      conducted in a safe and fair manner.
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                /* Use the `open` state to conditionally change the direction of an icon. */
                <>
                  <Disclosure.Button className='w-full px-2 py-2 mb-4 flex items-center bg-gradient-to-r from-black hover:from-white  text-xl font-montserrat font-bold text-white hover:text-black text-left'>
                    <FaCaretRight
                      className={open ? "rotate-90 transform mr-2" : "mr-2"}
                    />
                    ORGANIZING PUBLIC EVENTS
                  </Disclosure.Button>
                  <Transition
                    enter='transition duration-100 ease-out'
                    enterFrom='transform scale-95 opacity-0'
                    enterTo='transform scale-100 opacity-100'
                    leave='transition duration-75 ease-out'
                    leaveFrom='transform scale-100 opacity-100'
                    leaveTo='transform scale-95 opacity-0'
                  >
                    <Disclosure.Panel className='px-8 mb-8 text-white text-base font-montserrat'>
                      We organize public events, including sports festivals,
                      charity events, and races. Our events are designed to
                      bring communities together and promote a healthy and
                      active lifestyle. We ensure that our events are accessible
                      to all, regardless of their skill level or experience.
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
          <div className='w-full md:w-1/2 mr-0 md:mr-4'>
            <Disclosure>
              {({ open }) => (
                /* Use the `open` state to conditionally change the direction of an icon. */
                <>
                  <Disclosure.Button className='w-full px-2 py-2 mb-4 flex items-center bg-gradient-to-r from-black hover:from-white  text-xl font-montserrat font-bold text-white hover:text-black text-left'>
                    <FaCaretRight
                      className={open ? "rotate-90 transform mr-2" : "mr-2"}
                    />
                    RACE TIMING & MANAGEMENT
                  </Disclosure.Button>
                  <Transition
                    enter='transition duration-100 ease-out'
                    enterFrom='transform scale-95 opacity-0'
                    enterTo='transform scale-100 opacity-100'
                    leave='transition duration-75 ease-out'
                    leaveFrom='transform scale-100 opacity-100'
                    leaveTo='transform scale-95 opacity-0'
                  >
                    <Disclosure.Panel className='px-8 mb-8 text-white text-base font-montserrat'>
                      We provide race timing and management services for
                      running, cycling, and triathlon events. Our
                      state-of-the-art timing equipment and experienced team
                      ensure that our races are conducted safely and
                      efficiently, with accurate timing and results.
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure>
              {({ open }) => (
                /* Use the `open` state to conditionally change the direction of an icon. */
                <>
                  <Disclosure.Button className='w-full px-2 py-2 mb-4 flex items-center bg-gradient-to-r from-black hover:from-white  text-xl font-montserrat font-bold text-white hover:text-black text-left'>
                    <FaCaretRight
                      className={open ? "rotate-90 transform mr-2" : "mr-2"}
                    />
                    PERFORMANCE COACHING / PERSONAL COACHING
                  </Disclosure.Button>
                  <Transition
                    enter='transition duration-100 ease-out'
                    enterFrom='transform scale-95 opacity-0'
                    enterTo='transform scale-100 opacity-100'
                    leave='transition duration-75 ease-out'
                    leaveFrom='transform scale-100 opacity-100'
                    leaveTo='transform scale-95 opacity-0'
                  >
                    <Disclosure.Panel className='px-8 mb-8 text-white text-base font-montserrat'>
                      Unlock your true potential with Ground Zero&apos;s
                      performance coaching expertise tailored specifically for
                      employees of organizations. Our highly skilled memberes
                      specialize in optimizing performance in areas such as
                      sports, career, and personal endeavors, guiding you to
                      overcome obstacles, set meaningful goals, and achieve
                      exceptional results. Experience the transformative power
                      of our tailored performance coaching services and embark
                      on a journey of personal and professional growth.coaching
                      aimed at improving an individual&apos;s performance in a
                      specific area, such as sports, career, or personal
                      endeavors. The member helps identify areas for
                      improvement, sets goals, and provides guidance and support
                      to optimize performance.
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section
        id='team'
        className='px-4 md:px-14 lg:px-32 pt-36 w-full'
        data-te-animation-init
        data-te-animation-start='onScroll'
        data-te-animation-on-scroll='repeat'
        data-te-animation-show-on-load='false'
        data-te-animation='[slide-right_1s_ease-in-out]'
      >
        <h1 className='text-center font-montserrat font-extrabold text-2xl md:text-4xl lg:text-6xl text-white'>
          MEET THE TEAM
        </h1>
        <div className='pt-14 flex flex-wrap justify-center'>
          {Company.members.map((member) => {
            return (
              <div
                key={member.name}
                className='w-auto px-8 py-4 flex flex-col justify-center items-center'
              >
                <Image
                  src={member.profile.src}
                  alt={`${member.name}`}
                  height={128}
                  width={128}
                />
                <h4 className='pt-2 font-montserrat font-extrabold text-base text-center text-white'>
                  {member.name}
                </h4>
                <p className='font-montserrat font-normal text-sm text-center text-white'>
                  {member.position}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FOOTER */}
      <footer className='px-4 md:px-14 lg:px-32 mt-36 w-full bg-gradient-to-t from-black'>
        <div className='pt-24 flex flex-col items-center justify-center'>
          <a href='#'>
            <Image src={Images.LogoMd} alt='Ground Zero Logo' height={136} />
          </a>
          <p className='mt-6 font-montserrat text-white text-sm text-center'>
            UNLEASH YOUR EMPLOYEES&apos; FULL POTENTIAL, PRODUCTIVITY, &
            PERFORMANCE <br /> WITH OUR TAILOR-MADE SPORTS AND WELLNESS PROGRAMS
          </p>
          <div className='mt-6 mb-24 flex text-white text-2xl'>
            <a href='#' className='px-2'>
              <FaFacebook />
            </a>
            <a href='#' className='px-2'>
              <FaTwitter />
            </a>
            <a href='#' className='px-2'>
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
