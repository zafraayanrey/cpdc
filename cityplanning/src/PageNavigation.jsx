import React from "react";
import Home from "./main-content/Home";
import AboutUs from "./main-content/AboutUs";
import { Route, Routes } from "react-router";

function PageNavigation() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
  );
}

export default PageNavigation;
