import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

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
        <div className="relative z-10 text-white text-4xl">Contact Section</div>
      </section>
    </div>
  );
};

export default HomeHero;
