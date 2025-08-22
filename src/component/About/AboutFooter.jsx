import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaArrowUp,
} from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutFooter = () => {
  const whatsappNumber = "8610102669";
  const whatsappLink = `https://wa.me/91${whatsappNumber}?text=Hi, I would like to know more.`;

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    console.log("About Footer");
    const handleScroll = () => {
      console.log("Scroll Y position:", window.scrollY);
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-sky-500 text-white pb-10  md:pb-0 pt-10 relative ">
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
                <Link to="/about" className="hover:text-pink-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/oss" className="hover:text-pink-400">
                  onsitesupportservicesoss
                </Link>
              </li>
              <li>
                <Link to="/launguage" className="hover:text-pink-400">
                  languageinterpretation
                </Link>
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
        <div className="text-center pb-10 text-xs md:pb-5 text-white mt-4">
          © 2025 Created with{" "}
          <a
            href="https://amigowebster.com"
            target="_blank"
            className="text-white px-2 text-[13px] font-bold hover:underline">
            amigowebster
          </a>
        </div>
      </div>
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-6 bg-pink-500 text-white p-4 rounded-full shadow-lg hover:bg-pink-600 transition duration-300 z-[9999]">
          <FaArrowUp size={20} />
        </button>
      )}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50">
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping-slow"></span>
        <FaWhatsapp size={28} className="relative z-10" />
      </a>
    </footer>
  );
};

export default AboutFooter;
