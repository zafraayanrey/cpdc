import React from "react";

import Home from "./main-content/Home";
import AboutUs from "./main-content/AboutUs";
import ContactUs from "./main-content/ContactUs";
import PlansReport from "./main-content/PlansReport";
import Projects from "./main-content/Projects";
import Services from "./main-content/Services";
import CitizenCharter from "./main-content/CitizenCharter";
import Sections from "./main-content/Sections";

import { Route, Routes } from "react-router";

function PageNavigation() {
  return (
    <Routes>
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/citizencharter" element={<CitizenCharter />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/" element={<Home />} />
      <Route path="/plansreports" element={<PlansReport />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/sections" element={<Sections />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
}

export default PageNavigation;
