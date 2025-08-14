import React, { useState } from "react";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const AboutFooter = () => {
  //console.log(selectedImage);

  // Toggle function for a section

  // const images = [
  //   "/sansirong/s1.jpg",
  //   "/sansirong/s2.jpg",
  //   "/sansirong/s3.jpg",
  // ];

  return (
    <div>
      <footer className="bg-gradient-to-br  from-cyan-700 via-cyan-600 w-full   to-cyan-500 text-white px-6 py-10 md:px-28 md:py-10">
        <div className="">
          {/* Top links */}

          {/* Divider */}

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

export default AboutFooter;
