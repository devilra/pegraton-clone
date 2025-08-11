import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full flex justify-between items-center px-8 pt-8  md:pl-28 pb-4 z-50"
      style={{
        background: "transparent",
        color: "white",
        fontWeight: "500",
      }}>
      {/* Logo */}
      <Link
        to="/"
        className="text-4xl text-neutral-300 md:text-white  font-sans tracking-[2px] font-bold">
        <img src="/logo.webp" className="h-20 md:h-20 " />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 md:gap-14 md:pr-14 text-sm md:text-[15px]">
        <Link
          to="/about"
          onClick={closeMenu}
          className={location.pathname === "/" ? "underline" : ""}>
          ABOUT
        </Link>
        <Link
          to="/service"
          onClick={closeMenu}
          className={location.pathname === "/about" ? "underline" : ""}>
          PRODUCT&SERVICE
        </Link>
        <Link
          to="/investors"
          onClick={closeMenu}
          className={location.pathname === "/products" ? "underline" : ""}>
          INVESTORS
        </Link>
        <Link
          to="/sustainability"
          onClick={closeMenu}
          className={location.pathname === "/products" ? "underline" : ""}>
          SUSTAINABILITY
        </Link>
        <Link
          to="/careers"
          onClick={closeMenu}
          className={location.pathname === "/products" ? "underline" : ""}>
          CAREERS
        </Link>
      </div>

      {/* Mobile Hamburger Icon */}
      <button className="md:hidden text-2xl cursor-pointer">
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
