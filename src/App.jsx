import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar";
import About from "./component/About/About";
import ProductService from "./component/ProductService/ProductService";
import Careers from "./component/Careers/Careers";
import Contact from "./component/Contact/Contact";

//launguage changes code
import { useTranslation } from "react-i18next";
import "./i18n";
import OnsiteService from "./component/Oss/OnsiteService";
import Languageinterpretation from "./component/Language interpretation/Languageinterpretation";
import Trading from "./component/Trading/Trading";
import Language from "./component/Launguage";

const App = () => {
  const validNavbar = ["/"];
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <>
      {validNavbar.includes(location.pathname) && <Navbar />}
      <Language/>

      <Routes>
        <Route path="/" element={<Home t={t} />} />
        <Route path="/about" element={<About t={t} />} />
        <Route path="/service" element={<ProductService t={t} />} />
        <Route path="/oss" element={<OnsiteService t={t} />} />
        <Route path="/contact" element={<Contact t={t} />} />
        <Route path="/careers" element={<Careers t={t} />} />
        <Route path="/language" element={<Languageinterpretation t={t} />} />
        <Route path="/trading" element={<Trading t={t} />} />
      </Routes>
    </>
  );
};

export default App;
