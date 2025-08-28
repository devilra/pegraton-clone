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
import { Link } from "react-router-dom";



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
  {
    name: " Hemachandiran Somaskandan ",

    role: "Technical Manager ( Learning and OSS opertaions)",
    img: "/hr/h1.jpeg",
  },
  {
   
    img: "/hr/h4.jpg",
  },
  {
    img:'/hr/h5.jpg'
  }
];

const partners = [
  {
    img: "/part/new/p1.png",
  },
  {
    img: "/part/new/p2.png",
  },
  {
    img: "/part/new/p3.png",
  },
  {
    img: "/part/new/p4.png",
  },
  {
    img: "/part/new/p5.png",
  },
  {
    img: "/part/new/p6.png",
  },
  {
    img: "/part/new/p7.png",
  },
  {
    img: "/part/new/p8.png",
  },
  {
    img: "/part/new/p9.png",
  },
  {
    img: "/part/new/p10.png",
  },
  {
    img: "/part/new/p11.png",
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

const About = ({t}) => {
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
            backgroundPosition:'center 20%',
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat'
          }}>
          {/* Buttons */}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-2xl md:text-5xl font-bold pt-32 text-white text-center">
          {t('about.head')}
          </h1>
        </div>
      </div>

    

      <div>
        <Clients />
      </div>

      <section className="bg-white py-10 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-black">
          <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">
            Who We Are <span className="text-black">-</span> What We Do
          </h2>
          <p className="mt-4 text-black leading-relaxed">
            Our company specializes in providing comprehensive{" "}
            <span className="font-semibold">OSS</span> solutions tailored to
            meet the needs of various industries. We pride ourselves on
            delivering skilled and reliable professionals who contribute to the
            seamless execution of operations.
          </p>

          {/* Stats */}
          <div className="flex md:justify-center gap-8 font-[400] mt-10 md:mt-20">
            <Link to='/oss' className="space-y-2">
              <h3 className="text-pink-500 text-center text-3xl md:text-4xl font-bold">200+</h3>
              <h4 className="text-sm  md:text-2xl text-center mt-1">OSS</h4>
            </Link>
            <Link to='/language' className="space-y-2">
              <h3 className="text-pink-500 text-center text-3xl md:text-4xl font-bold">12+</h3>
              <h4 className="text-sm md:text-2xl text-center  mt-1">
                Language Interpretation
              </h4>
            </Link>
            <Link to='/trading' className="space-y-2">
              <h3 className="text-pink-500 text-3xl md:text-4xl text-center font-bold">3+</h3>
              <h4 className="text-sm  md:text-2xl  text-center mt-1">Clients trading</h4>
            </Link>
          </div>
        </div>

      
      </section>
      <section className="bg-white py-5 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
        {/* Left Side */}
        <div className="flex-1 order-2">
         <p className="text-gray-700 mt-3 leading-relaxed">
            At Sansirong International Pvt Ltd, we specialize in delivering
            Onsite Support Services (OSS) for leading global and domestic
            organizations. Our team of 200+ highly skilled L1, L2 & L3 engineers
            from diverse disciplines-Mechanical, Electrical, Electronics,
            Automation, and Software Engineering-ensures that our clients
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
              className="w-full h-96 md:w-[300px] object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg text-[#29295e] font-semibold">
                Prasath Sridaran
              </h3>
              <p className="text-sm text-gray-500">Managing Director</p>
            </div>
          </div>
          </div>
          <div className="w-full pt-10 ">
            <div className="grid gap-6 md:gap-5 sm:grid-cols-2 md:flex  ">
              {teamLeaders.map((member, index) => (
                <div
                  key={index}
                  className="bg-white  md:w-[300px] rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-96 md:w-[300px] object-cover"
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
              Our Partners
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
        <section className="py-12 md:hidden overflow-x-hidden bg-gray-50">
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


        <AboutFooter />
      </div>
    </div>
  );
};

export default About;
