import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Launguage from "../Launguage";

function AboutNavbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navitems = [
    { title: "ABOUT", to: "about" },
    { title: "TRADING", to: "trading" },
    { title: "Onsite support Services(OSS)", to: "oss" },
    { title: "LAUNGUAGE INTERPRETSTION", to: "launguage" },
    { title: "CONTACT", to: "contact" },
    { title: "CAREERS", to: "careers" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`top-0 left-0  w-full flex justify-between items-center px-8  pb-4 z-50 transition-all duration-300
        md:backdrop-blur-lgv backdrop-blur-sm md:bg-white/5 shadow-md font-extrabold  text-[#f30d0d] 
        fixed 
      `}>
      {/* Logo */}
      <Link to="/" className="text-4xl font-sans tracking-[2px] font-bold">
        <img src="/logo.png" className="h-20 md:h-20" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 md:gap-10 md:pr-14 text-sm md:text-[15px]">
        {navitems.map((page, index) => (
          <Link
            key={page.title}
            to={`/${page.to}`}
            onClick={closeMenu}
            className={location.pathname === `/${page.to}` ? "underline" : ""}>
            {page.title}
          </Link>
        ))}
        <div>
          <Launguage />
        </div>
      </div>

      {/* Mobile Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-2xl cursor-pointer">
        {isOpen ? <FaTimes /> : <FaBars className="text-red-700" />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0  h-screen left-0 w-full bg-black/90 flex flex-col items-center justify-center gap-8 text-lg transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <button onClick={toggleMenu} className="flex justify-end">
          <FaTimes className="text-white" />
        </button>
        {navitems.map((page) => (
          <Link
            key={page.title}
            to={`/${page.to}`}
            className="text-white"
            onClick={closeMenu}>
            {page.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default AboutNavbar;
