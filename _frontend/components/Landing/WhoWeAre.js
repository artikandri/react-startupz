import React from "react";
import questionMark from "@/assets/images/questionMark.png";

const WhoWeAre = () => {
  return (
    <>
      <section className="overflow-hidden bg-snow">
        <div className="container relative ">
          <div className="py-32">
            <div className="xl:px-[8rem] px-6 ">
              <h2 className="text-4xl md:text-5xl ">Who we are</h2>
              <p className="pt-8 font-semibold text-lg md:text-xl lg:text-2xl text-coral">
                We create products that have innovation and technology at their
                core. <br /> We value working with talented people that
                understand the possibilities of today.
              </p>
            </div>

            <div className="grid md:grid-cols-3 xl:px-[8rem] px-6 pt-20 font-bold text-2xl lg:text-3xl gap-12">
              <div className="flex flex-col gap-10">
                <p className=" text-coral relative">
                  01
                  <span className="w-[50px] absolute left-0  -bottom-[20px] h-[2px] bg-darkslategray/50"></span>
                </p>
                <p className=" text-darkslategray">
                  We develop innovative products, systems and services
                </p>
              </div>

              <div className="flex flex-col gap-10">
                <p className=" text-coral relative">
                  02{" "}
                  <span className="w-[50px] absolute left-0 -bottom-[20px] h-[2px] bg-darkslategray/50"></span>
                </p>
                <p>Next we build teams to scale them into companies</p>
              </div>

              <div className="flex flex-col gap-10">
                <p className=" text-coral relative">
                  03
                  <span className="w-[50px] absolute left-0 -bottom-[20px] h-[2px] bg-darkslategray/50"></span>
                </p>
                <p>Each startup solving one problem at a time</p>
              </div>
            </div>
          </div>

          <div className="absolute right-16 xl:right-36 top-16 xl:top-32">
            <img
              className="w-20 question-mark"
              src={questionMark}
              alt="Question Mark"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
