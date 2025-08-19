import React, { useMemo, useState } from "react";
import AboutNavbar from "../About/AboutNavbar";
import AboutFooter from "../About/AboutFooter";
import countryList from "react-select-country-list";
import Select from "react-select";
import Clients from "../../clients/Clients";

const Careers = () => {
  const [value, setValue] = useState("");

  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (val) => {
    setValue(val);
  };

  return (
    <div className=" h-screen overflow-y-scroll">
      {/* Navbar */}
      <AboutNavbar />

      {/* Top section with background image */}
      <div
        className="bg-cover bg-center brightness-50 bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://img-cdn.publive.online/fit-in/640x430/filters:format(webp)/indian-express-malayalam/media/media_files/uploads/2021/07/jobs1.jpg")',
          height: "400px",
        }}></div>

      <div>
        <div className="flex flex-col lg:flex-row md:pt-20 justify-between md items-start gap-8 sm:gap-10 px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-6 sm:space-y-8">
            {/* What Defines Us */}
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                What Defines Us
              </h2>
              <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                <li>
                  <strong>People-First Culture:</strong> Rooted in communication
                  and collaboration, our environment thrives on teamwork and a
                  shared dedication to client success.
                </li>
                <li>
                  <strong>Quality-Driven Approach:</strong> We follow rigorous
                  processes and maintain excellence across interpretation,
                  localization, and OSS delivery Sansiorg International private
                  limited.
                </li>
                <li>
                  <strong>Versatile Expertise:</strong> Our team works on
                  multilingual document translation, conference interpretation,
                  website localization, and equipment trading — especially for
                  the EMS/transport sector.
                </li>
              </ul>
            </div>

            {/* Why Build Your Career with Us */}
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                Why Build Your Career with Us
              </h2>
              <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                <li>
                  <strong>Dynamic Workplace:</strong> A compact but ambitious
                  organization where every voice matters.
                </li>
                <li>
                  <strong>Opportunity to Grow:</strong> As a young and evolving
                  company, we offer paths to advance across domains — from
                  project delivery to client liaison and technical support.
                </li>
                <li>
                  <strong>Diverse Projects:</strong> Work spans across
                  industries and geographies, engaging with varied clients and
                  languages.
                </li>
                <li>
                  <strong>Impactful Roles:</strong> Collaboration happens
                  closely with leadership, making your contributions tangible
                  and appreciated.
                </li>
                <li>
                  <strong>Learning Culture:</strong> For those passionate about
                  language, customer service, and technology, we offer
                  opportunities to excel.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                Ideal Fit For You If You Are
              </h2>
              <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                <li>A multilingual communicator and problem-solver</li>
                <li>Service-oriented, with strong people skills</li>
                <li>Detail-minded and committed to delivering quality</li>
                <li>Flexible and resourceful in a fast-moving environment</li>
                <li>
                  Interested in learning global trade, EMS services, or onsite
                  customer support
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                How to Apply
              </h1>
              <h3 className="py-3">Send your resume highlighting:</h3>
              <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                <li>Relevant language or technical skills</li>
                <li>Client-facing or on-site experience</li>
                <li>
                  Industry exposure, especially in transport, EMS, or logistics
                </li>
                <li>Flexible and resourceful in a fast-moving environment</li>
                <li>
                  Examples of successful multilingual projects or interpretation
                  assignments
                </li>
              </ul>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:w-1/2 bg-purple-50 p-4 sm:p-6 rounded-md shadow-sm w-full">
            <h2 className="text-base sm:text-lg fonta-semibold mb-4 sm:mb-6">
              Personal Information
            </h2>

            <form className="space-y-3 sm:space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="E.g. John Doe"
                  className="w-full border rounded p-2 text-sm sm:text-base"
                  required
                />
                <p className="text-xs text-red-500 mt-1">Name is required.</p>
              </div>

              {/* Email & Phone */}
              <div className="flex flex-col md:flex-row gap-3">
                <div className="w-full">
                  <label className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="E.g. john@doe.com"
                    className="w-full border rounded p-2 text-sm sm:text-base"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="E.g. +91 9878473878"
                    className="w-full border rounded p-2 text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              {/* Street Address */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Street Address
                </label>
                <input
                  type="text"
                  placeholder="E.g. 42 chennai"
                  className="w-full border rounded p-2 text-sm sm:text-base"
                />
              </div>

              {/* Apartment */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Apartment, suite, etc
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="w-full border rounded p-2 text-sm sm:text-base"
                />
              </div>

              {/* City & State */}
              <div className="flex flex-col md:flex-row gap-3">
                <div className="w-full">
                  <label className="block text-sm font-medium mb-1">City</label>
                  <input
                    type="text"
                    placeholder="E.g. chennai"
                    className="w-full border rounded p-2 text-sm sm:text-base"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    placeholder="E.g. Tamilnadu"
                    className="w-full border rounded p-2 text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* ZIP & Country */}
              <div className="flex flex-col md:flex-row gap-3">
                <div className="w-full">
                  <label className="block text-sm font-medium mb-1">
                    ZIP / Postal Code
                  </label>
                  <input
                    type="text"
                    placeholder="E.g. 600457"
                    className="w-full border rounded p-2 text-sm sm:text-base"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium mb-1">
                    Country
                  </label>
                  <Select
                    options={options}
                    value={value}
                    onChange={changeHandler}
                    placeholder="Select country"
                  />
                </div>
              </div>
              <div className="  bg-purple-50 p-4 sm:p-6 rounded-md shadow-sm w-full">
                <h2 className="text-lg font-semibold mb-4">Education</h2>
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="E.g.graduate"
                    className="w-full border rounded p-2 text-sm"
                  />
                  <input
                    type="date"
                    className="w-full border rounded p-2 text-sm"
                  />
                </div>
                <textarea
                  placeholder="E.g. Institute name"
                  rows="3"
                  className="w-full border rounded p-2 text-sm"></textarea>
                <button
                  type="button"
                  className="mt-3 px-4 py-2 text-sm border border-blue-500 text-blue-500 rounded hover:bg-blue-50">
                  Add Education
                </button>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-4">Work Experience</h2>
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="E.g.company name"
                    className="w-full border rounded p-2 text-sm"
                  />
                  <input
                    type="date"
                    className="w-full border rounded p-2 text-sm"
                  />
                </div>
                <textarea
                  placeholder="E.g. job Resposibilities"
                  rows="3"
                  className="w-full border rounded p-2 text-sm"></textarea>
                <button
                  type="button"
                  className="mt-3 px-4 py-2 text-sm border border-blue-500 text-blue-500 rounded hover:bg-blue-50">
                  Add Experience
                </button>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-4">Resume Upload</h2>
                <input
                  type="file"
                  className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>

              <div className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <label className="text-sm">
                  Confirm that the information provided is true and accurate.
                </label>
              </div>

              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">
                Apply
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <AboutFooter />
    </div>
  );
};

export default Careers;
