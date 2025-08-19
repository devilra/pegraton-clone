import React, { useState } from "react";
import AboutNavbar from "../About/AboutNavbar";
import AboutFooter from "../About/AboutFooter";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// const data = [
//   {
//     title: "Assembly Automation",
//     content:
//       "Bizten provides manufacturers with turnkey solutions customized to their customers’ specific needs, from single products to entire production lines, from design to completion. We help customers set up semi-automatic or fully automatic assembly lines for their products, and our experts have rich experience in process automation including linking, repairing, tapping, laser cutting, laser welding, laser marking, welding, hardening. , heat setting, pick and place, gluing, polishing, printing, scanning, plugging, laminating and cleaning.We follow an integrated and innovative approach to bring greater value to customers, including high productivity, high efficiency, superior quality, low cost, high safety operation and better return on investment.Our expertise covers a broad spectrum in the consumer electronics, automotive, telecommunications, medical, semiconductor and new energy sectors.",
//   },
//   {
//     title: "Testing Automation",
//     content:
//       "Bizten provides testing solutions tailored to customer needs. Our products primarily support but are not limited to IT, FCT, audio, camera, connectivity, electronics, kinematics, LED, power, sensor and touch testing applications. Test Manager is extensible and modular in size and functionality. Our expertise covers a broad spectrum in the consumer electronics, automotive, telecommunications, medical, semiconductor and new energy sectors.",
//   },
//   {
//     title: "Inspection Automation",
//     content:
//       "Bizten specializes in developing a complete solution for inspection requirements including aesthetics, size and functionality. With extensive and diverse combined experience in the design and manufacture of automated test equipment, our team provides innovative solutions that exceed customer expectations. Our expertise covers a broad spectrum in the consumer electronics, automotive, telecommunications, medical, semiconductor and new energy sectors.",
//   },
//   {
//     title: "Packing Automation",
//     content:
//       "Bizten provides innovative and intelligent packaging solutions, from simple to complex requirements, semi-automatic or fully automatic depending on customer needs. Our equipment is flexible and scalable enough to keep up with rapidly changing manufacturing environments. Our expertise covers a broad spectrum in the consumer electronics, automotive, telecommunications, medical, semiconductor and new energy sectors.",
//   },
//   {
//     title: "Intelligent Factory",
//     content:
//       "Bizten provides manufacturers with a complete solution to set up a smart factory, including but not limited to smart equipment, smart warehouse, smart logistics, IoT solutions industrial, manufacturing order processing systems, big data and enterprise resource planning. The system uses advanced technology. We provide customized turnkey solutions and help customers grow and compete in the global market by transforming their manufacturing processes to SMART. Our expertise covers a broad spectrum in the consumer electronics, automotive, telecommunications, medical, semiconductor and new energy sectors.",
//   },
//   {
//     title: "Fixtures and Spare Parts",
//     content:
//       "Bizten can support you throughout the product development process for your assembly and parts needs, from simple to complex, at very competitive prices. Luminaires are holding or supporting devices used in the manufacturing industry and we are proficient in making luminaires for most manufacturing processes in the industries in which we operate.",
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
    img: "/about/m.jpg",
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
    img: "/about/j.jpg",
  },
];

