import React from "react";
import Hero from "@/components/Landing/Hero/";
import FadeInSection from "@/components/FadeInSection";
import WhoWeAre from "@/components/Landing/WhoWeAre/";
import ContactUs from "@/components/Landing/ContactUs/";
import Hiring from "@/components/Landing/Hiring/";
import OurWorks from "@/components/Landing/OurWorks/";
import WeLoveSolvingProblems from "@/components/Landing/WeLoveSolvingProblems/";
import OurCoreValues from "@/components/Landing/OurCoreValues/";
import Quote from "@/components/Landing/Quote/";
import { LinkPreview } from "@dhaiwat10/react-link-preview";

const Landing = () => {
  const url = import.meta.env.VITE_BASE_URL;
  return (
    <div className="landing">
      {import.meta.env === "PRODUCTION" && (
        <LinkPreview url={url} width="400px" />
      )}
      <FadeInSection>
        <Hero />
      </FadeInSection>
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
        <>
          <OurWorks />
          <Quote />
        </>
      </FadeInSection>
      <FadeInSection>
        <Hiring />
      </FadeInSection>
      <ContactUs />
    </div>
  );
};

export default Landing;
