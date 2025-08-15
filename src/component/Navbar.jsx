import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Launguage from "./Launguage";

function Navbar({ aboutScroll }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  console.log(isScrolled);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // useEffect(() => {
  //   if (location.pathname === "/about") {
  //     const handleScroll = () => {
  //       if (window.scrollY > 5) {
  //         setIsScrolled(true);
  //       } else {
  //         setIsScrolled(false);
  //       }
  //     };
  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   } else {
  //     setIsScrolled(false);
  //   }
  // }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/about") {
      if (aboutScroll > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    } else {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 5);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [location.pathname, aboutScroll]);

  return (
    <nav
      className={`fixed top-0 text-white font-[500] left-0 w-full flex justify-between items-center px-8 md:px-5 pt-8 md:pt-2  md:pl-18 pb-4 z-50 ${
        location.pathname === "/about" && isScrolled
          ? "backdrop-blur-md bg-black/50"
          : "bg-transparent"
      }`}>
      {/* Logo */}
      <div className="md:px-2 flex items-center">
        <Link
          to="/"
          className="text-4xl text-neutral-300 md:text-white  font-sans tracking-[2px] font-bold">
          <img
            src="/logo.png"
            className="h-20 md:w-full mr-2 md:mr-0 md:h-20 "
          />
        </Link>
        <h1 className="pl-1  leading-[20px] md:px-2">
          <span className="text-white md:text-[#ff302c] tracking-[2px] text-4xl font-[600] md:text-4xl">
            SANSIRONG
          </span>
          <br />
          <span className="text-white md:text-[#ff302c] text-[13px] font-[800] leading-[18px] md:text-[13px]">
            {" "}
            INTERNATIONAL PRIVATE LIMITED
          </span>
        </h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden text-white drop-shadow-lg font-bold md:flex gap-8 md:gap-4 md:pr-14 text-2xl ">
        <Link to="/" onClick={closeMenu} className={` text-[15px] `}>
          HOME
          {location.pathname === "/" && (
            <div className="w-[50px] h-[2px] bg-[#fa160e] rounded-full"></div>
          )}
        </Link>
        <Link
          to="/about"
          onClick={closeMenu}
          className={` text-[15px] ${
            location.pathname === "/about" ? "underline" : ""
          }`}>
          ABOUT
          {location.pathname === "/about" && (
            <div className="w-[50px] h-[2px] bg-[#fa160e] rounded-full"></div>
          )}
        </Link>
        <Link
          to="/oss"
          onClick={closeMenu}
          className={` text-[15px]  ${
            location.pathname === "/oss" ? "underline" : ""
          }`}>
          ONSITE SUPPORT SERVICES(OSS)
        </Link>
        <Link
          to="/trading"
          onClick={closeMenu}
          className={` text-[15px]  ${
            location.pathname === "/about" ? "underline" : ""
          }`}>
          TRADING
        </Link>

        <Link
          to="/launguage"
          onClick={closeMenu}
          className={` text-[15px]  ${
            location.pathname === "/launguage" ? "underline" : ""
          }`}>
          LAUNGUAGE INTERPRETATION
        </Link>
        <Link
          to="/contact"
          onClick={closeMenu}
          className={` text-[15px] ${
            location.pathname === "/about" ? "underline" : ""
          }`}>
          CONTACT
        </Link>
        <Link
          //to="/careers"
          onClick={closeMenu}
          className={` text-[15px] ${
            location.pathname === "/about" ? "underline" : ""
          }`}>
          CAREERS
        </Link>
        <Launguage />
      </div>
      <div></div>

      {/* Mobile Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-2xl text-white cursor-pointer">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/90 flex flex-col items-center justify-center gap-8 text-lg transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        <button onClick={toggleMenu} className="flex justify-end">
          <FaTimes />
        </button>
        <Link to="/about" onClick={() => setIsOpen(false)}>
          ABOUT
        </Link>
        <Link to="/service" onClick={() => setIsOpen(false)}>
          PRODUCT&SERVICE
        </Link>

        <Link to="/investors" onClick={() => setIsOpen(false)}>
          INVESTORS
        </Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>
          CONTACT
        </Link>
        <Link to="/careers" onClick={() => setIsOpen(false)}>
          CAREERS
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
