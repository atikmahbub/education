import React from "react";
import WhyUs from "./WhyUs";
import CoFounder from "./CoFounder";
import HostingService from "./HostingService";
import Packages from "./Packages";
import Testimonials from "./Testimonials";
import TutoringService from "./TutoringService";
import FormPage from "./FormPage";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FormPage />
      <TutoringService />
      <Testimonials />
      <Packages />
      <HostingService />
      <CoFounder />
      <WhyUs />
    </>
  );
};

export default Home;
