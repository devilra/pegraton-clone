import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { IoFlagOutline } from "react-icons/io5";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Footer from "../Footer";

const HomeHero = () => {
  const videoSrc = "/bg.mp4";
  const video1 =
    "https://www.pegatroncorp.com/media/20250115032849629_MainBN_AI_mb.mp4";
  const video2 =
    "https://www.pegatroncorp.com/media/20250115032749773_MainBN_Server_mb.mp4";
  const video3 =
    "https://www.pegatroncorp.com/media/20250115032815108_MainBN_Maker_XL_mb.mp4";

  const g1 =
    "https://www.pegatroncorp.com/media/20241219033242374_Automotive_hover.mp4";
  const g2 =
    "https://www.pegatroncorp.com/media/20250117102612342_5G_hover.mp4";
  const g3 =
    "https://www.pegatroncorp.com/media/20250117102537583_IOT_hover.mp4";
  const g4 =
    "https://www.pegatroncorp.com/media/20250117102527866_Computing_hover.mp4";
  const g5 =
    "https://www.pegatroncorp.com/media/20241219113526769_news_expand.png";
  const g6 =
    "https://www.pegatroncorp.com/media/20241219033738573_AI_hover.mp4";

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
      sections[index]?.scrollIntoView({ behavior: "smooth" });
    };

    const handleKeyDown = (e) => {
      setSectionIndex((prevIndex) => {
        if (e.key === "ArrowDown" && prevIndex < sections.length - 1) {
          e.preventDefault();
          sections[prevIndex + 1]?.scrollIntoView({ behavior: "smooth" });
          return prevIndex + 1;
        } else if (e.key === "ArrowUp" && prevIndex > 0) {
          e.preventDefault();
          sections[prevIndex - 1]?.scrollIntoView({ behavior: "smooth" });
          return prevIndex - 1;
        }
        return prevIndex;
      });
    };

    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e) => {
      e.preventDefault();
      touchEndY = e.touches[0].clientY;
      // if (window.scrollY === 0 && touchEndY > touchStartY) {

      // }
    };
    const handleTouchEnd = () => {
      setSectionIndex((prevIndex) => {
        const swipeDistance = touchStartY - touchEndY;
        if (swipeDistance > 50 && prevIndex < sections.length - 1) {
          sections[prevIndex + 1]?.scrollIntoView({ behavior: "smooth" });
          return prevIndex + 1;
        } else if (swipeDistance < -50 && prevIndex > 0) {
          sections[prevIndex - 1]?.scrollIntoView({ behavior: "smooth" });
          return prevIndex - 1;
        }
        return prevIndex;
      });
    };

    let isScrolling = false;
    const handleWheel = (e) => {
      if (isScrolling) return;
      isScrolling = true;

      setSectionIndex((prevIndex) => {
        if (e.deltaY > 0 && prevIndex < sections.length - 1) {
          sections[prevIndex + 1]?.scrollIntoView({ behavior: "smooth" });
          return prevIndex + 1;
        } else if (e.deltaY < 0 && prevIndex > 0) {
          sections[prevIndex - 1]?.scrollIntoView({ behavior: "smooth" });
          return prevIndex - 1;
        }
        return prevIndex;
      });

      setTimeout(() => {
        isScrolling = false;
      }, 800);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Section 1 - Normal */}
      <section className="full-section relative h-screen flex items-center justify-start bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          loading="lazy"
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
      <section className="full-section relative md:h-[h-100%] h-screen flex   pt-28 px-8 md:px-0  bg-black">
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
          <div className="flex md:pb-24 gap-5 relative md:pl-28 rounded-lg flex-col md:flex-row  overflow-hidden md:pt-20 shadow-lg">
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
                  className={`w-2 h-2 rounded-full cursor-pointer hidden md:block ${
                    i === currentVideoIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Right side - grid of smaller images with text */}

            <div className=" max-w-[400px] md:h-[300px] grid grid-cols-3 grid-rows-3  gap-x-3 gap-y-2 ">
              {/* EV */}
              <div className="relative rounded-lg  overflow-hidden md:row-span-2   cursor-pointer group   ">
                <img
                  src="/g1.jpg"
                  alt="EV"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 text-white font-bold text-lg sm:text-xl">
                  EV
                </div>
              </div>

              {/* 5G */}
              <div className="relative rounded-lg overflow-hidden md:row-span-2 cursor-pointer group ">
                <img
                  src="/g2.jpg"
                  alt="5G"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 text-white font-bold text-lg sm:text-xl">
                  5G
                </div>
              </div>

              {/* IOT & Smart application */}
              <div className="relative rounded-lg overflow-hidden cursor-pointer group  ">
                <img
                  src="/g3.jpg"
                  alt="IOT & Smart application"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 text-white font-semibold text-sm sm:text-base leading-snug">
                  IOT & Smart <br /> application
                </div>
              </div>

              {/* PEGAVERSE (span 2 columns on sm+, full width on mobile) */}
              <div className="relative rounded-lg overflow-hidden cursor-pointer group ">
                <img
                  src="/g4.png"
                  alt="PEGAVERSE"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 text-white font-bold text-lg sm:text-xl">
                  PEGAVERSE
                </div>
              </div>

              {/* Computing */}
              <div className="relative rounded-lg md:col-span-2 order-2 overflow-hidden  cursor-pointer group  ">
                <img
                  src="/g6.png"
                  alt="Computing"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 text-white font-bold text-lg sm:text-xl">
                  Computing
                </div>
              </div>

              {/* News */}
              <div className="relative rounded-lg order-1 md:h-[98px] md:w-[130px] overflow-hidden md:col-span-1 cursor-pointer group aspect-[4/5] sm:aspect-[3/4]">
                <img
                  src="/g5.png"
                  alt="News"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 text-white font-bold text-lg sm:text-xl">
                  News
                </div>
              </div>
            </div>
            <div className=" hidden md:block absolute left-28 bottom-5  ">
              <div className="flex items-center justify-center h-full  ">
                <h1 className="font-[500] text-4xl">Navigate the future</h1>
                <MdOutlineArrowForwardIos size={40} className="pt-2 mx-3" />
              </div>
            </div>
            <div className=" hidden md:block absolute right-28  bottom-5  ">
              <div className="flex items-center justify-center space-x-1 border border-white px-3 rounded-full  ">
                <IoFlagOutline size={15} />
                <h1 className="font-[500] text-[12px]">Feedback</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section mobile -- 3 and Desktop --hidden - Blur */}

      <section className="full-section md:hidden relative h-screen flex items-center justify-center bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 backdrop-blur-lg bg-black/40" />
        <div className="relative z-10 text-white text-4xl ">
          <div className=" md:hidden py-3">
            <div className="gap-5 relative  rounded-lg grid grid-cols-1 overflow-hidden  shadow-lg">
              <div className="relative  rounded-lg  overflow-hidden  cursor-pointer group   ">
                <img
                  src="/f1.png"
                  alt="EV"
                  className="w-[400px] h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-2 w-[200px] left-2 text-white font-[400] md:text-4xl sm:text-xl">
                  ESG
                </div>
              </div>
              <div className="relative  rounded-lg  overflow-hidden   cursor-pointer group   ">
                <img
                  src="/f2.png"
                  alt="EV"
                  className="w-[400px] h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-2 w-[200px] left-2 text-white font-[400] md:text-4xl sm:text-xl">
                  GLOBAL FOOTPRINT
                </div>
              </div>
              <div className="relative  rounded-lg  overflow-hidden   cursor-pointer group   ">
                <img
                  src="/f3.png"
                  alt="EV"
                  className="w-[400px] h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-20 w-[200px] left-2 text-white font-[400] md:text-4xl sm:text-xl">
                  CAREERS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section mobile -- 4 and Desktop --3 - Blur */}
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
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default HomeHero;
