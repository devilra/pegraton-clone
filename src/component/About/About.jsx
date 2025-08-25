import React, { useState } from "react";
import Slider from "react-slick";
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
import Clients from "../../clients/Clients";

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

const teamLeaders = [
  {
    name: "Vignesh",
    role: "HR Associate",
    img: "/hr/h2.jpeg",
  },
  // {
  //   name: " Hemachandiran Somaskandan ",

  //   role: "Technical Manager ( Learning and OSS opertaions)",
  //   img: "/hr/h1.jpeg",
  // },
  // {
  //   name: "Prasath Sridaran",
  //   role: "Managing Director",
  //   img: "/hr/h3.jpeg",
  // },
];

const partners = [
  {
    img: "/part/1.png",
  },
  {
    img: "/part/2.png",
  },
  {
    img: "/part/3.png",
  },
  {
    img: "/part/4.png",
  },
  {
    img: "/part/5.png",
  },
  {
    img: "/part/6.png",
  },
  {
    img: "/part/7.png",
  },
  {
    img: "/part/8.png",
  },
  {
    img: "/part/9.png",
  },
  {
    img: "/part/10.png",
  },
  {
    img: "/part/11.png",
  },
];

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5, // Desktop default
  slidesToScroll: 1,
  autoplay: true,
  speed: 1500,
  autoplaySpeed: 3000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 768, // Mobile screen
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const mobSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 3, // Desktop default
  slidesToScroll: 1,
  autoplay: true,
  speed: 1500,
  autoplaySpeed: 3000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 768, // Mobile screen
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

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
          className="bg-cover bg-center brightness-50 bg-no-repeat"
          style={{
            backgroundImage: 'url("./about/a.png")',
            height: "500px",
          }}>
          {/* Buttons */}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-2xl md:text-5xl font-bold text-white text-center">
            About
          </h1>
        </div>
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

      <div>
        <Clients />
      </div>

      <section className="bg-white py-10 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-black">
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Who We Are <span className="text-[#1d2f6f]">-</span> What We Do
          </h2>
          <p className="mt-4 text-black leading-relaxed">
            Our company specializes in providing comprehensive{" "}
            <span className="font-semibold">OSS</span> solutions tailored to
            meet the needs of various industries. We pride ourselves on
            delivering skilled and reliable professionals who contribute to the
            seamless execution of operations.
          </p>

          {/* Stats */}
          <div className="flex md:justify-center gap-8 mt-10 md:mt-20">
            <div>
              <h3 className="text-pink-500 text-3xl font-bold">200+</h3>
              <p className="text-sm text-gray-600 mt-1">OSS</p>
            </div>
            <div>
              <h3 className="text-pink-500 text-3xl font-bold">12+</h3>
              <p className="text-sm text-gray-600 mt-1">
                Language Interpretation
              </p>
            </div>
            <div>
              <h3 className="text-pink-500 text-3xl font-bold">3+</h3>
              <p className="text-sm text-gray-600 mt-1">Clients trading</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        {/* <div className="flex-1">
          <img
            src="/about/t.jpg" // replace with your actual image path
            alt="Translator Services"
            className="w-full md:h-[500px] rounded-lg shadow-lg"
          />
        </div> */}
      </section>
      <section className="bg-white py-5 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side */}
        <div className="flex-1 order-2">
         <p className="text-gray-700 mt-3 leading-relaxed">
            At Sansirong International Pvt Ltd, we specialize in delivering
            Onsite Support Services (OSS) for leading global and domestic
            organizations. Our team of 200+ highly skilled L1, L2 & L3 engineers
            from diverse disciplines — Mechanical, Electrical, Electronics,
            Automation, and Software Engineering — ensures that our clients
            achieve uninterrupted operations, higher efficiency, and faster
            execution.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
     Engineers (Frontline Support): Handle first-level troubleshooting, preventive maintenance, and basic operational support to ensure smooth day-to-day functioning.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
       Engineers (Expert Support): Provide high-level technical expertise, root cause analysis, design improvements, and advanced automation/software solutions.
          </p>
         
        </div>

        {/* Right Side */}
        {/* <div className="flex-1 order-1">
          <img
            src="/about/t2.jpg" // replace with your actual image path
            alt="Translator Services"
            className="w-full md:h-[500px] rounded-lg shadow-lg"
          />
        </div> */}
      </section>

      <section className="py-12 md:mt-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#29295e]  mb-10">
            Meet Our Team
          </h2>
          <div className="flex justify-center">
            <div className="bg-white md:max-w-[300px]  flex flex-col items-center justify-center  rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <img
              src="/hr/h3.jpeg"
              alt="Managing Director"
              className="w-full h-64 md:w-[300px] object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg text-[#29295e] font-semibold">
                Prasath Sridaran
              </h3>
              <p className="text-sm text-gray-500">Managing Director</p>
            </div>
          </div>
          </div>
          <div className="w-full flex justify-center pt-10">
            <div className="grid gap-6 md:gap-5 sm:grid-cols-2 md:flex  ">
              {teamLeaders.map((member, index) => (
                <div
                  key={index}
                  className="bg-white md:w-[300px] rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-64 md:w-[300px] object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-lg text-[#29295e] font-semibold">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <section className="py-12 hidden md:block mt-32 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#29295e] mb-10">
              Our Parteners
            </h2>
            <Slider {...settings}>
              {partners.map((member, index) => (
                <div key={index} className="px-4">
                  <div className=" overflow-hidden  transition duration-300">
                    <img src={member.img} className="h-[150px] object-cover" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
        <section className="py-12 md:hidden bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-black mb-10">
              Our Parteners
            </h2>
            <Slider {...mobSettings}>
              {partners.map((member, index) => (
                <div key={index} className="px-4">
                  <div className=" overflow-hidden  transition duration-300">
                    <img src={member.img} className="h-[100px]  object-cover" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </section>

      <div>
        {/* <section className="bg-[#f8fcff] py-16">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h4 className="text-[#1e3a8a] text-lg font-semibold">
              Testimonial
            </h4>
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
        </section> */}

        <AboutFooter />
      </div>
    </div>
  );
};

export default About;
