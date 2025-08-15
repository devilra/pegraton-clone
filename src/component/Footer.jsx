import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { images } from "./data";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Footer = () => {
  // State to track open sections for mobile accordion
  const [openSections, setOpenSections] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  //console.log(selectedImage);

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

  // const images = [
  //   "/sansirong/s1.jpg",
  //   "/sansirong/s2.jpg",
  //   "/sansirong/s3.jpg",
  // ];

  return (
    <div className="">
      <div className="hidden h-screen md:block py-8">
        <div className="gap-5 md:pl-28 md:pr-28 rounded-lg grid grid-cols-3  shadow-lg">
          {images.map((item, i) => (
            <div
              key={i}
              className="relative rounded-lg  cursor-pointer group"
              onClick={() => setSelectedImage(item)}>
              <img
                src={item.src}
                alt={`Image ${i + 1}`}
                className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-sky-500 text-white  pt-6 md:px-32 md:mb-60 pb-3 mt-10">
        <div className="container mx-auto px-6 md:px-20">
          {/* Top section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-800 pb-6">
            {/* Logo & Socials */}
            <div>
              <img src="/logo.png" alt="Logo" className="w-14 mb-3" />
              <div className="border-b-2 border-pink-400 w-14 mb-3"></div>
              <div className="flex space-x-3">
                <a href="#" className="hover:text-pink-400">
                  <FaFacebookF size={16} />
                </a>
                <a href="#" className="hover:text-pink-400">
                  <FaTwitter size={16} />
                </a>
                <a href="#" className="hover:text-pink-400">
                  <FaInstagram size={16} />
                </a>
                <a href="#" className="hover:text-pink-400">
                  <FaPinterestP size={16} />
                </a>
              </div>
            </div>

            {/* About */}
            <div>
              <h3 className="font-semibold mb-2">About</h3>
              <div className="border-b-2 border-pink-400 w-14 mb-3"></div>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="#" className="hover:text-pink-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400">
                    onsitesupportservicesoss
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-400">
                    languageinterpretation
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-2">Contact Us</h3>
              <div className="border-b-2 border-pink-400 w-14 mb-3"></div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <FiPhone className="text-pink-400" /> +91 8610102669
                </li>
                <li className="flex items-center gap-2">
                  <FiMail className="text-pink-400" /> sansirongsales@gmail.com
                </li>
                <li className="flex items-start gap-2">
                  <FiMapPin className="text-pink-400 mt-1" /> 4, Hiranandani
                  Park, Padharvadi Village, Kundrathur Taluk, Thriveni Nagar,
                  Oragadam Industrial Area, Kancheepuram, Tamil Nadu 603204
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="text-center text-xs text-white mt-3">
            © 2025 Created with{" "}
            <a
              href="#"
              className="text-white px-2 text-[13px] font-bold hover:underline">
              Amigo webster
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
