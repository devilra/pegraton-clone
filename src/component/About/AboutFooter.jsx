import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const AboutFooter = () => {
  return (
    <footer className="bg-sky-500 text-white pb-10 md:pb-0 pt-10 ">
      <div className="container mx-auto px-6 md:px-20">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-800 pb-8">
          {/* Logo & Socials */}
          <div>
            <img
              src="/logo1.png" // Replace with your logo path
              alt="Logo"
              className="w-16 mb-4"
            />
            <div className="border-b-2 border-pink-400 w-16 mb-4"></div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-pink-400">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="hover:text-pink-400">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="hover:text-pink-400">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="hover:text-pink-400">
                <FaPinterestP size={18} />
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold mb-2">About</h3>
            <div className="border-b-2 border-pink-400 w-16 mb-4"></div>
            <ul className="space-y-2 pl-4 md:pl-0 text-sm">
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
            <div className="border-b-2 border-pink-400 w-16 mb-4"></div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FiPhone className="text-pink-400" /> +91 8610102669
              </li>
              <li className="flex items-center gap-2">
                <FiMail className="text-pink-400" /> sansirongsales@gmail.com
              </li>
              <li className="flex items-start gap-2">
                <FiMapPin className="text-pink-400 mt-1" />
                4, Hiranandani Park, Padharvadi Village, Kundrathur Taluk,
                Thriveni Nagar, Oragadam Industrial Area, Kancheepuram, Tamil
                Nadu 603204
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-xs text-white mt-4">
          © 2025 Created with{" "}
          <a
            href="#"
            className="text-white px-5 text-[15px] font-bold hover:underline">
            Amigowebster
          </a>
        </div>
      </div>
    </footer>
  );
};

export default AboutFooter;
