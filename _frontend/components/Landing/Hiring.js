import React from "react";
import leftman from "@/assets/images/leftman.png";
import rightman from "@/assets/images/rightman.png";

const Hiring = ({}) => {
  return (
    <>
      <section className="flex items-center justify-between py-16 overflow-hidden bg-snow">
        <img
          className="hidden h-10 md:block md:h-44 lg:h-64 xl:h-80"
          src={leftman}
          alt="Man on the left side of the section"
        />
        <div className="container flex justify-center">
          <div className="flex flex-col justify-center items-center w-[440px] gap-8 md:py-24 lg:py-36">
            <h4 className="text-4xl lg:text-5xl">We are hiring!</h4>
            <p className="text-xl font-medium text-center lg:text-2xl text-coral">
              We're always looking for talented people to join and help build
              our startups.
              <span className="block">Check out our current openings</span>
            </p>
            <button className="border-0 px-6 py-4 mt-3 md:mt-6 font-bold text-white no-underline rounded-full bg-complementary-green hover:-translate-y-0.5 transition-all hover:shadow-md">
              See current openings
            </button>
          </div>
        </div>

        <img
          className="hidden md:block md:h-44 lg:h-64 xl:h-80"
          src={rightman}
          alt="Man on the right side of the section"
        />
      </section>
    </>
  );
};

export default Hiring;
