import Image from "next/image";
import { Images } from "@/core";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='px-4 md:px-14 lg:px-32 w-full bg-black'>
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
  );
}
