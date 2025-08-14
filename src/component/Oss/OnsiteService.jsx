import React, { useState } from "react";
import AboutNavbar from "../About/AboutNavbar";
import AboutFooter from "../About/AboutFooter";

const data = [
  {
    title: "Assembly Automation",
    content:
      "Bizten provides manufacturers with turnkey solutions customized to their customers’ specific needs, from single products to entire production lines, from design to completion. We help customers set up semi-automatic or fully automatic assembly lines for their products, and our experts have rich experience in process automation including linking, repairing, tapping, laser cutting, laser welding, laser marking, welding, hardening. , heat setting, pick and place, gluing, polishing, printing, scanning, plugging, laminating and cleaning.We follow an integrated and innovative approach to bring greater value to customers, including high productivity, high efficiency, superior quality, low cost, high safety operation and better return on investment.Our expertise covers a broad spectrum in the consumer electronics, automotive, telecommunications, medical, semiconductor and new energy sectors.",
  },
  {
    title: "Testing Automation",
    content:
      "Bizten provides testing solutions tailored to customer needs. Our products primarily support but are not limited to IT, FCT, audio, camera, connectivity, electronics, kinematics, LED, power, sensor and touch testing applications. Test Manager is extensible and modular in size and functionality. Our expertise covers a broad spectrum in the consumer electronics, automotive, telecommunications, medical, semiconductor and new energy sectors.",
  },
  {
    title: "Inspection Automation",
    content:
      "Bizten specializes in developing a complete solution for inspection requirements including aesthetics, size and functionality. With extensive and diverse combined experience in the design and manufacture of automated test equipment, our team provides innovative solutions that exceed customer expectations. Our expertise covers a broad spectrum in the consumer electronics, automotive, telecommunications, medical, semiconductor and new energy sectors.",
  },
  {
    title: "Packing Automation",
    content:
      "Bizten provides innovative and intelligent packaging solutions, from simple to complex requirements, semi-automatic or fully automatic depending on customer needs. Our equipment is flexible and scalable enough to keep up with rapidly changing manufacturing environments. Our expertise covers a broad spectrum in the consumer electronics, automotive, telecommunications, medical, semiconductor and new energy sectors.",
  },
  {
    title: "Intelligent Factory",
    content:
      "Bizten provides manufacturers with a complete solution to set up a smart factory, including but not limited to smart equipment, smart warehouse, smart logistics, IoT solutions industrial, manufacturing order processing systems, big data and enterprise resource planning. The system uses advanced technology. We provide customized turnkey solutions and help customers grow and compete in the global market by transforming their manufacturing processes to SMART. Our expertise covers a broad spectrum in the consumer electronics, automotive, telecommunications, medical, semiconductor and new energy sectors.",
  },
  {
    title: "Fixtures and Spare Parts",
    content:
      "Bizten can support you throughout the product development process for your assembly and parts needs, from simple to complex, at very competitive prices. Luminaires are holding or supporting devices used in the manufacturing industry and we are proficient in making luminaires for most manufacturing processes in the industries in which we operate.",
  },
];

const OnsiteService = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="pt-28 md:pt-36 overflow-y-scroll h-screen ">
      <div>
        <AboutNavbar />
      </div>
      <div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-5 px-20 mb-6">
          {data.map((item, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={`py-2 border text-[14px] rounded-md font-semibold transition-all duration-200 
              ${
                activeIndex === index
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}>
              {item.title}
            </button>
          ))}
        </div>
      </div>
      {/* Content */}
      <div className="">
        <div className=" ">
          <div
            className=""
            style={{
              backgroundImage:
                'url("https://www.biztenent.com/wp-content/uploads/2023/10/595067.jpg")',
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "300px",
            }}>
            <h3 className="text-3xl text-white text-center p-10 font-semibold mb-2">
              {data[activeIndex].title}
            </h3>
          </div>

          <p className="text-gray-700 px-20 py-20">
            {data[activeIndex].content}
          </p>
        </div>
      </div>
      <AboutFooter />
    </div>
  );
};

export default OnsiteService;
