import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutNavbar from "./AboutNavbar";

const sections = [
  {
    id: "company",
    title: "The Company",
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold">The Company</h2>
        <h1 className="text-2xl ">Design and Manufacturing Service</h1>
        <p className="text-base leading-7">
          PEGATRON Corporation (hereafter referred to as “PEGATRON”) was founded
          on January 1, 2008. With abundant product development experience and
          vertically integrated manufacturing, we are committed to providing
          clients with innovative design, systematic production and
          manufacturing service in order to comprehensively and efficiently
          satisfy all of our customers’ needs.
        </p>
        <img src="/about/p.jpg" className="h-[100px]" alt="The company" />
        <p className="text-base leading-7">
          Our outstanding computer services include designing computers,
          computer hardware, portable devices and networks and associated
          peripheral devices for others related to operational and supporting
          services; computer information technology and computer programming
          consultation
          <span className="inline-block py-10">
            Additionally, we provide many flexible and reliable intangible
            products, including installation, repair or maintenance of computer
            related products, portable devices, telephone, household appliance,
            networks associated peripheral devices, and etc.
          </span>
        </p>
      </div>
    ),
  },
  {
    id: "vision",
    title: "Our Vision",
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold">Our Vision</h2>
        <p className="text-base leading-7">
          With our corporate spirit of “Navigate the future”, PEGATRON seeks to
          grasp people’s expectations and desires about the future using
          cutting-edge, constantly-innovating technology. Furthermore, we strive
          to materialize and satisfy them in order to sculpt a more magnificent
          and convenient new world.
        </p>
        <img src="/about/v.jpg" alt="Vision" className="h-[100px]" />
      </div>
    ),
  },
];

const About = () => {
  const [active, setActive] = useState("vision");
  return (
    <div className="overflow-y-scroll h-screen">
      {/* Navbar */}
      <div className="relative">
        <div className="absolute top-0 left-0 w-full z-20">
          <AboutNavbar />
        </div>

        {/* Background Image */}
        <div
          className="w-full h-[200px] md:h-[300px] bg-cover bg-center brightness-50"
          style={{
            backgroundImage: "url('/about/a.png')",
          }}></div>
      </div>

      {/* Content */}
      <div className="px-3 pb-32 md:px-10">
        <div className="px-5 md:px-16">
          <h1 className="text-2xl pt-10 text-black [text-shadow:0_0_0] [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#000] font-[400]">
            ABOUT
          </h1>
          <div className="w-20 h-[3px] bg-black rounded-full mt-2"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {sections.map((s) => {
                const isActive = active === s.id;
                return (
                  <div className=" flex flex-col ">
                    <button
                      key={s.id}
                      className={`
                        "group w-full rounded-2xl border px-4 py-3 text-left transition-all duration-200 ${
                          isActive
                            ? "bg-gray-200 border-gray-300 shadow-inner"
                            : "hover:bg-gray-50"
                        }
                      
                      `}>
                      {s.title}
                    </button>
                  </div>
                );
              })}
            </div>
            <div>
              <p>Our company is very use full</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
