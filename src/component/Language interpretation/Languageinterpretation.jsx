import React, { useState } from "react";
import AboutNavbar from "../About/AboutNavbar";
import AboutFooter from "../About/AboutFooter";
import { Link } from "react-router-dom";

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

const serve = [
  "Manufacturing & Engineering",
  "Automotive & Aerospace",
  "Healthcare & Pharma",
  "IT & Software",
  "Education & Training",
  "International Trade & Business",
];

const colors = [
  { bg: "bg-indigo-100", text: "text-indigo-700", border: "border-indigo-400" },
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
  { bg: "bg-orange-100", text: "text-orange-700", border: "border-orange-400" },
];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const OnsiteService = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className=" h-screen overflow-y-scroll">
      {/* Navbar */}
      {/* <AboutNavbar /> */}

      {/* Top section with background image */}
      {/* <div
        className="bg-cover bg-center brightness-50 bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://media.istockphoto.com/id/1032296056/photo/young-woman-and-man-in-headphones-learning-different-languages-communicating.jpg?s=612x612&w=0&k=20&c=-lgeXoB7t8Uwp5gIRkZxhcgIezrYu3wIosP2_sWBIew=")',
          height: "400px",
        }}></div> */}

      <div className="relative">
        <div className="absolute top-0 left-0 w-full z-20">
          <AboutNavbar />
        </div>
        <div
          className="bg-cover  top-14 bg-center brightness-50 bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/1032296056/photo/young-woman-and-man-in-headphones-learning-different-languages-communicating.jpg?s=612x612&w=0&k=20&c=-lgeXoB7t8Uwp5gIRkZxhcgIezrYu3wIosP2_sWBIew=")',
            height: "400px",
          }}>
          {/* Buttons */}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white text-center">
            Language Interpretation Services
          </h1>
        </div>
      </div>

      {/* <h1 className="hidden md:block md:text-4xl font-bold px-5 pt-20">
        Language Interpretation :
      </h1> */}

      {/* section--1 */}

      <div className="bg-white  py-10 md:pt-20 px-4 md:pl-32 md:pr-24">
        <div className="">
          {/* LEFT SECTION */}
          {/* <div className="">
            <img
              src="./launguage/l1.jpg"
              alt="Factory"
              className="w-full md:w-[500px]  md:h-[650px] rounded-md shadow"
            />
          </div> */}

          {/* RIGHT SECTION */}
          <div className="">
            {/* <p className="text-sm uppercase text-gray-500 font-semibold">
              Language Interpretation Services
            </p> */}

            <h3 className="text-2xl py-2 font-bold mt-2">
              Breaking Barriers, Building Connections
            </h3>
            <p className="text-gray-700 mt-2 leading-relaxed">
              At Sansirong International Pvt Ltd, we understand the power of
              clear communication. In today’s global business environment,
              language should never be a barrier. Our professional
              interpretation services ensure seamless communication between
              businesses, partners, and clients across borders.
            </p>

            <h3 className="text-2xl font-bold py-2 mt-2">
              Our Interpretation Solutions
            </h3>

            <p className="text-gray-700 mt-2 leading-relaxed">
              Onsite Interpretation – Expert interpreters available for
              meetings, conferences, and factory visits.
            </p>
            <p className="text-gray-700 mt-2 leading-relaxed">
              Remote / Virtual Interpretation – Real-time interpretation support
              for video calls, webinars, and global collaborations.
            </p>
            <p className="text-gray-700 mt-2 leading-relaxed">
              Multilingual Support – Covering major global and regional
              languages to enable cross-cultural communication.
            </p>
            <p className="text-gray-700 mt-2 leading-relaxed">
              {" "}
              Industry-Specific Expertise – Specialized interpreters for
              technical, engineering, manufacturing, and business environments.
            </p>

            <h3 className="text-2xl font-bold py-2 mt-2">
              Why Choose Sansirong?
            </h3>

            <ul className="text-gray-700 mt-2 leading-relaxed custom-list space-y-3">
              <li> Trained & Certified Professional Interpreters</li>
              <li>
                Real-time, Accurate, and Culturally Sensitive Communication
              </li>
              <li>
                Support for Business, Legal, Medical, and Technical discussions
              </li>
              <li>Flexible Engagement: Hourly, Daily, or Long-term support</li>
              <li>Trusted by Industry Leaders for Global Operations</li>
            </ul>

            <h3 className="text-2xl font-bold py-2 mt-2">
              Industries We Serve
            </h3>

            <div className="md:max-w-4xl md:my-20 my-10 gap-5  mx-auto grid grid-cols-2 md:grid-cols-3">
              {serve.map((s, i) => {
                const color = getRandomColor();
                return (
                  <span
                    className={`px-4 md:px-2 inline-block text-center rounded  py-2 md:py-3 text-[13px] md:text-[15px] bg-opacity-40 font-semibold ${color.bg} ${color.text} ${color.border}`}
                    key={i}>
                    {s}
                  </span>
                );
              })}
            </div>
            <h3 className="text-2xl font-bold py-2 mt-2">Call to Action</h3>
            <p className="text-gray-700 mt-2 leading-relaxed md:w-[600px]">
              Seamless communication starts here. Whether you need onsite or
              virtual language interpretation, our experts ensure every word is
              understood.
              <br />
              <span className="pt-5 inline-block text-blue-500 text-[15px] font-[500]">
                <Link to="/careers">Work With Us</Link>
              </span>
              <br />
              <span className="text-blue-500 text-[15px] font-[500]">
                <Link to="/contact">Contact Our Team</Link>
              </span>
            </p>
            {/* <p className="text-gray-700 mt-3 leading-relaxed">
              You deserve to work with the world’s finest interpreters and
              translators. Our linguists must meet the industry’s most rigorous
              standards of excellence.
            </p> */}

            {/* <p className="text-gray-700 mt-2 leading-relaxed">
              Sansirong International Private Limited understands the unique
              language and communication needs of your industry. With expertise
              across sectors such as healthcare, financial services, technology,
              insurance, telecommunications, aerospace, defense, and consumer
              goods, we deliver precise, industry-specific support to ensure
              complete understanding between you and your customers, clients, or
              stakeholders. Trusted by leading organizations, Sansirong is your
              partner in overcoming language and communication
              barriers—enhancing clarity, compliance, and customer satisfaction
              at every level. Discover how we can help your organization
              navigate its communication challenges with confidence.
            </p> */}
          </div>
        </div>

        {/* <div className="flex flex-col md:mt-16 md:flex-row md:justify-between gap-5 md:gap-10 ">
      
          <div className="order-2">
            <img
              src="./launguage/l2.jpg"
              alt="Factory"
              className="w-full md:w-[500px]  md:h-[650px] rounded-md shadow"
            />
          </div>

       
          <div className="md:w-[500px] order-1">
            <p className="text-sm uppercase text-gray-500 font-semibold"></p>

            <h3 className="text-2xl font-bold mt-2">Language Interpretation</h3>
            <p className="text-gray-700 mt-2 leading-relaxed">
              At SANSIRONG INTERNATIONAL PRIVATE LIMITED, we offer certified
              interpretation services across a wide range of national and
              international languages. Our team of expert interpreters brings
              deep industry-specific knowledge, ensuring that every
              communication is accurate, culturally sensitive, and clearly
              understood—no matter the language or context.
            </p>

            <p className="text-sm uppercase text-gray-500 font-semibold">
              Connecting with global clients can be complex—especially when
              real-time multilingual interpretation is involved. Instead of
              juggling multiple language providers, rely on SANSIRONG as your
              single point of contact. Our extensive network of skilled
              interpreters allows us to handle multiple assignments efficiently,
              even on tight schedules, with seamless project coordination.
            </p>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Our track record includes successful interpretation assignments
              across key sectors such as medical, legal, corporate, and
              technical industries. We ensure that every spoken word is
              interpreted with precision, preserving its full meaning and
              context in high-stakes environments.
            </p>

            <p className="text-gray-700 mt-3 leading-relaxed">
              We also provide online interpretation support via secure platforms
              like Zoom, Microsoft Teams, Google Meet, Skype, and more. This
              enables organizations to conduct smooth, multilingual virtual
              meetings—anytime, anywhere—with complete confidence.
            </p>
            <p className="text-gray-700 mt-3 leading-relaxed">
              With over 15 years of proven expertise in translation and
              interpretation services, SANSIRONG INTERNATIONAL PRIVATE LIMITED
              has consistently delivered precise, context-aware, and culturally
              appropriate language solutions. Our long-standing experience
              across diverse industries enables us to support global
              communication needs with accuracy, professionalism, and
              confidence.
            </p>
          </div>
        </div> */}
        {/* 
        <div className="flex flex-col md:mt-16 md:flex-row md:justify-between gap-5 md:gap-10">
        
          <div className="">
            <img
              src="./launguage/l3.png"
              alt="Factory"
              className="w-full md:w-[500px] md:h-[650px] rounded-md shadow"
            />
          </div>

       
          <div className="md:w-[500px] ">
            <h1 className="text-2xl md:text-4xl py-5 font-extrabold mt-2">
              Types of Interpretations offered:
            </h1>
            <h3 className="text-2xl font-bold mt-2">On-Site Interpretation</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Ensure smooth and effective communication during face-to-face
              meetings with our professional on-site interpreters. SANSIRONG
              provides reliable and cost-effective language support for
              interactions with international clients, partners, and employees.
            </p>

            <h3 className="text-2xl font-bold mt-2">
              Online / Remote Interpretation
            </h3>
            <p className=" list-inside text-gray-700 mt-2 leading-relaxed">
              Conduct virtual meetings, webinars, and international
              collaborations with ease through our remote interpretation
              services. Our expert interpreters help you engage confidently with
              global audiences on platforms like Zoom, Google Meet, Skype, and
              more.
            </p>

            <h3 className="text-2xl font-bold mt-6">Escort Interpretation</h3>
            <p className=" list-inside text-gray-700 mt-2 leading-relaxed">
              Traveling for business? Our escort interpreters accompany you on
              domestic or international trips to support meetings, conferences,
              factory visits, and local engagements—ensuring you’re understood
              clearly at every step.
            </p>
            <h3 className="text-2xl font-bold mt-6">
              Training Interpretation – Products & Services
            </h3>
            <p className=" list-inside text-gray-700 mt-2 leading-relaxed">
              Deliver effective training to global employees or customers.
              Whether it’s product knowledge or service briefings, our
              interpreters ensure your message is accurately conveyed across
              language barriers.
            </p>
            <h3 className="text-2xl font-bold mt-6">Fast Email Translation</h3>
            <p className=" list-inside text-gray-700 mt-2 leading-relaxed">
              Get your emails translated quickly and precisely by native
              translators. Ideal for business communication, these translations
              come with a fast turnaround and competitive pricing.
            </p>
            <h1 className="text-2xl font-bold mt-6">Appointment Scheduling</h1>
            <p className=" list-inside text-gray-700 mt-2 leading-relaxed">
              Let SANSIRONG streamline your international engagements. We help
              schedule meetings with global clients and associates—ensuring
              timing, language, and cultural etiquette are all in sync.
            </p>
            <h1 className="text-2xl font-bold mt-6">
              Market Assessment & Research
            </h1>
            <p className=" list-inside text-gray-700 mt-2 leading-relaxed">
              Entering a new market? Our interpreters assist in audience
              research and market analysis, helping you gather insights and
              understand regional business dynamics more effectively.
            </p>
          </div>
        </div> */}
        {/* <div className="flex flex-col md:mt-16 md:flex-row md:justify-between gap-5 md:gap-10">
          <div className="order-2">
            <img
              src="./launguage/l4.jpg"
              alt="Factory"
              className="w-full md:w-[500px] md:h-[650px] rounded-md shadow"
            />
          </div>

          <div className="md:w-[500px] order-1 ">
            <h1 className="text-2xl md:text-4xl py-5 font-extrabold mt-2">
              Staff Recruitment & Assessment
            </h1>
            <h3 className="text-2xl font-bold mt-2">On-Site Interpretation</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Simplify hiring across borders. We provide interpretation and
              translation support for interviews, CV reviews, and application
              assessments, ensuring clear communication throughout your
              recruitment process.
            </p>

            <h3 className="text-2xl font-bold mt-2">Business Meetings</h3>
            <p className=" list-inside text-gray-700 mt-2 leading-relaxed">
              Bring our interpreters to your high-stakes business meetings for
              accurate real-time language support. We help facilitate foreign
              negotiations, agreements, and partnerships without
              miscommunication.
            </p>

            <h3 className="text-2xl font-bold mt-6">Conferences</h3>
            <p className=" list-inside text-gray-700 mt-2 leading-relaxed">
              Participating in global conferences is easier than ever. Our
              interpreters help you communicate effectively with international
              clients, investors, and stakeholders, ensuring your voice is
              heard.
            </p>
            <h3 className="text-2xl font-bold mt-6">
              Bilingual Secretary Services
            </h3>
            <p className=" list-inside text-gray-700 mt-2 leading-relaxed">
              Hire skilled bilingual secretaries fluent in multiple languages
              and well-versed in cultural nuances. They assist in administrative
              tasks, client communications, and cross-border coordination.
            </p>
            <h3 className="text-2xl font-bold mt-6">Business Negotiations</h3>
            <p className=" list-inside text-gray-700 mt-2 leading-relaxed">
              Confidently navigate international business deals. Our
              interpreters ensure that language doesn’t become a barrier during
              critical negotiations and contract discussions.
            </p>
            <h1 className="text-2xl font-bold mt-6">Business Trip Planning</h1>
            <p className=" list-inside text-gray-700 mt-2 leading-relaxed">
              Plan your international business trips with ease. From booking
              flights and accommodations to arranging meetings, our interpreters
              help make your travel organized and culturally smooth.
            </p>
            <h1 className="text-2xl font-bold mt-6">
              Product & Material Sourcing
            </h1>
            <p className=" list-inside text-gray-700 mt-2 leading-relaxed">
              Looking to import goods or materials? Our interpreters assist with
              sourcing, supplier communication, and logistics coordination,
              ensuring clarity in every step of your global procurement.
            </p>
            <h1 className="text-2xl font-bold mt-6">Exhibition Hosting</h1>
            <p className=" list-inside text-gray-700 mt-2 leading-relaxed">
              Host impactful exhibitions with interpretation support from
              SANSIRONG. We help you connect with both local and foreign
              audiences, building your brand on a global stage.
            </p>
          </div>
        </div> */}
      </div>

      {/* <div>
        <section className="w-full bg-white">
          <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16 flex flex-col lg:flex-row items-start gap-10">
            
            <div className="flex-1 max-w-xl">
              <h2 className="text-3xl lg:text-4xl font-bold  leading-snug">
                Language Interpretation
              </h2>
              <p className="mt-4 text-sm lg:text-base leading-6 text-neutral-800 text-justify">
                The need for language access is unpredictable. Our solutions
                meet your demands without fail, no matter how large or
                unexpected they may be.
              </p>
              <p>
                Residents and customers across diverse communities speak
                hundreds of languages—and Sansirong International Private
                Limited is committed to making communication seamless and
                inclusive. With the introduction of Sansirong’s real-time
                language support services, organizations can now connect with
                customers in their preferred language through instant access to
                live interpreters. Whether in public service, healthcare,
                finance, or retail, Sansirong ensures that language is never a
                barrier. Now, you can truly say: We speak your language.
              </p>
            </div>

            
            <div className="grid grid-cols-2 gap-4 justify-items-center">
              <img
                src="/launguage/l5.jpg"
                alt="Top Left"
                className="w-[250px] rounded-lg object-cover"
              />
              <img
                src="/launguage/l6.jpg"
                alt="Top Right"
                className="w-[400px] max-w-full rounded-lg object-cover"
              />
              <img
                src="/launguage/l7.jpg"
                alt="Bottom Left"
                className="w-[400px] max-w-full rounded-lg object-cover"
              />
              <img
                src="/launguage/l8.jpg"
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
