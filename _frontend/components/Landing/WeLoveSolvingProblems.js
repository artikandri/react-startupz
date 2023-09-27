import React from "react";
import leftHand from "@/assets/images/untitled-artwork-12-11@2x.png";
import rightHand from "@/assets/images/untitled-artwork-12-1@2x.png";

const WeLoveSolvingProblems = () => {
  return (
    <>
      <section className="container flex items-center justify-center gap-10 py-32 overflow-hidden lg:py-44">
        <div className="flex items-center justify-center gap-2 md:gap-10">
          <img className="w-14 " src={leftHand} alt="left hand ok" />
          <h3 className="text-xl md:text-3xl gl:text-5xl text-coral">
            We love solving problems!
          </h3>
          <img className="w-14 " src={rightHand} alt="right hand ok" />
        </div>
      </section>
    </>
  );
};

export default WeLoveSolvingProblems;
