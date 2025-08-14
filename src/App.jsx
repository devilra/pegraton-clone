import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar";
import About from "./component/About/About";
import ProductService from "./component/ProductService/ProductService";
import Investors from "./component/Investors/Investors";
import Sustainability from "./component/Sustainability/Sustainability";
import Careers from "./component/Careers/Careers";

const App = () => {
  const validNavbar = ["/"];
  const location = useLocation();

  return (
    <>
      {validNavbar.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<ProductService />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </>
  );
};

export default App;
