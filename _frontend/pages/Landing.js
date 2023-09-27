import React from "react";
import Hero from "@/components/Landing/Hero";
import WhoWeAre from "@/components/Landing/WhoWeAre.js";
import ContactUs from "@/components/Landing/ContactUs";
import Hiring from "@/components/Landing/Hiring";
import OurWorks from "@/components/Landing/OurWorks";
import WeLoveSolvingProblems from "@/components/Landing/WeLoveSolvingProblems";
import OurCoreValues from "@/components/Landing/OurCoreValues";
import Quote from "@/components/Landing/Quote";

const Landing = () => {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <WeLoveSolvingProblems />
      <OurCoreValues />
      <OurWorks />
      <Quote />
      <Hiring />
      <ContactUs />
    </>
  );
};

export default Landing;
