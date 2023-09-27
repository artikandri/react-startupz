import React, { useEffect, useState } from "react";
import heroArt from "@/assets/images/hero.png";
import { animationOnHeroMounted } from "@/utils/animations";

const Hero = () => {
  useEffect(() => {
    animationOnHeroMounted();
  });
  return (
    <>
      <section className="relative h-[82dvh] overflow-hidden" id="hero">
        <div className="container">
          <div className="flex flex-col items-start xl:px-[8rem] px-6 pt-16 md:pt-32">
            <h1 className="title m-0 font-bold text-darkslategray text-4xl md:text-[85px] leading-[85px] font-custom max-w-md tracking-tight">
              We Create <br className="hidden md:block" /> Startups.
            </h1>
            <p className="subtitle w-2/3 m-0 text-xl md:w-1/2 md:mt-8 md:text-2xl xl:w-full text-coral">
              We are startup studio that develops and launches new companies.
            </p>
            <a
              href="#OurWorks"
              className="cta px-6 py-4 mt-14 md:mt-6 font-bold text-white no-underline rounded-full bg-complementary-green tracking-wider hover:-translate-y-0.5 transition-all hover:shadow-md"
            >
              See our works
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 -right-64 md:right-0 -z-10">
          <img
            className=" opacity-50 md:opacity-100 w-2/3 md:w-144 lg:w-[40rem] xl:w-[50rem]"
            src={heroArt}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
