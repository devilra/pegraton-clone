import React, { useState } from "react";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const Footer = () => {
  // State to track open sections for mobile accordion
  const [openSections, setOpenSections] = useState({});

  // Toggle function for a section
  const toggleSection = (section) => {
    setOpenSections((prev) => {
      if (prev[section]) {
        return {};
      } else {
        return { [section]: true };
      }
    });
  };

  return (
    <div>
      <div className="  hidden md:block py-3">
        <div className="gap-5 relative md:pl-28  md:pr-28 rounded-lg grid grid-cols-3  overflow-hidden md:pt-10 shadow-lg">
          <div className="relative  rounded-lg  overflow-hidden  cursor-pointer group   ">
            <img
              src="/f1.png"
              alt="EV"
              className="w-[400px] h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-2 w-[200px] left-2 text-white font-[400] md:text-4xl sm:text-xl">
              ESG
            </div>
          </div>
          <div className="relative  rounded-lg  overflow-hidden   cursor-pointer group   ">
            <img
              src="/f2.png"
              alt="EV"
              className="w-[400px] h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-2 w-[200px] left-2 text-white font-[400] md:text-4xl sm:text-xl">
              GLOBAL FOOTPRINT
            </div>
          </div>
          <div className="relative  rounded-lg  overflow-hidden   cursor-pointer group   ">
            <img
              src="/f3.png"
              alt="EV"
              className="w-[400px] h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-20 w-[200px] left-2 text-white font-[400] md:text-4xl sm:text-xl">
              CAREERS
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gradient-to-br from-cyan-700 via-cyan-600 w-full pb-72 md:pb-40 to-cyan-500 text-white px-6 py-10 md:px-28 md:py-10">
        <div className="">
          {/* Top links */}

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 pb-48 md:pb-5 md:px-32 ">
            {/* About */}
            <div>
              <button
                onClick={() => toggleSection("about")}
                className="flex w-full items-center justify-between md:justify-start uppercase text-sm font-bold mb-3 md:mb-5 focus:outline-none">
                ABOUT
                <span className="md:hidden">
                  {openSections.about ? (
                    <HiChevronUp size={20} />
                  ) : (
                    <HiChevronDown size={20} />
                  )}
                </span>
              </button>
              {/* List - show only if open or on md+ */}
              <ul
                className={`text-sm space-y-1 md:block ${
                  openSections.about ? "block" : "hidden"
                }`}>
                <li>The Company</li>
                <li>Our Vision</li>
                {/* <li>Corporate Philosophy</li>
                <li>Global Footprint</li> */}
              </ul>
            </div>

            {/* Product & Service */}
            <div>
              <button
                onClick={() => toggleSection("product")}
                className="flex w-full items-center justify-between md:justify-start uppercase text-sm font-bold mb-3 md:mb-5 focus:outline-none">
                PRODUCT & SERVICE
                <span className="md:hidden">
                  {openSections.product ? (
                    <HiChevronUp size={20} />
                  ) : (
                    <HiChevronDown size={20} />
                  )}
                </span>
              </button>
              <ul
                className={`text-sm space-y-1 md:block ${
                  openSections.product ? "block" : "hidden"
                }`}>
                <li>Product Development</li>
                <li>Manufacturing</li>
                {/* <li>Service</li> */}
              </ul>
            </div>

            {/* Investors */}
            <div>
              <button
                onClick={() => toggleSection("investors")}
                className="flex w-full items-center justify-between md:justify-start uppercase text-sm font-bold mb-3 md:mb-5 focus:outline-none">
                INVESTORS
                <span className="md:hidden">
                  {openSections.investors ? (
                    <HiChevronUp size={20} />
                  ) : (
                    <HiChevronDown size={20} />
                  )}
                </span>
              </button>
              <ul
                className={`text-sm space-y-1 md:block ${
                  openSections.investors ? "block" : "hidden"
                }`}>
                <li>Company Profile</li>
                <li>Corporate Governance</li>
                {/* <li>Financial Information</li>
                <li>Annual Reports</li> */}
                {/* <li>Shareholder Services</li>
                <li>Material Information & Activities</li> */}
              </ul>
            </div>

            {/* Sustainability */}
            <div>
              <button
                onClick={() => toggleSection("sustainability")}
                className="flex w-full items-center justify-between md:justify-start uppercase text-sm font-bold mb-3 md:mb-5 focus:outline-none">
                SUSTAINABILITY
                <span className="md:hidden">
                  {openSections.sustainability ? (
                    <HiChevronUp size={20} />
                  ) : (
                    <HiChevronDown size={20} />
                  )}
                </span>
              </button>
              <ul
                className={`text-sm space-y-1 md:block ${
                  openSections.sustainability ? "block" : "hidden"
                }`}>
                <li>Commitment & Policy</li>
                <li>Sustainable Environment</li>
                {/* <li>Occupational Health & Safety</li>
                <li>Corporate Citizenship</li> */}
                {/* <li>Product Responsibility</li>
                <li>Stakeholder Communications & Sustainability Report</li> */}
              </ul>
            </div>

            {/* Careers */}
            <div>
              <button
                onClick={() => toggleSection("careers")}
                className="flex w-full items-center justify-between md:justify-start uppercase text-sm font-bold mb-3 md:mb-5 focus:outline-none">
                CAREERS
                <span className="md:hidden">
                  {openSections.careers ? (
                    <HiChevronUp size={20} />
                  ) : (
                    <HiChevronDown size={20} />
                  )}
                </span>
              </button>
              <ul
                className={`text-sm space-y-1 md:block ${
                  openSections.careers ? "block" : "hidden"
                }`}>
                <li>Learning & Development</li>
                <li>Employee Benefits</li>
                {/* <li>Join PEGATRON</li>
                <li>Contact HR</li> */}
                {/* <li>Recruitment Events</li> */}
              </ul>
            </div>

            {/* Feedback button */}
            <div className="flex items-start justify-center">
              <button className="border border-white rounded-md px-4 py-2 text-sm hover:bg-white hover:text-cyan-700 transition">
                Feedback
              </button>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-white/30 mb-6" />

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row items-center justify-between text-sm">
            <p>© sansirong Corporation. All rights reserved</p>
            <p>Developed by Amigo webster</p>

            <div className="flex items-center space-x-4 mt-3 md:mt-0">
              <a href="#" aria-label="LinkedIn" className="hover:text-white/80">
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-white/80">
                <FaInstagram size={18} />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-white/80">
                <FaYoutube size={18} />
              </a>
              <span className="border-l border-white/30 h-4 mx-4" />
              <a href="#" className="hover:underline">
                Contact Us
              </a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:underline">
                Privacy & Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
