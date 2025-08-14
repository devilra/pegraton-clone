import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const languages = [
  { code: "zh", name: "Chinese (Simplified)", flag: "🇨🇳" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "ja", name: "Japanese", flag: "🇯🇵" },
  { code: "ko", name: "Korean", flag: "🇰🇷" },
  { code: "en", name: "English", flag: "🇬🇧" },
];

const Launguage = () => {
  const { i18n } = useTranslation();
  const location = useLocation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div
      className={`fixed top-0 md:-top-8 right-0 md:-right-36 bg-transparent shadow-md p-1 z-50 ${
        location.pathname === "/about" && "md:right-2 md:top-0"
      }`}>
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
        className="border border-gray-30 md:w-[100px] text-black0 text-[15px] rounded p-1">
        {languages.map((lang) => (
          <option
            className="bg-white md:w-[100px] text-black"
            key={lang.code}
            value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Launguage;
