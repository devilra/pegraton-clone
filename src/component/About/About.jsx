import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutNavbar from "./AboutNavbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";

import AboutFooter from "./AboutFooter";

// const sections = [
//   {
//     id: "company",
//     title: "The Company",
//     content: (
//       <div className="space-y-4">
//         <h2 className="text-3xl font-semibold">The Company</h2>
//         <h1 className="text-2xl ">Design and Manufacturing Service</h1>
//         <p className="text-base leading-7">
//           PEGATRON Corporation (hereafter referred to as “PEGATRON”) was founded
//           on January 1, 2008. With abundant product development experience and
//           vertically integrated manufacturing, we are committed to providing
//           clients with innovative design, systematic production and
//           manufacturing service in order to comprehensively and efficiently
//           satisfy all of our customers’ needs.
//         </p>
//         <img src="/about/p.jpg" className="h-[100px]" alt="The company" />
//         <p className="text-base leading-7">
//           Our outstanding computer services include designing computers,
//           computer hardware, portable devices and networks and associated
//           peripheral devices for others related to operational and supporting
//           services; computer information technology and computer programming
//           consultation
//           <span className="inline-block py-10">
//             Additionally, we provide many flexible and reliable intangible
//             products, including installation, repair or maintenance of computer
//             related products, portable devices, telephone, household appliance,
//             networks associated peripheral devices, and etc.
//           </span>
//         </p>
//       </div>
//     ),
//   },
//   {
//     id: "vision",
//     title: "Our Vision",
//     content: (
//       <div className="space-y-4">
//         <h2 className="text-3xl font-semibold">Our Vision</h2>
//         <p className="text-base leading-7">
//           With our corporate spirit of “Navigate the future”, PEGATRON seeks to
//           grasp people’s expectations and desires about the future using
//           cutting-edge, constantly-innovating technology. Furthermore, we strive
//           to materialize and satisfy them in order to sculpt a more magnificent
//           and convenient new world.
//         </p>
//         <img src="/about/v.jpg" alt="Vision" className="h-[100px]" />
//       </div>
//     ),
//   },
// ];

const testimonials = [
  {
    name: "Gina Maldonado",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet cursus volutpat. Aliquam sit amet ligula et justo tincidunt laoreet non vitae lorem. Aliquam porttitor tellus enim, eget commodo augue porta ut. Maecenas lobortis ligula vel tellus sagittis ullamcorper vestibulum pellentesque cursutu.",
    rating: 4.5,
  },
  {
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Another testimonial example text here with the same layout and style.",
    rating: 5,
  },
];

const teamMembers = [
  {
    name: "Jade Bennett",
    role: "Founder",
    img: "/about/j.jpg",
  },
  {
    name: "Luther Owen",
    role: "Psychologist",
    img: "/about/k.jpg",
  },
  {
    name: "Willie Barnes",
    role: "Business Manager",
    img: "/about/l.jpg",
  },
  {
    name: "Emilie Lindsay",
    role: "Advertiser",
    img: "/about/m.jpg",
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
      {/* <div className="px-3 pb-32 md:px-10">
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
      </div> */}
      <section className="bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side */}
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-800">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d2f6f] mt-2">
            Who We Are <span className="text-[#1d2f6f]">-</span> What We Do
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our company specializes in providing comprehensive{" "}
            <span className="font-semibold">OSS</span> solutions tailored to
            meet the needs of various industries. We pride ourselves on
            delivering skilled and reliable professionals who contribute to the
            seamless execution of operations.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mt-10">
            <div>
              <h3 className="text-pink-500 text-3xl font-bold">100%</h3>
              <p className="text-sm text-gray-600 mt-1">OSS</p>
            </div>
            <div>
              <h3 className="text-pink-500 text-3xl font-bold">5k+</h3>
              <p className="text-sm text-gray-600 mt-1">
                Language Interpretation
              </p>
            </div>
            <div>
              <h3 className="text-pink-500 text-3xl font-bold">450</h3>
              <p className="text-sm text-gray-600 mt-1">Trading & Sourcing</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <img
            src="/about/t.jpg" // replace with your actual image path
            alt="Translator Services"
            className="w-full md:h-[500px] rounded-lg shadow-lg"
          />
        </div>
      </section>
      <section className="bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side */}
        <div className="flex-1 order-2">
          <p className="text-sm font-semibold text-gray-800">Trading</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1d2f6f] mt-2">
            Trading & Sourcing
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            By in no ecstatic wondered disposal my speaking. Direct wholly
            valley or uneasy it at really. Sir wish like said dull and need
            make. Sportsman one bed departure rapturous situation disposing his.
            Off say yet ample ten ought hence. Depending in newspaper an
            september do existenc.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Sir wish like said dull and need make. Sportsman one bed departure
            rapturous situation disposing his. Off say yet ample ten ought
            hence. Depending in newspaper an september do existenc.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex-1 order-1">
          <img
            src="/about/t2.jpg" // replace with your actual image path
            alt="Translator Services"
            className="w-full md:h-[500px] rounded-lg shadow-lg"
          />
        </div>
      </section>
      <section className="bg-[#f8fcff] py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h4 className="text-[#1e3a8a] text-lg font-semibold">Testimonial</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-10">
            What People Think and experienced
          </h2>

          <Swiper
            modules={[Navigation]}
            navigation={true}
            loop={true}
            className="pb-10">
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 rounded-full mb-4"
                  />
                  <h3 className="text-[#1e3a8a] font-semibold">{t.name}</h3>
                  <div className="flex justify-center my-3 text-yellow-500">
                    {Array.from({ length: Math.floor(t.rating) }).map(
                      (_, i) => (
                        <FaStar key={i} />
                      )
                    )}
                    {t.rating % 1 !== 0 && <FaStarHalfAlt />}
                  </div>
                  <p className="text-gray-500 max-w-2xl">{t.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="py-16 px-6 md:px-20 lg:px-28 bg-white">
        <div className="grid md:grid-cols-[300px_1fr] gap-10">
          {/* Left Text Section */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Trading</h2>
            <p className="text-gray-600 leading-relaxed">
              By no on ecstatic wondered disposal my speaking. Direct wholly
              valley or uneasy it at really. Sir wish like said dull and need
              make. Sportsman do offending supported extremity breakfast by
              listening. Off say yet ample ten ought hence. Depending in
              newspaper an september do existence.
            </p>
          </div>

          {/* Team Members */}
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className={`rounded-md object-cover w-full h-[300px] ${
                    (index === 1 && "mt-10") || (index === 3 && "mt-10")
                  } `}
                />
                <h3 className="mt-4 font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-pink-500">{member.role}</p>
                <div className="flex justify-center gap-3 mt-2">
                  <a
                    href="#"
                    className="border border-pink-300 text-pink-500 p-2 rounded hover:bg-pink-100">
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="border border-pink-300 text-pink-500 p-2 rounded hover:bg-pink-100">
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="border border-pink-300 text-pink-500 p-2 rounded hover:bg-pink-100">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div>
        <AboutFooter />
      </div>
    </div>
  );
};

export default About;
