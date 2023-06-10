"use client";
import "src/app/globals.css";
import { Images } from "@/core";
import { PrimaryServices, SpecialServices, Testimonials } from "@/contents";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaCaretRight } from "react-icons/fa";
import Image from "next/image";
import { Disclosure, Transition } from "@headlessui/react";
import { Carousel } from "flowbite-react";
import AOS from "aos";
import "aos/dist/aos.css";

// import dynamic from "next/dynamic";
// // @ts-ignore
// const _ = typeof window !== "undefined" && dynamic(import("tw-elements"));
// import { Carousel, Tab, Animate, initTE } from "tw-elements";

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className='double-bg w-screen overflow-hidden'>
      {/* HEADER SECTION */}
      <section
        className='z-20 h-screen w-screen bg-cover bg-center bg-no-repeat flex items-center bg-gray'
        style={{ backgroundImage: `url(${Images.HeaderBg.src})` }}
      >
        <Image
          src={Images.HeaderLeftTriangle}
          alt=''
          className='pr-8 lg:pr-0 absolute w-full lg:w-7/12'
          data-aos='fade-right'
        />
        <Image
          src={Images.HeaderRightTriangle}
          alt=''
          className='hidden md:block absolute top-1/4 right-0 w-full lg:w-1/2'
          data-aos='fade-left'
        />
        <div className='w-full lg:w-7/12 px-4 md:px-12 lg:px-32'>
          <h1
            className='font-montserrat font-extrabold text-xl md:text-3xl lg:text-2xl text-white'
            data-aos='fade-right'
            data-aos-delay='300'
          >
            UNLEASH YOUR EMPLOYEES&apos;
          </h1>
          <h1
            className='font-montserrat font-extrabold text-3xl md:text-6xl lg:text-6xl text-white'
            data-aos='fade-right'
            data-aos-delay='600'
          >
            FULL POTENTIAL,
            <br />
            PRODUCTIVITY,
            <br />& PERFORMANCE
          </h1>
          <h1
            className='font-montserrat font-extrabold text-xl md:text-3xl lg:text-2xl text-transparent text-stroke'
            data-aos='fade-right'
            data-aos-delay='900'
          >
            WITH OUR TAILOR-MADE SPORTS AND WELLNESS PROGRAMS
          </h1>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id='about'
        className='pt-36 w-full lg:h-screen flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:grid-flow-row space gap-10 md:gap-10 lg:gap-20'
      >
        <div className='hidden lg:flex w-1/2 space-x-4'>
          <Image
            src={Images.SportsEvent1}
            alt={"Various sports events"}
            className='object-cover'
            data-aos='fade-right'
            data-aos-delay='600'
          />
          <Image
            src={Images.SportsEvent2}
            alt={"Various sports events"}
            className='object-cover'
            data-aos='fade-right'
            data-aos-delay='300'
          />
          <Image
            src={Images.SportsEvent3}
            alt={"Various sports events"}
            className='object-cover'
            data-aos='fade-right'
          />
        </div>
        <div className='block lg:hidden'>
          <Image
            src={Images.SportsEvent}
            alt={"Various sports events"}
            data-aos='fade-right'
          />
        </div>
        <div className='pr-4 md:pr-8 lg:pr-32 lg:pl-0'>
          <h1
            className='pt-6 lg:pt-0 text-start lg:text-end font-montserrat font-extrabold text-2xl md:text-3xl lg:text-5xl text-white'
            data-aos='fade-up'
          >
            IGNITE PRODUCTIVITY AND PERFORMANCE THROUGH WELLNESS AND SPORTS
            ACTIVITIES
          </h1>
          <p
            className='pt-6 text-start lg:text-end font-montserrat font-normal text-base rounded-sm text-white'
            data-aos='fade-up'
          >
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
      <section id='services' className='px-0 pt-36 w-full'>
        <Image
          src={Images.BodyLeftTriangle}
          alt=''
          className='hidden md:block absolute w-full lg:w-7/12'
          data-aos='fade-right'
          data-aos-delay='300'
        />
        <h1
          className='px-4 md:px-8 lg:px-32 text-center font-montserrat font-extrabold text-2xl md:text-3xl lg:text-5xl text-white'
          data-aos='fade-up'
        >
          PRIMARY SERVICES FOR CORPORATE AND ORGANIZATIONS
        </h1>
        <p
          className='px-4 md:px-8 lg:px-32 mt-8 text-center font-montserrat text-white'
          data-aos='fade-up'
        >
          Ground Zero Company is a pioneering provider of personalized wellness
          and sports activities for UAE companies. Their expert team designs
          tailored programs that promote teamwork, collaboration, and work-life
          balance. By choosing Ground Zero, companies can enhance employee
          well-being, boost morale, and unlock their full potential.
        </p>
        <div className='pt-14'>
          <Carousel className='relative h-auto lg:h-80 w-full overflow-hidden'>
            {PrimaryServices.services.map((service) => {
              return (
                <div
                  key={service.title}
                  className='h-full pl-0 lg:pl-20 shadow bg-gradient-to-br from-darkGray to-neutral-800 relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none'
                >
                  <div className='h-full w-full flex flex-col-reverse justify-end lg:justify-normal lg:grid lg:grid-cols-3 lg:grid-flow-row lg:grid-rows-1'>
                    <div className='md:h-80 lg:h-full lg:col-span-2 p-12'>
                      <h3 className='font-montserrat font-extrabold text-2xl md:text-3xl lg:text-3xl text-transparent text-stroke'>
                        {service.title}
                      </h3>
                      <p className='pr-0 lg:pr-20 pt-6 font-montserrat font-normal text-base rounded-sm text-white'>
                        {service.description}
                      </p>
                    </div>
                    <div className='lg:col-span-1 overflow-hidden'>
                      <Image
                        className='object-cover object-center h-full'
                        src={service.image}
                        alt={service.title}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </section>

      {/* SPECIAL SERVICES SECTION */}
      <section className='px-4 md:px-14 lg:px-32 mt-36 w-full'>
        <Image
          src={Images.BodyRightTriangle}
          alt=''
          className='hidden md:block absolute right-0 w-full lg:w-1/2'
          data-aos='fade-left'
          data-aos-delay='300'
        />
        <h1
          className='text-center font-montserrat font-extrabold text-2xl md:text-4xl lg:text-6xl text-white'
          data-aos='fade-up'
        >
          SPECIAL SERVICES
        </h1>
        <div
          className='pt-14 flex flex-wrap flex-col md:flex-row'
          data-aos='fade-up'
        >
          {SpecialServices.services.map((service) => {
            return (
              <Disclosure key={service.title}>
                {({ open }) => (
                  /* Use the `open` state to conditionally change the direction of an icon. */
                  <div className='w-full md:w-1/2'>
                    <Disclosure.Button className='w-full transition duration-300 px-2 py-2 mb-4 flex items-center bg-gradient-to-r from-black hover:from-white text-xl font-montserrat font-bold text-white hover:text-black text-left'>
                      <FaCaretRight
                        className={open ? "rotate-90 transform mr-2" : "mr-2"}
                      />
                      {service.title}
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
                        {service.description}
                      </Disclosure.Panel>
                    </Transition>
                  </div>
                )}
              </Disclosure>
            );
          })}
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id='services' className='mt-36 w-full'>
        <h1
          className='px-4 md:px-8 lg:px-32 text-center font-montserrat font-extrabold text-2xl md:text-3xl lg:text-5xl text-white'
          data-aos='fade-up'
        >
          WHAT OUR LEGENDS SAY ABOUT US
        </h1>
        <div className='pt-14'>
          {/* Desktop */}
          <Carousel
            className='hidden lg:block relative px-4 md:px-12 lg:px-28 h-auto lg:h-80 w-full overflow-hidden rounded-none'
            indicators={false}
            slideInterval={5000}
          >
            {Testimonials.testimonials.map((testimonial) => {
              return (
                <div
                  key={testimonial.person1}
                  className='px-0 md:px-2 lg:px-4 h-full flex flex-col lg:flex-row space-x-0 lg:space-x-20 space-y-10 lg:space-y-0'
                >
                  <div
                    className='mr-auto w-full lg:w-1/2 flex flex-col lg:grid lg:grid-cols-3 lg:grid-flow-row lg:grid-rows-1 shadow bg-gradient-to-br from-darkGray to-neutral-800 lg:bg-gradient-to-r lg:from-black lg:to-transparent'
                    data-aos='fade-right'
                  >
                    <Image
                      className='object-cover object-center h-full'
                      src={testimonial.image1}
                      alt={testimonial.person1}
                    />
                    <div className='flex flex-col justify-start md:h-80 lg:h-full lg:col-span-2 p-12'>
                      <Image
                        className='absolute right-0 top-0'
                        src={Images.EndQuote}
                        alt=''
                        data-aos='fade-down'
                        data-aos-delay='100'
                      />
                      <h3 className='font-montserrat' data-aos='fade-up'>
                        <span className='font-extrabold text-lg md:text-xl text-white'>
                          {testimonial.person1}
                        </span>
                        <br />
                        <span className='text-sm text-white'>
                          <i>{testimonial.title1}</i>
                        </span>
                      </h3>

                      <p
                        className='pt-6 font-montserrat font-normal text-sm text-white'
                        data-aos='fade-up'
                        data-aos-delay='300'
                      >
                        {testimonial.statement1}
                      </p>
                    </div>
                  </div>
                  <div
                    className='mr-auto w-full lg:w-1/2 flex flex-col lg:grid lg:grid-cols-3 lg:grid-flow-row lg:grid-rows-1 shadow bg-gradient-to-br from-darkGray to-neutral-800 lg:bg-gradient-to-r lg:from-black lg:to-transparent rounded-bl-3xl rounded-tl-3xl'
                    data-aos='fade-left'
                  >
                    <Image
                      className='object-cover object-center h-full'
                      src={testimonial.image2}
                      alt={testimonial.person2}
                    />
                    <div className='flex flex-col justify-start md:h-80 lg:h-full lg:col-span-2 p-12'>
                      <Image
                        className='absolute right-0 top-0'
                        src={Images.EndQuote}
                        alt=''
                        data-aos='fade-down'
                        data-aos-delay='100'
                      />
                      <h3 className='font-montserrat' data-aos='fade-up'>
                        <span className='font-extrabold text-lg md:text-xl text-white'>
                          {testimonial.person2}
                        </span>
                        <br />
                        <span className='text-sm text-white'>
                          <i>{testimonial.title2}</i>
                        </span>
                      </h3>

                      <p
                        className='pt-6 font-montserrat font-normal text-sm text-white'
                        data-aos='fade-up'
                        data-aos-delay='300'
                      >
                        {testimonial.statement2}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
          {/* Mobile to Tablet */}
          <Carousel
            className='lg:hidden px-4 md:px-12 h-auto w-full overflow-hidden rounded-none'
            indicators={false}
            slideInterval={5000}
          >
            {Testimonials.testimonialsMobile.map((testimonial) => {
              return (
                <>
                  <div
                    className='h-full w-full flex flex-col md:grid md:grid-cols-3 md:grid-flow-row md:grid-rows-1 shadow bg-gradient-to-br from-darkGray to-neutral-800'
                    data-aos='fade-right'
                  >
                    <div>
                      <Image
                        className='col-span-1 object-cover object-center h-full'
                        src={testimonial.image}
                        alt={testimonial.person}
                      />
                    </div>

                    <div className='flex flex-col justify-start h-full col-span-2 p-12'>
                      <Image
                        className='absolute right-0 top-0'
                        src={Images.EndQuote}
                        alt=''
                        data-aos='fade-down'
                        data-aos-delay='100'
                      />
                      <h3 className='font-montserrat' data-aos='fade-up'>
                        <span className='font-extrabold text-lg md:text-xl text-white'>
                          {testimonial.person}
                        </span>
                        <br />
                        <span className='text-sm text-white'>
                          <i>{testimonial.title}</i>
                        </span>
                      </h3>

                      <p
                        className='pt-6 font-montserrat font-normal text-sm text-white'
                        data-aos='fade-up'
                        data-aos-delay='300'
                      >
                        {testimonial.statement}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </Carousel>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className='mt-36 w-full flex flex-col md:flex-row'>
        <div
          className='w-full lg:w-1/2 px-4 md:px-14 lg:px-32 py-16  bg-neutral-800'
          data-aos='fade-right'
        >
          <form action='' className='flex flex-col'>
            <h4 className='text-center font-montserrat font-extrabold text-xl md:text-3xl lg:text-2xl text-white'>
              GOT QUESTIONS?
            </h4>
            <p className='font-montserrat font-normal text-center text-base text-white'>
              Feel free to message us and share your thoughts! We’ll gladly
              answer any inquiries.
            </p>
            <label
              className='font-montserrat font-normal text-white mt-4 mb-2'
              htmlFor='name'
              data-aos='fade-up'
            >
              Name:
            </label>
            <input
              className='font-montserrat font-normal text-base rounded-sm'
              type='text'
              name='name'
              placeholder='Type your name'
              data-aos='fade-up'
            />
            <label
              className='font-montserrat font-normal text-white mt-4 mb-2'
              htmlFor='email'
              data-aos='fade-up'
            >
              Email:
            </label>
            <input
              className='font-montserrat font-normal text-base rounded-sm'
              type='text'
              name='email'
              placeholder='Type your email so we can contact you'
              data-aos='fade-up'
            />
            <label
              className='font-montserrat font-normal text-white mt-4 mb-2'
              htmlFor='message'
              data-aos='fade-up'
            >
              Message:
            </label>
            <textarea
              className='font-montserrat font-normal text-base rounded-sm'
              name='message'
              rows={5}
              placeholder='Type your message for us'
              data-aos='fade-up'
            />
            <div className='flex flex-row-reverse mt-4'>
              <button className='transition duration-300 w-full lg:w-auto px-8 py-3 border-2 border-white font-montserrat font-semibold text-sm text-center text-white hover:text-black bg-transparent hover:bg-white rounded-sm'>
                SEND
              </button>
            </div>
          </form>
        </div>
        <div className='w-full lg:w-1/2'>
          <Image
            src={Images.ContactFormBg}
            alt={"Basketball"}
            className='w-full h-full object-cover'
            data-aos='fade-left'
          />
        </div>
      </section>
    </main>
  );
}
