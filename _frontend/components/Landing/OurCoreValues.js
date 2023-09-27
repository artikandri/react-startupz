import React from "react";
import lamp from "@/assets/images/untitled-artwork-2@2x.png";

const OurCoreValues = () => {
  return (
    <>
      <section className="overflow-hidden bg-snow">
        <div className="container relative py-32 xl:px-[8rem] px-6 ">
          <h2 className="text-4xl md:text-5xl">Our core values</h2>
          <div className="grid gap-12 pt-32 text-3xl font-bold md:grid-cols-2">
            <div className="">
              <p className="text-coral relative">
                01. Innovation
                <span className="w-[50px] absolute left-0 -bottom-[20px] h-[2px] bg-darkslategray/50"></span>
              </p>
              <p className="pt-12 text-3xl">
                Startupz operates where entrepreneurship and technology
                intersect. We design solutions and turn them into businesses
                models.
              </p>
            </div>
            <div>
              <p className="text-coral relative">
                02. People
                <span className="w-[50px] absolute left-0 -bottom-[20px] h-[2px] bg-darkslategray/50"></span>
              </p>
              <p className="pt-12">
                Talent is what enable us to create great companies.
              </p>
            </div>
          </div>
          <div className="absolute right-8 top-8 lg:right-36 md:right-16 lg:top-28 md:top-16">
            <img className="w-24 lamp-icon" src={lamp} alt="lamp Mark" />
          </div>
        </div>
      </section>
    </>
  );
};

export default OurCoreValues;
