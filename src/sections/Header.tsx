"use client";
import { Images } from "@/core";
import { H1 } from "@/core/text/H1";
import React from "react";

export default function Header() {
  return (
    // <section className='w-screen h-screen'>
    <section
      // id='hero'
      className='h-screen w-auto bg-cover bg-center bg-fixed bg-no-repeat flex items-center bg-gray'
      style={{ backgroundImage: `url(${Images.HeaderBg.src})` }}
    >
      <div className='container px-4'>
        <h1 className='font-montserrat font-extrabold text-5xl text-white'>
          PERSONALIZED
        </h1>
        <h1 className='font-montserrat font-extrabold text-8xl text-white'>
          WELLNESS & FITNESS
        </h1>
        <h1 className='font-montserrat font-extrabold text-5xl text-transparent border-solid border-white'>
          FOR ORGANIZATIONS
        </h1>
      </div>
    </section>
    // </section>
  );
}
