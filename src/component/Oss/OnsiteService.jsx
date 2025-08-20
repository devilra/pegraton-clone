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

const companies = [
  "TEAL",
  "TATA",
  "Foxconn",
  "Pegatron",
  "ASM",
  "Bharat Forge",
  "Great Ventures",
  "JLK",
  "Indo-MIM",
  "J-Axis",
  "Salcomp",
  "Luster",
];

const colors = [
  { bg: "bg-red-100", text: "text-red-700", border: "border-red-400" },
  { bg: "bg-green-100", text: "text-green-700", border: "border-green-400" },
  { bg: "bg-blue-100", text: "text-blue-700", border: "border-blue-400" },
  {
    bg: "bg-yellow-100",
    text: "text-yellow-700",
    border: "border-yellow-400",
  },
  {
    bg: "bg-purple-100",
    text: "text-purple-700",
    border: "border-purple-400",
  },
  { bg: "bg-pink-100", text: "text-pink-700", border: "border-pink-400" },
  { bg: "bg-teal-100", text: "text-teal-700", border: "border-teal-400" },
];

const OnsiteService = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className=" md:pt-0  h-screen overflow-y-scroll">
      {/* Navbar */}
      <div className="relative">
        <div className="absolute top-0 left-0 w-full z-20">
          <AboutNavbar />
        </div>
        <div
          className="bg-cover  top-14 bg-center brightness-50 bg-no-repeat"
          style={{
            backgroundImage: 'url("./trading/a3.jpg")',
            height: "400px",
          }}>
          {/* Buttons */}
        </div>
      </div>

      {/* Top section with background image */}

      {/* <h1 className="hidden md:block md:text-4xl font-bold px-5 pt-20">
        Onsite Support Service (OSS) :
      </h1> */}

      <div className="bg-white  py-10 md:pt-20 px-4 md:pl-32 md:pr-20">
        {/* className="flex flex-col md:flex-row md:justify-between gap-5 md:gap-10 "> */}
        <div className="">
          {/* LEFT SECTION */}
          <div className="">
            {/* <img
              src="./oss/o1.png"
              alt="Factory"
              className="w-full md:w-[500px]  md:h-[650px] rounded-md shadow"
            /> */}
          </div>

          {/* RIGHT SECTION */}
          <div className="">
            <p className="text-sm uppercase text-gray-500 font-semibold">
              Onsite Support Service (OSS)
            </p>

            <h3 className="text-2xl font-bold mt-2">
              Engineering Excellence, Delivered Onsite.
            </h3>
            {/* <p className="text-gray-700 mt-2 leading-relaxed">
              At{" "}
              <span className="font-semibold">
                SANSIRONG INTERNATIONAL PRIVATE LIMITED
              </span>{" "}
              is a leading Contract Development and Manufacturing Organisation
              (CDMO) in the medtech, consumer electronics, and automotive
              industries.
            </p> */}
            <p className="text-gray-700 mt-3 leading-relaxed">
              At Sansirong International Pvt Ltd, we specialize in delivering
              Onsite Support Services (OSS) for leading global and domestic
              organizations. Our team of 200+ highly skilled L1, L2 & L3
              engineers from diverse disciplines — Mechanical, Electrical,
              Electronics, Automation, and Software Engineering — ensures that
              our clients achieve uninterrupted operations, higher efficiency,
              and faster execution.
            </p>

            <h3 className="text-2xl font-bold mt-6">
              Our Esteemed OSS Clients
            </h3>
            {/* <p className="text-gray-700 mt-2 leading-relaxed">
              From concept to commercialisation, our versatile “Design
              Everywhere, Build Anywhere” approach ensures we can innovate and
              develop products globally while manufacturing them at the most
              advantageous locations.
            </p> */}
            <h1 className="text-gray-500 py-5 text-xl font-bold">
              We proudly support some of the world’s most respected companies:
            </h1>
            <div className="md:max-w-4xl md:my-20 gap-5  mx-auto grid grid-cols-4 md:grid-cols-6">
              {companies.map((company, index) => {
                const color = getRandomColor();
                return (
                  <span
                    key={index}
                    className={`px-4 inline-block text-center rounded  py-2 text-sm font-semibold ${color.bg} ${color.text} ${color.border}`}>
                    {company}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* section -3 */}
        <div className="flex flex-col md:mt-16 md:flex-row md:justify-between gap-5 md:gap-10 ">
          {/* LEFT SECTION */}
          {/* <div className="order-2">
            <img
              src="./oss/02.jpg"
              alt="Factory"
              className="w-full md:w-[500px]  md:h-[650px] rounded-md shadow"
            />
          </div> */}

          {/* RIGHT SECTION */}
          <div className="">
            {/* <p className="text-sm uppercase text-gray-500 font-semibold">
              Scalable Production to Meet Market Demand
            </p> */}

            <h3 className="text-2xl font-bold mt-2">Our Engineering Levels</h3>
            <p className="text-gray-700 mt-2 leading-relaxed">
              Engineers (Frontline Support): Handle first-level troubleshooting,
              preventive maintenance, and basic operational support to ensure
              smooth day-to-day functioning.
            </p>
            {/* <h1 className="text-2xl font-bold mt-2">Cost-Effectiveness</h1> */}
            <p className="text-sm md:text-lg uppercase py-5 leading-[30px] text-gray-500 font-semibold">
              Engineers (Advanced Support): Manage complex issues, system
              integration, process optimization, and detailed problem-solving.
            </p>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Engineers (Expert Support): Provide high-level technical
              expertise, root cause analysis, design improvements, and advanced
              automation/software solutions.
            </p>

            {/* <h3 className="text-2xl font-bold mt-6">
              Strategic Headquarters and Factory Locations
            </h3> */}
            <h1 className="text-sm uppercase text-gray-500 font-semibold">
              Digital Tools & Workforce Benefits
            </h1>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Dedicated OSS Application – for real-time monitoring of
              attendance, performance reports, and learning modules.
            </p>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Attendance Bonus & Skill Allowance – rewarding engineers for
              discipline, upskilling, and consistent performance.
            </p>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Continuous Learning & Development – inbuilt training programs to
              strengthen technical and professional capabilities.
            </p>
            <h3 className="text-2xl font-bold mt-2">
              Why Choose Sansirong OSS?
            </h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Multi-disciplinary Expertise – end-to-end support across
              engineering and technology.
            </p>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Layered Support Structure – L1, L2 & L3 engineers to cover every
              level of client need.
            </p>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Scalable Workforce – deployable teams tailored to project
              requirements.
            </p>

            <p className="text-gray-700 mt-3 leading-relaxed">
              Proven Industry Trust – delivering results for world-class
              clients.
            </p>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Operational Excellence – ensuring reliability, quality, and
              seamless execution.
            </p>
            <p className="text-gray-700 mt-3 leading-relaxed">
              With Sansirong OSS, you gain a trusted partner committed to
              delivering engineering excellence onsite, keeping your business
              operations strong and future-ready
            </p>
          </div>
        </div>

        {/* section-3 */}
        <div className="">
          {/* LEFT SECTION */}
          {/* <div className="">
            <img
              src="./oss/o4.jpg"
              alt="Factory"
              className="w-full md:w-[500px] md:h-[650px] rounded-md shadow"
            />
          </div> */}

          {/* RIGHT SECTION */}
          {/* <div className="">
            <h3 className="text-2xl font-bold mt-2">Our Engineering Levels</h3>
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
          </div> */}
        </div>
      </div>

      {/* section -4  */}

      {/* <div>
        <section className="w-full bg-white">
          <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16 flex flex-col lg:flex-row items-start gap-10">
           
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

          
            <div className="grid grid-cols-2 gap-4 justify-items-center">
              <img
                src="/oss/p1.png"
                alt="Top Left"
                className="w-[250px] rounded-lg object-cover"
              />
              <img
                src="/oss/p2.png"
                alt="Top Right"
                className="w-[400px] max-w-full rounded-lg object-cover"
              />
              <img
                src="/oss/p3.png"
                alt="Bottom Left"
                className="w-[400px] max-w-full rounded-lg object-cover"
              />
              <img
                src="/oss/p4.png"
                alt="Bottom Right"
                className="w-[400px] max-w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
      </div> */}

      {/* Footer */}
      <AboutFooter />
    </div>
  );
};

export default OnsiteService;
