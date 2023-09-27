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
import { LinkPreview } from "@dhaiwat10/react-link-preview";

const Landing = () => {
  const url = process.env.REACT_APP_BASE_URL;
  return (
    <>
      <LinkPreview url={url} width="400px" />
      <Hero />
      <FadeInSection>
        <WhoWeAre />
      </FadeInSection>
      <WeLoveSolvingProblems />
      <FadeInSection>
        <OurCoreValues />
      </FadeInSection>
      <OurWorks />
      <FadeInSection>
        <Quote />
      </FadeInSection>
      <FadeInSection>
        <Hiring />
      </FadeInSection>
      <ContactUs />
    </>
  );
};

export default Landing;
