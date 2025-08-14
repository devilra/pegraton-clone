import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { IoFlagOutline } from "react-icons/io5";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Footer from "../Footer";
import { images } from "../data";
import { Link } from "react-router-dom";

//const images = ["/sansirong/s1.jpg", "/sansirong/s2.jpg", "/sansirong/s3.jpg"];

const HomeHero = () => {
  // const videoSrc = "/h.mp4";
  const videoSrc =
    "https://www.pegatroncorp.com/media/20250115032815108_MainBN_Maker_XL_mb.mp4";
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
  const [selectedImage, setSelectedImage] = useState(null);

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
          //sections[prevIndex + 1]?.scrollIntoView({ behavior: "smooth" });
          goToSection(prevIndex + 1);
          return prevIndex + 1;
        } else if (e.key === "ArrowUp" && prevIndex > 0) {
          e.preventDefault();
          //sections[prevIndex - 1]?.scrollIntoView({ behavior: "smooth" });
          goToSection(prevIndex - 1);
          return prevIndex - 1;
        }
        return prevIndex;
      });
    };

    let touchStartY = 0;
    let touchEndY = 0;
    let isSwipe = false;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
      isSwipe = false;
    };
    const handleTouchMove = (e) => {
      //e.preventDefault();
      touchEndY = e.touches[0].clientY;
      const diff = Math.abs(touchStartY - touchEndY);

      if (diff > 10) {
        e.preventDefault();
        isSwipe = true;
      }
    };
    const handleTouchEnd = () => {
      if (!isSwipe) return;

      setSectionIndex((prevIndex) => {
        const swipeDistance = touchStartY - touchEndY;
        if (swipeDistance > 50 && prevIndex < sections.length - 1) {
          //sections[prevIndex + 1]?.scrollIntoView({ behavior: "smooth" });
          goToSection(prevIndex + 1);
          return prevIndex + 1;
        } else if (swipeDistance < -50 && prevIndex > 0) {
          //sections[prevIndex - 1]?.scrollIntoView({ behavior: "smooth" });
          goToSection(prevIndex - 1);
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
          //sections[prevIndex + 1]?.scrollIntoView({ behavior: "smooth" });
          goToSection(prevIndex + 1);
          return prevIndex + 1;
        } else if (e.deltaY < 0 && prevIndex > 0) {
          //sections[prevIndex - 1]?.scrollIntoView({ behavior: "smooth" });
          goToSection(prevIndex - 1);
          return prevIndex - 1;
        }
        return prevIndex;
      });

      setTimeout(() => {
        isScrolling = false;
      }, 800);
    };

    const disableScroll = (e) => {
      e.preventDefault();
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
          className="absolute inset-0 w-full h-full object-cover object-[60%_center] md:object-center"
          src={videoSrc}
          autoPlay
          loading="lazy"
          muted
          loop
          playsInline
        />
        {/* <img
          className="absolute inset-0 w-full h-full object-cover object-[60%_center] md:object-center"
          src="/banner.jpg"
          alt="Banner"
        /> */}

        <div className="relative z-10 flex flex-col items-center justify-center md:justify-end h-full text-white">
          <p className="mt-4 text-white text-5xl px-8 md:px-0 md:pb-28  md:w-[1000px] md:text-[65px] leading-[60px] md:leading-[70px] md:pl-28">
            INNOVATIVE MINDSET, STRIVING FOR EXCELLENCE.
          </p>
        </div>
      </section>

      {/* Section 2 - Blur */}
      <section className="full-section relative md:h-[h-100%] h-screen flex   pt-28 px-8 md:px-0  bg-black">
        <video
          className="absolute inset-0 w-full h-full mb-5 object-cover object-[60%_center] md:object-center"
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
            {/* <video
              key={currentVideoIndex}
              ref={videoRef}
              src={videos[currentVideoIndex]}
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnded}
              className="w-full h-[200px]  md:h-[300px] rounded-lg md:w-[800px]  object-cover"
            /> */}

            <div className="w-full overflow-y-scroll  md:overflow-hidden h-[200px]  md:h-[315px] pl-5 rounded-lg md:w-[800px] border border-dotted">
              <h1 className=" text-[18px] md:text-[30px] pr-3 pt-3">
                About us
              </h1>
              <div className="w-[50px] md:w-[90px] h-[2px] bg-white  md:mt-1 rounded-full"></div>
              <div className="leading-snug pb-10">
                <h1 className="text-[25px] font-[800] pt-5">
                  Who We Are -What We Do
                </h1>
                <p className="text-[16px]  md:w-[700px] font-[500] ">
                  Our company specializes in providing comprehensive OSS
                  solutions tailored to meet the needs of various industries. We
                  pride ourselves on delivering skilled and reliable
                  professionals who contribute to the seamless execution of
                  operations.
                </p>
                <h1 className="text-[25px]  font-[800] pt-5">
                  Trading & Sourcing
                </h1>
                <p className="text-[16px]  md:w-[700px] font-[500] md:mb-5 ">
                  By in no ecstatic wondered disposal my speaking. Direct wholly
                  valley or uneasy it at really. Sir wish like said dull and
                  need make. Sportsman one bed departure..
                  <Link
                    to="/about"
                    className="text-blue-500 text-[15px] cursor-pointer hover:underline">
                    Readmore
                  </Link>
                </p>
              </div>
            </div>
            {/* Dots */}

            {/* <div className="absolute bottom-4 md:bottom-28 md:right-[35%] flex gap-2">
              {videos.map((_, i) => (
                <div
                  key={i}
                  onClick={() => handleDotClick(i)}
                  className={`w-2 h-2 rounded-full cursor-pointer hidden md:block ${
                    i === currentVideoIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div> */}

            {/* Right side - grid of smaller images with text */}

            <div className=" max-w-[400px] md:h-[300px] grid grid-cols-3 grid-rows-3  gap-x-3 gap-y-2 ">
              {/* EV */}
              <div className="relative rounded-lg  overflow-hidden md:row-span-2   cursor-pointer group   ">
                <img
                  src="sansirong/s1.jpg"
                  alt="EV"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* <div className="absolute bottom-2 left-2 text-white font-bold text-lg sm:text-xl">
                  OSS SERVICES
                </div> */}
              </div>

              {/* 5G */}
              <div className="relative rounded-lg overflow-hidden md:row-span-2 cursor-pointer group ">
                <img
                  src="sansirong/s2.jpg"
                  alt="5G"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* <div className="absolute bottom-2 left-2 text-white font-bold text-lg sm:text-xl">
                  5G
                </div> */}
              </div>

              {/* IOT & Smart application */}
              <div className="relative rounded-lg overflow-hidden cursor-pointer group  ">
                <img
                  src="sansirong/s3.jpg"
                  alt="IOT & Smart application"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* <div className="absolute bottom-2 left-2 text-white font-semibold text-sm sm:text-base leading-snug">
                  IOT & Smart <br /> application
                </div> */}
              </div>

              {/* PEGAVERSE (span 2 columns on sm+, full width on mobile) */}
              <div className="relative rounded-lg overflow-hidden cursor-pointer group ">
                <img
                  src="about/s1.jpg"
                  alt="PEGAVERSE"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* <div className="absolute bottom-2 left-2 text-white font-bold text-lg sm:text-xl">
                  PEGAVERSE
                </div> */}
              </div>

              {/* Computing */}
              <div className="relative rounded-lg md:col-span-2 order-2 overflow-hidden  cursor-pointer group  ">
                <img
                  src="about/s2.jpg"
                  alt="Computing"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* <div className="absolute bottom-2 left-2 text-white font-bold text-lg sm:text-xl">
                  Computing
                </div> */}
              </div>

              {/* News */}
              <div className="relative rounded-lg order-1 md:h-[98px] md:w-[130px] overflow-hidden md:col-span-1 cursor-pointer group aspect-[4/5] sm:aspect-[3/4]">
                <img
                  src="about/s3.jpg"
                  alt="News"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* <div className="absolute bottom-2 left-2 text-white font-bold text-lg sm:text-xl">
                  News
                </div> */}
              </div>
            </div>
            <div className="hidden md:block  absolute cursor-pointer left-28 bottom-5">
              <Link
                to="/about"
                className="flex items-center cursor-pointer justify-center h-full  font-[500] text-4xl">
                Read more
                <MdOutlineArrowForwardIos size={40} className="pt-2 mx-3" />
              </Link>
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

      {/* Section 3 - Blur */}
      {/* <section className="full-section  relative h-screen flex items-center justify-center bg-black ">
        <video
          className="absolute inset-0 w-full h-full object-cover object-[60%_center] md:object-center"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 backdrop-blur-xl animate-bgPulse bg-black" />
        <div className="w-full h-[400px] px-5 md:px-8 md:h-[350px]  mb-14  ">
          <section
            className="relative w-full h-full rotate-2 md:rotate-0 scale-110  bg-white brightness-90 py-16 rounded-tl-[180px] rounded-tr-[20px] rounded-br-[280px] "
            style={{
              backgroundImage: "url('/world.jpg')", // Replace with your image path
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              filter: "brightness(90%)",
            }}>
           
            <div className="text-center">
              <p className="text-blue-500 uppercase tracking-wide text-sm font-semibold">
                Worldwide Experience
              </p>
              
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-center max-w-3xl mx-auto">
              <div>
                <p className="text-blue-500 text-4xl font-bold">250+</p>
                <p className="text-gray-700 text-sm mt-1">OSS</p>
              </div>
              <div>
                <p className="text-blue-500 text-4xl font-bold">10+</p>
                <p className="text-gray-700 text-sm mt-1">Trading</p>
              </div>
              <div>
                <p className="text-blue-500 text-4xl font-bold">20+</p>
                <p className="text-gray-700 text-sm mt-1">Languages</p>
              </div>
            </div>
          </section>
        </div>
      </section> */}

      {/* Section mobile -- 4 and Desktop --hidden - Blur */}

      <section className="full-section md:hidden relative h-screen flex items-center justify-center bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover object-[60%_center] md:object-center"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 backdrop-blur-lg bg-black/40" />
        <div className="relative z-10 text-white text-4xl ">
          <div className=" md:hidden py-3">
            <div className="gap-5 relative rounded-lg grid grid-cols-1 overflow-hidden  shadow-lg">
              {images.map((item, i) => (
                <div
                  key={i}
                  className="relative  rounded-lg  overflow-hidden  cursor-pointer group"
                  onClick={() => setSelectedImage(item)}>
                  <img
                    src={item.src}
                    alt={`Image ${i + 1}`}
                    className="w-[400px] h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="">
            {selectedImage && (
              <div
                className="fixed inset-0 pt-16 bg-black bg-opacity-90 flex md:flex md:flex-col items-center justify-center z-50"
                onClick={() => setSelectedImage(null)}>
                <div className="relative flex flex-col w-[700px]  mx-28  gap-7">
                  <div>
                    <img
                      src={selectedImage.src}
                      alt="Full view"
                      className="w-[500px] md:h-[70vh] h-[200px]  object-contain rounded-lg"
                    />
                    {/* <button
                onClick={() => setSelectedImage(null)}
                className="absolute bottom-2 -right-24 bg-white text-black cursor-pointer rounded-full px-3 py-1 text-sm font-bold">
                <FaTimes className="cursor-pointer" />
              </button> */}

                    <div className="pt-3 w-[400px] mx-auto md-pt-5 ">
                      <h1 className=" bg-gradient-to-r text-[20px] leading-snug from-[#ff2e27] via-[#c2b0af]  to-[#f56560] text-transparent bg-clip-text font-[500]">
                        {selectedImage.title}
                      </h1>
                      <div className=" w-[100px] mt-2 h-1  rounded-full bg-[#ff2e27]"></div>
                      <div className="w-[300px]">
                        {selectedImage.subTitle && (
                          <h1 className="py-3 text-[18px] font-bold">
                            {selectedImage.subTitle}
                          </h1>
                        )}

                        <p className="w-[400px] font-[700]  leading-snug text-[15px] font-mono py-5">
                          {selectedImage.description.split("").slice(0, 310)}
                        </p>
                      </div>
                      {Array.isArray(selectedImage.points) ? (
                        <ul className="text-[14px] leading-snug custom-bullet list-disc pl-5 font-sans md:leading-6">
                          {selectedImage.points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="w-[400px] text-neutral-100 leading-snug text-[15px] font-mono py-5">
                          {selectedImage.points}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* {section 5 services } */}

      {/* <section className="full-section relative h-screen  bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover object-[60%_center] md:object-center"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 backdrop-blur-lg bg-black/40" />
        <div className="absolute top-10 h-full w-full md:px-20 px-5 ">
          <div className="flex flex-col items-center  md:items-start">
            <h1 className="text-white  font-semibold text-3xl pt-28">
              Our services
            </h1>
            <div className="w-20 h-[2px]  rounded-full  bg-white mt-3"></div>
          </div>
          <div className="h-full">
            <Service />
          </div>
        </div>
      </section> */}

      {/* Section mobile -- 6 and Desktop --5 - Blur */}
      <section className="full-section relative h-screen flex items-center justify-center bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover object-[60%_center] md:object-center"
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
