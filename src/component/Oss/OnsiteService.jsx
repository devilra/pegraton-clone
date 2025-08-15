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
    <div className="pt-28 md:pt-36 h-screen overflow-y-scroll">
      {/* Navbar */}
      <AboutNavbar />

      {/* Top section with background image */}
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("./oss/auto.webp")' }}>
        {/* Buttons */}
      </div>

      <div className="bg-white  py-10 md:pt-48 px-4 md:px-40">
        <div className="flex flex-col md:flex-row md:justify-between gap-5 md:gap-10 ">
          {/* LEFT SECTION */}
          <div className="">
            <img
              src="./oss/o1.png"
              alt="Factory"
              className="w-full md:w-[500px]  md:h-[650px] rounded-md shadow"
            />
          </div>

          {/* RIGHT SECTION */}
          <div className="md:w-[500px]">
            <p className="text-sm uppercase text-gray-500 font-semibold">
              Onsite Support Service (OSS)
            </p>

            <h3 className="text-2xl font-bold mt-2">Who We Are</h3>
            <p className="text-gray-700 mt-2 leading-relaxed">
              At{" "}
              <span className="font-semibold">
                SANSIRONG INTERNATIONAL PRIVATE LIMITED
              </span>{" "}
              is a leading Contract Development and Manufacturing Organisation
              (CDMO) in the medtech, consumer electronics, and automotive
              industries.
            </p>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Our support ranges from full turnkey services to bespoke
              solutions, backed by over three decades of custom automation and
              precision engineering experience.
            </p>

            <h3 className="text-2xl font-bold mt-6">
              Design Anywhere, Build Anywhere
            </h3>
            <p className="text-gray-700 mt-2 leading-relaxed">
              From concept to commercialisation, our versatile “Design
              Everywhere, Build Anywhere” approach ensures we can innovate and
              develop products globally while manufacturing them at the most
              advantageous locations.
            </p>
          </div>
        </div>

        {/* section -3 */}
        <div className="flex flex-col md:mt-16 md:flex-row md:justify-between gap-5 md:gap-10 ">
          {/* LEFT SECTION */}
          <div className="order-2">
            <img
              src="./oss/02.jpg"
              alt="Factory"
              className="w-full md:w-[500px]  md:h-[650px] rounded-md shadow"
            />
          </div>

          {/* RIGHT SECTION */}
          <div className="md:w-[500px] order-1">
            <p className="text-sm uppercase text-gray-500 font-semibold">
              Scalable Production to Meet Market Demand
            </p>

            <h3 className="text-2xl font-bold mt-2">
              At SANSIRONG INTERNATIONAL PRIVATE LIMITED{" "}
            </h3>
            <p className="text-gray-700 mt-2 leading-relaxed">
              Our production capabilities are highly scalable, allowing us to
              ramp up or down to meet varying market demands efficiently.
            </p>
            <h1 className="text-2xl font-bold mt-2">Cost-Effectiveness</h1>
            <p className="text-sm uppercase text-gray-500 font-semibold">
              At SANSIRONG INTERNATIONAL PRIVATE LIMITED{" "}
            </p>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Our operations are optimized for cost-efficiency, providing
              high-quality products and services at competitive prices. Our
              multiple factory sites across different regions also allow us to
              strategically manage production to minimize tariffs and reduce
              costs for our clients.
            </p>

            <h3 className="text-2xl font-bold mt-6">
              Strategic Headquarters and Factory Locations
            </h3>
            <h1 className="text-sm uppercase text-gray-500 font-semibold">
              At SANSIRONG INTERNATIONAL PRIVATE LIMITED
            </h1>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Headquartered in Singapore, with factory sites in multiple
              locations, we have a strategic edge to serve both Western and
              Eastern markets effectively.
            </p>
          </div>
        </div>

        {/* section-3 */}
        <div className="flex flex-col md:mt-16 md:flex-row md:justify-between gap-5 md:gap-10">
          {/* LEFT SECTION */}
          <div className="">
            <img
              src="./oss/o4.jpg"
              alt="Factory"
              className="w-full md:w-[500px] md:h-[650px] rounded-md shadow"
            />
          </div>

          {/* RIGHT SECTION */}
          <div className="md:w-[500px] ">
            <h3 className="text-2xl font-bold mt-2">
              Planning to Engaging the oss through mobile application
            </h3>
            <p className="text-sm uppercase text-gray-500 font-semibold">
              At SANSIRONG INTERNATIONAL PRIVATE LIMITED
            </p>
            <ul className=" list-inside text-gray-700 mt-2 leading-relaxed">
              <li>Attendance follow-up with Geo-fencing</li>
              <li>Report submissions – Daily, weekly, and Monthly</li>
              <li>Learning Platform</li>
              <li>Assessment platform</li>
              <li>OSS grievance address platform</li>
            </ul>

            <h3 className="text-2xl font-bold mt-6">
              Equip OSS engineers (L1 to L3) with advanced skills in:
            </h3>
            <ul className="list-inside text-gray-700 mt-2 leading-relaxed">
              <li>Automation Systems (PLC, HMI, VFD)</li>
              <li>Electromechanical Maintenance</li>
              <li>Vision System Integration</li>
            </ul>

            <h3 className="text-2xl font-bold mt-6">
              Training Modules Overview
            </h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 leading-relaxed">
              <li>Automation: PLC Basics, Servo Motion, VFD</li>
              <li>
                Electromechanical: Fixture Assembly, Maintenance Protocols
              </li>
              <li>Vision: Camera Setup, Template Matching, Image Parameters</li>
              <li>Debugging: Software Logs, Root Cause Analysis</li>
            </ul>
          </div>
        </div>
      </div>

      {/* section -4  */}

      <div>
        <section className="w-full bg-white">
          <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16 flex flex-col lg:flex-row items-start gap-10">
            {/* Left Text */}
            <div className="flex-1 max-w-xl">
              <h2 className="text-3xl lg:text-4xl font-bold  leading-snug">
                ONSITE SUPPORT <br /> Service (OSS)
              </h2>
              <p className="mt-4 text-sm lg:text-base leading-6 text-neutral-800 text-justify">
                Sansirong International Private Limited offers reliable{" "}
                <b>Onsite Support Services (OSS)</b> to ensure smooth,
                uninterrupted operations at your location. Our skilled
                professionals provide hands‑on technical and operational
                assistance for installation, troubleshooting, maintenance, and
                system upgrades. Whether it’s IT infrastructure, equipment
                setup, or specialized industry support, Sansirong ensures quick
                response times, minimal downtime, and customized
                solutions—delivered right at your doorstep. Empower your
                business with trusted onsite expertise from Sansirong.
              </p>
            </div>

            {/* Right Images */}
            <div className="grid grid-cols-2 gap-4 justify-items-center">
              <img
                src="/oss/o5.webp"
                alt="Top Left"
                className="w-[250px] rounded-lg object-cover"
              />
              <img
                src="/oss/o6.avif"
                alt="Top Right"
                className="w-[400px] max-w-full rounded-lg object-cover"
              />
              <img
                src="/oss/o7.avif"
                alt="Bottom Left"
                className="w-[400px] max-w-full rounded-lg object-cover"
              />
              <img
                src="/oss/o7.webp"
                alt="Bottom Right"
                className="w-[400px] max-w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
      </div>

      {/* <div>
        <h1 className="text-center text-2xl font-bold">Automation</h1>
      </div> */}

      {/* Footer */}
      <AboutFooter />
    </div>
  );
};

export default OnsiteService;