const Trading = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className=" h-screen overflow-y-scroll">
      {/* Navbar */}
      <AboutNavbar />

      {/* Top section with background image */}
      <div
        className="bg-cover bg-center brightness-50 bg-no-repeat"
        style={{ backgroundImage: 'url("./trading/a2.jpg")', height: "400px" }}>
        {/* Buttons */}
      </div>

      <h1 className="hidden md:block md:text-4xl font-bold px-10 pt-20">
        TRADING :
      </h1>

      <div className="bg-white  py-10 md:pt-20 px-4 md:px-40">
        <div className="flex flex-col md:flex-row md:justify-between gap-5 md:gap-10 ">
          {/* LEFT SECTION */}
          <div className="">
            <img
              src="./trading/t1.jpg"
              alt="Factory"
              className="w-full md:w-[500px]  md:h-[650px] rounded-md shadow"
            />
          </div>

          {/* RIGHT SECTION */}
          <div className="md:w-[500px]">
            <p className="text-sm uppercase text-gray-500 font-semibold">
              Trading
            </p>

            <h3 className="text-2xl font-bold mt-2">Trading & Sourcing</h3>
            <p className="text-gray-700 mt-2 leading-relaxed">
              At{" "}
              <span className="font-semibold">
                SANSIRONG INTERNATIONAL PRIVATE LIMITED
              </span>{" "}
              trading company, also known as a mercantile company, is a
              commercial business entity that buys and sells various goods and
              commodities. These companies are involved in various industries
              and are typically responsible for all stages of the supply chain,
              including processing, distribution, and sales. Trading companies
              can specialize in specific business fields or operate across
              multiple industries, often playing a crucial role in connecting
              producers and consumers in the global marketplace. In the context
              of international trade, trading companies are often involved in
              commerce with foreign nations or in overseas territories, handling
              a diverse array of products, from consumer goods to industrial
              materials.
            </p>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Trading companies specialize in international import and export
              services. They act as intermediaries between manufacturers and
              overseas buyers, which is crucial in global trade. Unlike
              manufacturers, trading companies source goods from various
              producers and then sell them to clients worldwide.
            </p>
          </div>
        </div>

        {/* section -3 */}
        <div className="flex flex-col md:mt-16 md:flex-row md:justify-between gap-5 md:gap-10 ">
          {/* LEFT SECTION */}
          <div className="order-2">
            <img
              src="./trading/t2.jpg"
              alt="Factory"
              className="w-full md:w-[500px]  md:h-[650px] rounded-md shadow"
            />
          </div>

          {/* RIGHT SECTION */}
          <div className="md:w-[500px] order-1">
            <h1 className="text-2xl font-bold mt-2">Trading & Sourcing</h1>
            <h3 className="text-2xl font-bold mt-2">
              At SANSIRONG INTERNATIONAL PRIVATE LIMITED{" "}
            </h3>
            <p className="text-gray-700 mt-2 leading-relaxed">
              A trading company, also known as a mercantile company, is a
              commercial business entity that buys and sells various goods and
              commodities. These companies are involved in various industries
              and are typically responsible for all stages of the supply chain,
              including processing, distribution, and sales. Trading companies
              can specialize in specific business fields or operate across
              multiple industries, often playing a crucial role in connecting
              producers and consumers in the global marketplace. In the context
              of international trade, trading companies are often involved in
              commerce with foreign nations or in overseas territories, handling
              a diverse array of products, from consumer goods to industrial
              materials.
            </p>
          </div>
        </div>

        {/* section-3 */}
        <div className="py-16">
          <h1 className="text-3xl font-bold">
            Should you work with a Trading Company? What are the Types of
            Companies you’ll find while sourcing?
          </h1>
          <p className="text-gray-700 mt-5 md:w-[800px] leading-relaxed">
            If you’re searching for a supplier, you’ll encounter various types
            of companies in China. Be careful when sourcing on Alibaba, Global
            Sources, or similar websites, as many trading companies and
            wholesalers will present themselves as factories. It’s difficult to
            tell from a beginner’s perspective, and it can take a second look to
            tell them apart. Always remember that the best suppliers buy
            directly from the factory, not from a reseller.
          </p>
          <p className="text-gray-700 mt-5 md:w-[800px] leading-relaxed">
            <b>TIP:</b> When a potential supplier sends you a product picture,
            zoom in and see if you can find a logo or factory name. If you can,
            try contacting the factory directly. Likewise, avoid trading
            companies, resellers, and buying offices if you can, and try to do
            business directly with the factory.
          </p>
          <h1 className="text-3xl pt-16 font-bold">
            What types of Companies should you avoid working with?
          </h1>
          <h1 className="text-3xl pt-5 font-bold">Trading companies</h1>
          <p className="text-gray-700 mt-5 md:w-[800px] leading-relaxed">
            Trading companies are middlemen who deal with a factory (or several
            factories) and sell a wide range of items. There are a few cases in
            which it is beneficial to deal with trading companies, specifically
            when you are looking to buy a small quantity of a wide variety of
            products. Trading companies also have a markup on the total cost of
            goods, so you will pay more when dealing with a trading company.
            Trading companies generally act as brokers.
          </p>
          <h1 className="text-3xl pt-5 font-bold">Wholesalers</h1>
          <p className="text-gray-700 mt-5 md:w-[800px] leading-relaxed">
            {" "}
            Dealing with trading companies and wholesalers is similar in nature.
            Still, the critical difference is that wholesalers buy and store the
            product in bulk. Sometimes, they may even import it from other
            countries. However, due to the extra fees associated with
            warehousing and other expenses they incur, they will often be the
            most expensive option.
          </p>
          <h1 className="text-3xl pt-5 font-bold">Resellers</h1>
          <p className="text-gray-700 mt-5 md:w-[800px] leading-relaxed">
            {" "}
            Though not as common, they are similar to wholesalers in that they
            buy their goods from the factory to resell; however, instead of
            buying a large number of items in bulk and storing them until they
            are sold, they will buy the items from the factory as soon as you
            buy the goods from them. The resellers have some similarities with
            the dropshipping business model.
          </p>
          <h1 className="text-3xl pt-5 font-bold">
            What types of Companies should you work with?
          </h1>
          <h1 className="text-3xl pt-10 font-bold">Manufacturers</h1>
          <p className="text-gray-700 mt-5 md:w-[800px] leading-relaxed">
            They are the actual factories that make your products. By dealing
            directly with them, you will not only obtain the best price but also
            have more control over the final product, including its quality.
            Your quality standards will also be significantly improved. If you
            want quality products at the best price, you should go straight to
            the source.
          </p>
          <p className="text-gray-700 mt-5 md:w-[800px] leading-relaxed">
            You should work directly with the factory if you are sourcing one or
            two single products. However, if you are sourcing a wide range of
            products in small quantities, it may be easier to work with a
            trading company. Be aware that you are paying a higher price, as the
            trading company needs to take its cut, but the convenience may be
            worth it.{" "}
          </p>
          <p className="text-gray-700 mt-5 md:w-[800px] leading-relaxed">
            <b>TIP:</b> Not sure if you’re talking to a factory? Ask the
            salesperson to take a photograph of themselves in the factory,
            holding up a piece of paper with your name and date.{" "}
          </p>
        </div>
        <div>
          <section className="bg-[#f8fcff] py-16">
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
          </section>
        </div>
      </div>

      {/* section -4  */}

      {/* <div>
        <section className="py-16 px-6 md:px-20 lg:px-28 bg-white">
          <div className="grid md:grid-cols-[300px_1fr] gap-10">
           
            <div>
              <h2 className="text-3xl font-bold  mb-4">Trading</h2>
              <p className="text-gray-600 leading-relaxed">
                By no on ecstatic wondered disposal my speaking. Direct wholly
                valley or uneasy it at really. Sir wish like said dull and need
                make. Sportsman do offending supported extremity breakfast by
                listening. Off say yet ample ten ought hence. Depending in
                newspaper an september do existence.
              </p>
            </div>

            
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
      </div> */}

      {/* <div>
        <h1 className="text-center text-2xl font-bold">Automation</h1>
      </div> */}

      {/* Footer */}
      <AboutFooter />
    </div>
  );
};

export default Trading;
