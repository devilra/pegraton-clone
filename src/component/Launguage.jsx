import React from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "zh", name: "Chinese (Simplified)", flag: "🇨🇳" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "ja", name: "Japanese", flag: "🇯🇵" },
  { code: "ko", name: "Korean", flag: "🇰🇷" },
  { code: "en", name: "English", flag: "🇬🇧" },
];

const Language = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="fixed md:top-8 right-0 md:right-1/2 bg-transparent p-1 z-[9999]">
      <select
        aria-label="Select Language"
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.resolvedLanguage}
        className="border border-gray-300 md:w-[150px] text-black text-[15px] rounded p-1"
      >
        {languages.map((lang) => (
          <option
            className="bg-white text-black"
            key={lang.code}
            value={lang.code}
            selected="en"
          >
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Language;
