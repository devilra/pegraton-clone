import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

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
      className={`fixed top-0 text-white font-[500] left-0 w-full flex justify-between items-center px-8 pt-8  md:pl-28 pb-4 z-50 ${
        location.pathname === "/about" && isScrolled
          ? "backdrop-blur-md bg-black/50"
          : "bg-transparent"
      }`}>
      {/* Logo */}
      <div className="md:px-2  flex items-center">
        <Link
          to="/"
          className="text-4xl text-neutral-300 md:text-white  font-sans tracking-[2px] font-bold">
          <img
            src="/logo.webp"
            className="h-20 w-28 md:w-full mr-2 md:mr-0 md:h-20 "
          />
        </Link>
        <h1 className="pl-1 md:pl-0">
          <span className="text-[#D41618] text-xl font-extrabold  md:text-2xl">
            SANSIRONG
          </span>
          <span className="text-white font-mono md:text-neutral-800 px-2">
            {" "}
            INTERNATIONAL PRIVATE LIMITED
          </span>
        </h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 md:gap-10 md:pr-14 text-sm md:text-[15px]">
        <Link
          to="/about"
          onClick={closeMenu}
          className={location.pathname === "/about" ? "underline" : ""}>
          ABOUT
        </Link>
        <Link
          to="/service"
          onClick={closeMenu}
          className={location.pathname === "/service" ? "underline" : ""}>
          PRODUCT&SERVICE
        </Link>
        <Link
          to="/investors"
          onClick={closeMenu}
          className={location.pathname === "/investors" ? "underline" : ""}>
          INVESTORS
        </Link>
        <Link
          to="/sustainability"
          onClick={closeMenu}
          className={
            location.pathname === "/sustainability" ? "underline" : ""
          }>
          SUSTAINABILITY
        </Link>
        <Link
          to="/careers"
          onClick={closeMenu}
          className={location.pathname === "/careers" ? "underline" : ""}>
          CAREERS
        </Link>
      </div>

      {/* Mobile Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-2xl text-[#D41618] cursor-pointer">
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
        <Link to="/sustainability" onClick={() => setIsOpen(false)}>
          SUSTAINABILITY
        </Link>
        <Link to="/careers" onClick={() => setIsOpen(false)}>
          CAREERS
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
