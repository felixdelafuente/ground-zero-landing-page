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

export default function ContactUs() {
  return (
    <main className='double-bg w-screen overflow-hidden'>
      {/* HEADER SECTION */}
      <section
        className='z-20 px-4 md:px-12 lg:px-32 mt-16 h-96 w-screen bg-cover bg-center bg-no-repeat flex items-center bg-gray text-center shadow'
        style={{ backgroundImage: `url(${Images.ContactUsHeaderBg.src})` }}
      >
        <h1
          className='w-full font-montserrat font-extrabold text-center text-3xl md:text-6xl lg:text-6xl text-white'
          data-aos='fade-up'
        >
          CONTACT US
        </h1>
      </section>

      {/* ABOUT US SECTION */}
      <section id='services' className='pt-36 px-4 md:px-8 lg:px-32 w-full'>
        <h1
          className='text-center font-montserrat font-extrabold text-xl md:text-3xl lg:text-3xl text-white'
          data-aos='fade-up'
          data-aos-delay='300'
        >
          WHAT IS GROUND ZERO?
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
        <div className='pt-14 h-auto lg:h-screen'>
          <Carousel className='relative w-full h-full md:h-1/3 lg:h-3/4'>
            {CompanyImages.images.map((image) => {
              return (
                <Image
                  key={image.alt}
                  src={image.image}
                  alt={image.alt}
                  className='w-full h-full object-cover'
                />
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
