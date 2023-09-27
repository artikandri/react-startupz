import React from "react";
import Hero from "@/components/Landing/Hero";
import FadeInSection from "@/components/FadeInSection";
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
      <FadeInSection>
        <WhoWeAre />
      </FadeInSection>
      <FadeInSection>
        <WeLoveSolvingProblems />
      </FadeInSection>
      <FadeInSection>
        <OurCoreValues />
      </FadeInSection>
      <FadeInSection>
        <OurWorks />
      </FadeInSection>
      <FadeInSection>
        <Quote />
      </FadeInSection>
      <FadeInSection>
        <Hiring />
      </FadeInSection>
      <FadeInSection>
        <ContactUs />
      </FadeInSection>
    </>
  );
};

export default Landing;
