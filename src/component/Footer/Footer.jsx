import React from "react";
import { CiInstagram } from "react-icons/ci";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { IoCall, IoLocation } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { NavLink } from 'react-router';


const Footer = () => {
  return (
<div className="bg-blue-600 py-15 px-5 ">
        <div className=" text-white grid grid-cols-3 gap-10 ">
      <div className="justify-center items-center ">
        <img className="mx-auto py-3" src="/src/assets/images/logo.png" alt="" />
        <h1 className="font-bold text-xl">AKIJ GROUP</h1>
        <p className="mt-5">The Largest Group of Company in Bangladesh</p>

        <p className="font-bold">Connect With Social Media</p>
        <div className="flex items-center gap-2 justify-center mt-5">
          <div className="border p-2 rounded-full ">
            <FaTwitter />
          </div>
          <div className="border p-2 rounded-full">
            <FaFacebookF />
          </div>
          <div className="border p-2 rounded-full">
            {" "}
            <CiInstagram />
          </div>
          <div className="border p-2 rounded-full">
            {" "}
            <ImLinkedin />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-1">
        <h2 className="font-bold">Contact Us</h2>
        <p className="flex items-center gap-1"><IoCall/>+0088954 24455 5485 (Overseas)</p>
        <p className="flex items-center gap-1"><TfiEmail />info@akij.net</p>
        <p className="flex items-center gap-3
          "><IoLocation size={25} /><span className="-ml-3 text-left">Akij House, 198 Bir Uttam, Mir Shawkat Sara, Gulshan Link Road,Tejgaon, Dhaka-1208</span></p>
        <p className="text-left"> Sat to Thu - 9:00am to 6:00pm (Friday Closed) Between 9:00 AM to 5:00 PM, Except on Government Holidays</p>
      </div>
      <div>
        <p className="font-bold">Important Links</p>
        <div className="flex justify-between">
            <ul className="flex flex-col gap-3">
               
                <NavLink>Book</NavLink>
                <NavLink>Survey</NavLink>
                <NavLink>Privacy Policy</NavLink>
                <NavLink>Terms And Condition</NavLink>
            </ul>
            <ul className="flex flex-col gap-3">
                <NavLink>FAQ</NavLink>
                <NavLink>Trust</NavLink>
                <NavLink>Contact Center</NavLink>
                <NavLink>E-Commerce Shop</NavLink>
            </ul>
        </div>
            <img className="w-20 h-20" src="https://akij.net/img/footer-image-3rd.png" alt="" />
      </div>
     
    </div>
     <p className="text-center text-white mt-5">© Copyright © 2021 Akij Group. All rights reserved. Developed by AKIJ GROUP IT</p>
  </div>
    );
};

export default Footer;
