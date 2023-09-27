import React from "react";
import leftman from "@/assets/images/leftman.png";
import rightman from "@/assets/images/rightman.png";
import Button from "@/components/Button";

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
          <div className="flex flex-col justify-center items-center w-1/2 gap-8 md:py-24 lg:py-36">
            <h4 className="text-4xl lg:text-5xl">We are hiring!</h4>
            <p className="text-xl font-semibold text-center lg:text-2xl text-coral">
              We're always looking for talented people to join and help build
              our startups.
              <span className="block">Check out our current openings</span>
            </p>
            <Button
              type={"button"}
              size={"lg"}
              state={"primary"}
              name={"See current openings"}
              aria-expanded="false"
            >
              See current openings
            </Button>
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
