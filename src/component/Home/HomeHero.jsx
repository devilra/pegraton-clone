import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const HomeHero = () => {
  const videoSrc =
    "https://www.pegatroncorp.com/media/20250211094153188_bg_v6.mp4";
  const video1 =
    "https://www.pegatroncorp.com/media/20250115032849629_MainBN_AI_mb.mp4";
  const video2 =
    "https://www.pegatroncorp.com/media/20250115032749773_MainBN_Server_mb.mp4";
  const video3 =
    "https://www.pegatroncorp.com/media/20250115032815108_MainBN_Maker_XL_mb.mp4";

  const videos = [video1, video2, video3];

  const [sectionIndex, setSectionIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const handleDotClick = (index) => {
    setCurrentVideoIndex(index);
  };

  const location = useLocation();

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

  useEffect(() => {
    const sections = document.querySelectorAll(".full-section");

    const goToSection = (index) => {
      setSectionIndex(index);
      sections[index].scrollIntoView({ behavior: "smooth" });
    };

    // ---- KEYBOARD SCROLL ----
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown" && sectionIndex < sections.length - 1) {
        e.preventDefault();
        goToSection(sectionIndex + 1);
      } else if (e.key === "ArrowUp" && sectionIndex > 0) {
        e.preventDefault();
        goToSection(sectionIndex - 1);
      }
    };

    // ---- TOUCH SWIPE ----
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      touchEndY = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      const swipeDistance = touchStartY - touchEndY;

      if (swipeDistance > 50 && sectionIndex < sections.length - 1) {
        goToSection(sectionIndex + 1);
      } else if (swipeDistance < -50 && sectionIndex > 0) {
        goToSection(sectionIndex - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [sectionIndex]);

  return (
    <div className="overflow-hidden">
      {/* Section 1 - Normal */}
      <section className="full-section relative h-screen flex items-center justify-start bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="relative z-10 flex flex-col items-center justify-center md:justify-end h-full text-white">
          <p className="mt-4 text-white text-5xl px-8 md:px-0 md:pb-28  md:w-[1000px] md:text-[65px] leading-[60px] md:leading-[70px] md:pl-28">
            INNOVATIVE MINDSET, STRIVING FOR EXCELLENCE.
          </p>
        </div>
      </section>

      {/* Section 2 - Blur */}
      <section className="full-section relative md:h-[h-100%] h-screen flex flex-col  pt-28 px-8 md:px-0  bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 backdrop-blur-lg bg-black/40" />
        <div className="relative z-10 text-white text-4xl">
          <h1 className="md:hidden text-3xl text-white/85 pt-5 pb-8">
            Navigate the future
          </h1>
          <div className="flex md:pb-24 relative md:pl-28 rounded-lg overflow-hidden md:pt-20 shadow-lg">
            <video
              key={currentVideoIndex}
              ref={videoRef}
              src={videos[currentVideoIndex]}
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnded}
              className="w-full h-[200px]  md:h-[300px] rounded-lg md:w-[800px]  object-cover"
            />
            {/* Dots */}

            <div className="absolute bottom-4 md:bottom-28 md:right-[35%] flex gap-2">
              {videos.map((_, i) => (
                <div
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    i === currentVideoIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Blur */}
      <section className="full-section relative h-screen flex items-center justify-center bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 backdrop-blur-lg bg-black/40" />
        <div className="relative z-10 text-white text-4xl pt-96  md:pt-64">
          <footer className="bg-gradient-to-br from-cyan-700 via-cyan-600 pb-36 md:pb-10 to-cyan-500 text-white px-6 py-10 md:px-10 md:py-10">
            <div className="max-w-7xl mx-auto">
              {/* Top links */}
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-8">
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
                    <li>Corporate Philosophy</li>
                    <li>Global Footprint</li>
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
                    <li>Service</li>
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
                    <li>Financial Information</li>
                    <li>Annual Reports</li>
                    <li>Shareholder Services</li>
                    <li>Material Information & Activities</li>
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
                    <li>Occupational Health & Safety</li>
                    <li>Corporate Citizenship</li>
                    <li>Product Responsibility</li>
                    <li>Stakeholder Communications & Sustainability Report</li>
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
                    <li>Join PEGATRON</li>
                    <li>Contact HR</li>
                    <li>Recruitment Events</li>
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
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="hover:text-white/80">
                    <FaLinkedinIn size={18} />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="hover:text-white/80">
                    <FaInstagram size={18} />
                  </a>
                  <a
                    href="#"
                    aria-label="YouTube"
                    className="hover:text-white/80">
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
      </section>
    </div>
  );
};

export default HomeHero;
