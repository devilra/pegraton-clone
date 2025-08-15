import React from "react";
import AboutNavbar from "../About/AboutNavbar";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import AboutFooter from "../About/AboutFooter";

const Contact = () => {
  return (
    <div className="  overflow-y-scroll h-screen ">
      <div>
        <AboutNavbar />
      </div>
      <div
        className="bg-cover bg-center brightness-50 bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://static.vecteezy.com/system/resources/previews/051/166/491/non_2x/communication-concept-with-email-message-box-and-contacts-icons-e-mail-marketing-customer-support-counseling-and-support-hotline-connection-with-modern-network-technology-contact-us-free-photo.jpg")',
          height: "400px",
        }}></div>
      <div className="flex flex-col md:flex-row md:pt-20 items-start justify-center gap-8 px-6 py-12 md:px-16">
        {/* Left Side - Image */}
        <div className="flex-1">
          <img
            src="/contact/school.jpg"
            alt="Office Building"
            className="rounded-xl shadow-lg w-full md:h-[460px] object-cover"
          />
        </div>

        {/* Right Side - Address Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Address Info:
          </h2>

          {/* Phone */}
          <div className="flex items-center mb-3 text-gray-700">
            <FaPhoneAlt className="text-pink-500 mr-3" />
            <span className="text-sm">+91 8610102669</span>
          </div>

          {/* Email */}
          <div className="flex items-center mb-3 text-gray-700">
            <FaEnvelope className="text-pink-500 mr-3" />
            <a
              href="mailto:sanisorgosales@gmail.com"
              className="text-sm hover:underline">
              sanisorgosales@gmail.com
            </a>
          </div>

          {/* Address */}
          <div className="flex items-start mb-6 text-gray-700">
            <FaMapMarkerAlt className="text-pink-500 mr-3 mt-1" />
            <p className="text-sm leading-relaxed">
              4, Hiranandani Park, Padhuravadi Village, Kundrathur Taluk,
              Triveni Nagar, Oragadam Industrial Area, Kancheepuram Tamil Nadu
              603204
            </p>
          </div>

          {/* Google Map */}
          <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.20822487492!2d80.2091282!3d13.0836937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f6dfeab8cf7%3A0xa3c70a4b2c54d8f!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1691590913415!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"></iframe>
          </div>
        </div>
      </div>
      <section className="px-6 md:px-20 md:mb-20 py-12 bg-white relative">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E91] mb-8">
            Write Us for More Information and Details
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left side - Working Hours */}
            <div className="border border-blue-200 rounded-lg md:h-[100px] md:mt-5 flex justify-between items-center p-4 text-sm text-[#2C3E91]">
              <span>Mon-Sat</span>
              <span className="font-medium">09:00 AM - 06:00 PM</span>
            </div>

            {/* Right side - Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-xs text-[#2C3E91] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-blue-200 rounded-md p-2 text-sm focus:outline-none focus:border-pink-300"
                />
              </div>

              <div>
                <label className="block text-xs text-[#2C3E91] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-blue-200 rounded-md p-2 text-sm focus:outline-none focus:border-pink-300"
                />
              </div>

              <div>
                <label className="block text-xs text-[#2C3E91] mb-1">
                  Message
                </label>
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full border border-blue-200 rounded-md p-2 text-sm focus:outline-none focus:border-pink-300"></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-pink-300 text-white py-2 rounded-md font-medium hover:bg-pink-400 transition">
                Send
              </button>
            </form>
          </div>
        </div>

        {/* WhatsApp Floating Button */}
        {/* <a
          href="https://wa.me/your-number"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 flex items-center gap-2 bg-white shadow-lg px-3 py-2 rounded-full border hover:shadow-xl transition">
          <span className="text-sm">Contact us</span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-8 h-8"
          />
        </a> */}
      </section>
      <AboutFooter />
    </div>
  );
};

export default Contact;
