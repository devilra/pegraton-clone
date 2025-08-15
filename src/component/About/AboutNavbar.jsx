import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Launguage from "../Launguage";

function AboutNavbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navitems = [
    { title: "HOME", to: "/" },
    { title: "ABOUT", to: "/about" },
    { title: "ONSITE SUPPORT SERVICES(OSS)", to: "/oss" },
    { title: "TRADING", to: "/trading" },

    { title: "LAUNGUAGE INTERPRETATION", to: "/launguage" },
    { title: "CONTACT", to: "/contact" },
    { title: "CAREERS", to: "/careers" },
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
      className={`top-0 left-0 md:pt-3 w-full flex justify-between items-center px-8  pb-4 z-50 transition-all duration-300
        md:backdrop-blur-lgv backdrop-blur-sm md:bg-white/5 shadow-md font-extrabold  text-[#f30d0d] 
        fixed 
      `}>
      {/* Logo */}
      {/* <Link to="/" className="text-4xl font-sans tracking-[2px] font-bold">
        <img src="/logo.png" className="h-20 md:h-20" />
      </Link> */}
      <div className="md:px-1 flex items-center">
        <Link
          to="/"
          className="text-4xl text-neutral-300 md:text-white  font-sans tracking-[2px] font-bold">
          <img
            src="/logo.png"
            className="h-20 md:w-full mr-2 md:mr-0 md:h-20 "
          />
        </Link>
        <h1 className="pl-1  leading-[20px] md:px-2">
          <span className="text-white md:text-[#f82f2f] tracking-[2px] text-4xl font-[600] md:text-4xl">
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
      <div className="hidden md:flex justify-end  md:gap-4 md:pr-14 text-sm md:text-[15px]">
        {navitems.map((page, index) => (
          <div key={page.title} className="">
            <Link
              to={page.to}
              style={{
                transition: "all 0.2s ease-in-out",
              }}
              className="text-[#fa160e] hover:text-[#ff4a42] hover:shadow[0_0_10px_#fa160e]"
              onClick={closeMenu}
              onMouseLeave={(e) => (e.target.style.textShadow = "none")}
              onMouseEnter={(e) =>
                (e.target.style.textShadow =
                  "0 0 10px #fa160e, 0 0 20px #fa160e")
              }>
              {page.title}
            </Link>
            {location.pathname === page.to && (
              <div className="w-full h-[2px]  bg-[#ff746f]  mt-2 transition-all duration-300 ease-in-out rounded-full"></div>
            )}
          </div>
        ))}

        {/* <div>
          <Launguage />
        </div> */}
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
          <div key={page.title} className="flex flex-col items-center">
            <Link
              to={page.to}
              className="text-[#fa160e] text-[15px]"
              onClick={closeMenu}>
              {page.title}
            </Link>
            {location.pathname === page.to && (
              <div className="w-[50px] h-[2px] bg-[#fa160e] rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}

export default AboutNavbar;
