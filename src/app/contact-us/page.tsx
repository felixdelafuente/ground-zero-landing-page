"use client";
import "src/app/globals.css";
import { Images } from "@/core";
import Divider from "../../components/Navbar";
import { FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { CompanyMembers } from "@/contents";
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
          Is a nurturing organization and community for sports enthusiast. Build
          to provide 360 wellness and sports activities to its members. Our
          mission is to ignite spirits and empower legends through 360 wellness
          and sports activities, transforming individuals into extraordinary
          beings of character and achievement. With a focus on values and growth
          mindset, we enable our members to surpass limits, conquer challenges,
          and leave a legendary legacy.
        </p>
        <div className='pt-14 h-96 lg:h-screen' data-aos='fade-up'>
          <Carousel className='relative w-full h-full lg:h-3/4'>
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
          <div className='flex flex-col items-center'>
            <h4 className='text-center font-montserrat font-extrabold text-xl md:text-3xl lg:text-2xl text-white'>
              GOT QUESTIONS?
            </h4>
            <p className='font-montserrat font-normal text-center text-base text-white'>
              Feel free to message us and share your thoughts! We’ll gladly
              answer any inquiries.
            </p>
            <Image
              src={Images.QRCode}
              alt={"https://forms.office.com/r/WrQDsc0UBi"}
              className='mt-4 h-full w-full lg:h-72 lg:w-72'
              data-aos='fade-right'
            />
            <p className='mt-4 font-montserrat font-normal text-center text-base text-white'>
              You can call us at <u>+971 56 430 8379</u> or email us at <u>play@verzuzmatch.com</u>.
            </p>
          </div>
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
