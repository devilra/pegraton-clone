import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const HomeHero = () => {
  const videoSrc =
    "https://www.pegatroncorp.com/media/20250211094153188_bg_v6.mp4";
  const [sectionIndex, setSectionIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const sections = document.querySelectorAll(".full-section");

    // ---- KEYBOARD SCROLL ----
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown" && sectionIndex < sections.length - 1) {
        e.preventDefault();
        const next = sectionIndex + 1;
        setSectionIndex(next);
        sections[next].scrollIntoView({ behavior: "smooth" });
      } else if (e.key === "ArrowUp" && sectionIndex > 0) {
        e.preventDefault();
        const prev = sectionIndex - 1;
        setSectionIndex(prev);
        sections[prev].scrollIntoView({ behavior: "smooth" });
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

      // Swipe down → Next section
      if (swipeDistance > 50 && sectionIndex < sections.length - 1) {
        const next = sectionIndex + 1;
        setSectionIndex(next);
        sections[next].scrollIntoView({ behavior: "smooth" });
      }
      // Swipe up → Previous section
      else if (swipeDistance < -50 && sectionIndex > 0) {
        const prev = sectionIndex - 1;
        setSectionIndex(prev);
        sections[prev].scrollIntoView({ behavior: "smooth" });
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
      {/* Section 1 - Hero */}
      <section className="full-section relative h-screen flex items-center justify-start bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
        {/* <div className="absolute inset-0 bg-black/40" /> */}
        <div className="relative z-10 flex flex-col items-center md:pb-24 md:justify-end justify-center  h-full text-white">
          {/* <h1 className="text-4xl md:text-6xl font-bold">
            Create a site just like the video
          </h1> */}
          <p className="mt-4 text-white text-5xl px-8 md:px-0  md:w-[1000px] md:text-[65px] leading-[60px] md:leading-[70px] md:pl-28 ">
            INNOVATIVE MINDSET, STRIVING FOR EXCELLENCE.
          </p>
          {/* <div className="mt-8 flex items-center gap-4 justify-center">
            <a
              href="#"
              className="px-6 py-3 bg-white/90 rounded-2xl font-medium hover:bg-white transition">
              Get Started
            </a>
            <a
              href="#"
              className="px-6 py-3 border border-white/40 rounded-2xl text-white/90 hover:bg-white/10 transition">
              Learn more
            </a>
          </div> */}
        </div>
      </section>

      {/* Section 2 */}
      <section className="full-section h-screen flex items-center justify-center bg-gray-900 text-white text-3xl">
        This is the About section
      </section>

      {/* Section 3 */}
      <section className="full-section h-screen flex items-center justify-center bg-blue-900 text-white text-3xl">
        Contact Section
      </section>
    </div>
  );
};

export default HomeHero;
