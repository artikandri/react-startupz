import React from "react";
import rocket from "@/assets/images/subtract.svg";

const Contacts = ({ clickHandlerThanks }) => {
  return (
    <>
      <section
        className="overflow-hidden text-white bg-secondary-yellow"
        id="Work"
      >
        <div className="xl:px-[8rem] flex flex-col justify-center items-center lg:items-start px-4 container pb-16 z-20 relative">
          <h4 className="text-4xl font-bold md:text-6xl lg:w-2/3 pt-14">
            Are you ready <br className="hidden lg:block" /> to board this
            rocket ship?
          </h4>
          <p className="text-xl md:text-2xl pt-7">
            Share your excitement with us.
          </p>
          <div className="z-20 p-5 mt-5 md:pt-20 bg-whitesmoke md:w-128 rounded-2xl">
            <form className="flex flex-col justify-center gap-4 md:px-10">
              <label className="hidden" htmlFor="name">
                Name*
              </label>
              <input
                className="w-full px-5 py-3.5 font-medium border-0 shadow-lg text-lg rounded-xl text-darkslategray"
                type="name"
                name="name"
                id="name"
                placeholder="Name*"
                required
              />
              <label className="hidden" htmlFor="email">
                Email*
              </label>
              <input
                className="w-full px-5 py-3 text-lg font-medium border-0 shadow-lg rounded-xl text-darkslategray"
                type="email"
                name="email"
                id="email"
                placeholder="Email*"
                required
              />
              <label className="hidden" htmlFor="message">
                Message*
              </label>
              <textarea
                className="w-full px-5 py-3 text-lg border-0 shadow-lg font-roboto rounded-xl text-darkslategray"
                name="message"
                id="message"
                cols="50"
                rows="9"
                placeholder="Message*"
                required
              ></textarea>
              <div className="flex justify-center">
                <button
                  type="submit"
                  onClick={clickHandlerThanks}
                  className="px-8 py-2 border-0 mt-2 md:mb-10 text-lg font-bold text-white no-underline rounded-full bg-darkslategray hover:-translate-y-0.5 transition-all hover:shadow-md"
                >
                  Shoot us a message
                </button>
              </div>
            </form>
          </div>
          <div className="absolute z-0 hidden -bottom-1 lg:block lg:-right-52 xl:right-32">
            <img className="" src={rocket} alt="Rocket ship launching" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
