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

export default function LegendsClub() {
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
          LEGENDS CLUB
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
                      width={96}
                      height={96}
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
            className='transition duration-300 w-full lg:w-96 p-8 bg-gradient-to-br from-neutral-700 to-neutral-500 shadow hover:shadow-lg -translate-y-0 hover:-translate-y-2 rounded'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <h3 className='font-montserrat font-bold text-2xl text-white'>
              Gold Legend
            </h3>
            <p className='pt-2 font-montserrat font-normal text-base text-white'>
              Experience the basic benefits of being a Gold member of Ground
              Zero Sports that will give value for your money.
            </p>
            <h2 className='pt-6 font-montserrat'>
              <span className='font-bold text-4xl text-white  '>10 AED</span>{" "}
              <span className='font-normal text-base text-neutral-300'>
                / month
              </span>
            </h2>
            <h2 className='pb-6 font-montserrat'>
              <span className='font-normal text-sm text-neutral-300'>
                96 AED / annually
              </span>
            </h2>
            <button className='transition duration-300 w-full px-8 py-3 border-2 border-white font-montserrat font-semibold text-sm text-center text-white hover:text-black bg-transparent hover:bg-white rounded'>
              BE A LEGEND
            </button>
            <ul className='pt-4 font-montserrat font-normal text-sm text-white'>
              <li className='flex items-start py-2'>
                <FaCheckCircle className='w-1/12 mt-1 text-green-500' />
                <p className='w-11/12'>
                  1 Free access to any program of ground zero
                </p>
              </li>
              <li className='flex items-start py-2'>
                <FaCheckCircle className='w-1/12 mt-1 text-green-500' />
                <p className='w-11/12'>
                  Exclusive discount to all partner merchant (Restaurants,
                  Salons, Coffee shops, etc)
                </p>
              </li>
              <li className='flex items-start py-2'>
                <FaCheckCircle className='w-1/12 mt-1 text-green-500' />
                <p className='w-11/12'>
                  Exclusive access to raffle and ticket prizes (Gold Products)
                </p>
              </li>
              <li className='flex items-start py-2'>
                <FaCheckCircle className='w-1/12 mt-1 text-green-500' />
                <p className='w-11/12'>
                  Exclusive discount all regular programs of ground zero (10%)
                </p>
              </li>
              <li className='flex items-start py-2'>
                <FaCheckCircle className='w-1/12 mt-1 text-green-500' />
                <p className='w-11/12'>
                  Exclusive discount to all Ground Zero public events (10%)
                </p>
              </li>
              <li className='flex items-start py-2'>
                <FaCheckCircle className='w-1/12 mt-1 text-green-500' />
                <p className='w-11/12'>
                  Referral Program Access (20 AED voucher for every successful
                  transaction)
                </p>
              </li>
            </ul>
          </div>
          <div
            className='transition duration-300 w-full lg:w-96 p-8 bg-gradient-to-br from-neutral-200 to-white shadow hover:shadow-lg -translate-y-0 hover:-translate-y-2 rounded'
            data-aos='fade-up'
            data-aos-delay='600'
          >
            <h3 className='font-montserrat font-bold text-2xl text-black'>
              Platinum Legend
            </h3>
            <p className='pt-2 font-montserrat font-normal text-base text-neutral-700'>
              Experience exclusive benefits of being a Platinum member with
              bigger discounts and more access to facilities.
            </p>
            <h2 className='pt-6 font-montserrat'>
              <span className='font-bold text-4xl text-black  '>10 AED</span>{" "}
              <span className='font-normal text-base text-neutral-700'>
                / month
              </span>
            </h2>
            <h2 className='pb-6 font-montserrat'>
              <span className='font-normal text-sm text-neutral-700'>
                115 AED / annually
              </span>
            </h2>
            <button className='transition duration-300 w-full px-8 py-3 border-2 border-black font-montserrat font-semibold text-sm text-center text-white hover:text-black bg-black hover:bg-transparent rounded'>
              BE A LEGEND
            </button>
            <ul className='pt-4 font-montserrat font-normal text-sm text-black'>
              <li className='flex items-start py-2'>
                <FaCheckCircle className='w-1/12 mt-1 text-green-500' />
                <p className='w-11/12'>
                  3 Free access to any program of ground zero
                </p>
              </li>
              <li className='flex items-start py-2'>
                <FaCheckCircle className='w-1/12 mt-1 text-green-500' />
                <p className='w-11/12'>
                  Exclusive discount to all partner merchant (Restaurants,
                  Salons, Coffee shops, etc)
                </p>
              </li>
              <li className='flex items-start py-2'>
                <FaCheckCircle className='w-1/12 mt-1 text-green-500' />
                <p className='w-11/12'>
                  Exclusive access to raffle and ticket prizes (Platinum
                  Products)
                </p>
              </li>
              <li className='flex items-start py-2'>
                <FaCheckCircle className='w-1/12 mt-1 text-green-500' />
                <p className='w-11/12'>
                  Exclusive discount all regular programs of ground zero (25%)
                </p>
              </li>
              <li className='flex items-start py-2'>
                <FaCheckCircle className='w-1/12 mt-1 text-green-500' />
                <p className='w-11/12'>
                  Exclusive discount to all Ground Zero public events (25%)
                </p>
              </li>
              <li className='flex items-start py-2'>
                <FaCheckCircle className='w-1/12 mt-1 text-green-500' />
                <p className='w-11/12'>
                  Referral Program Access (50 aed voucher for every successful
                  transaction)
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className='mt-32' />
    </main>
  );
}
