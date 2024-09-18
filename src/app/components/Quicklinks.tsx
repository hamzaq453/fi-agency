import React from "react";
import Image from "next/image";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex lg:flex-row flex-col py-20 gap-10 ml-8">
      {/* one */}
      <div className="flex flex-col flex-1 gap-5">
        <h1 className="font-bold text-2xl">FI Marketing Agency</h1>
        {/* <Image
          src="/Logo.png"
          alt="Picture of the author"
          width={150}
          height={150}
          className=""
        /> */}

        <p className="leading-7  [&:not(:first-child)]:mt-0 mb-4">
        A full-service marketing agency dedicated to growing brands and providing innovative marketing solutions.
        </p>

        <div className="flex flex-row gap-5">
        <Link href="https://www.instagram.com/fi_marketing_agency?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="flex flex-col items-center">
        <div className="bg-gray-200 rounded-lg h-10 w-10 flex justify-center items-center">
          <FaInstagram className="h-6 w-6" />
        </div>
        </Link>
        <Link href="https://wa.me/923204619431" className="flex flex-col items-center" target="_blank">
        <div className="bg-gray-200 rounded-lg h-10 w-10 flex justify-center items-center">
          <FaWhatsapp className="h-6 w-6" />
        </div>
          </Link>

          <Link href="https://www.linkedin.com/company/fi-marketing-agency/" target="_blank">
        <div className="bg-gray-200 rounded-lg h-10 w-10 flex justify-center items-center">
          <FaLinkedin className="h-6 w-6" />
        </div>
        </Link>
      </div>

        </div>

        

      {/* two */}
      <div className="flex-1">
        <ul className="ml-6  [&>li]:mt-2 flex flex-col gap-2">
        <li className="text-xl font-bold">Company</li>
        <li>About</li>
        <li>Terms of Use</li>
        <li>Privacy Policy</li>
      </ul>
      </div>

      {/* three */}
      <div className="flex-1">
        <ul className="ml-6  [&>li]:mt-2 flex flex-col gap-2">
        <li className="text-xl font-bold">Support</li>
        <li>Lifetime Support</li>
        <li>24h Chat Service</li>
      </ul>
      </div>

      {/* FOur */}
      <div className="flex-1">
        <ul className="ml-6  [&>li]:mt-2 flex flex-col gap-2">
        <li className="text-xl font-bold">Contact</li>
        <li>
          <Link href="https://wa.me/923204619431" className=" hover:text-gray-900" target="_blank">
          Whatsapp
          </Link>
        </li>
        <li>
          <Link href="mailto:fimarketingagency01@gmail.com">
          Gmail
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/fi_marketing_agency?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
          Instagram
          </Link>
        </li>
      </ul>
      </div>
      
    </footer>
    
  );
}

export default Footer;