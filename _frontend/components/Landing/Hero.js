import React, { useState } from "react";
import logo from "@/assets/images/group-15.svg";
import heroArt from "@/assets/images/hero.png";
import CloseIcon from "@/assets/images/close-circl.svg";
import MenuIcon from "@/assets/images/menu.svg";

const Hero = () => {
  const [showMenu, setShowMenu] = useState(false);

  const clickHandlerMenu = () => {
    return setShowMenu(!showMenu);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[82dvh] overflow-hidden">
        <div className="container">
          {/* Header */}
          <header className="flex justify-between xl:px-[8rem] px-4 pt-4 md:pt-8">
            {/* Company Logo */}
            <div>
              <img src={logo} alt="Company Logo" />
            </div>

            {/* Navigation */}
            <nav className="items-center hidden gap-12 mb-3 font-normal md:flex text-darkslategray">
              <a
                className="no-underline transition-all text-darkslategray hover:text-coral hover:font-medium"
                href="#Startups"
              >
                Startups
              </a>
              <a
                className="no-underline transition-all text-darkslategray hover:text-coral hover:font-medium"
                href="#Contact"
              >
                Contact
              </a>
              <a
                href="#Work"
                className="px-10 py-3 font-bold no-underline bg-white rounded-full ring-1 ring-complementary-green text-complementary-green tracking-wider hover:-translate-y-0.5 transition-all hover:shadow-md"
              >
                Work with us!
              </a>
            </nav>

            <button
              onClick={clickHandlerMenu}
              className="p-0 m-0 bg-transparent border-0 md:hidden"
            >
              <img
                className="w-10 h-10 rounded-full "
                src={showMenu ? CloseIcon : MenuIcon}
                alt={showMenu ? "close" : "menu"}
              />
            </button>

            {showMenu && (
              <div className="fixed z-40 inset-1 top-20">
                <nav className="flex flex-col items-center gap-12 py-16 mb-3 font-normal text-white shadow-xl bg-darkslategray/60 rounded-3xl backdrop-blur-md ">
                  <a
                    className="no-underline transition-all hover:text-coral hover:font-medium"
                    href="#Startups"
                    onClick={clickHandlerMenu}
                  >
                    Startups
                  </a>
                  <a
                    className="no-underline transition-all hover:text-coral hover:font-medium"
                    href="#Contact"
                    onClick={clickHandlerMenu}
                  >
                    Contact
                  </a>
                  <a
                    href="#Work"
                    onClick={clickHandlerMenu}
                    className="px-10 py-3 font-bold no-underline bg-white rounded-full ring-1 ring-complementary-green text-complementary-green tracking-wider hover:-translate-y-0.5 transition-all hover:shadow-md"
                  >
                    Work with us!
                  </a>
                </nav>
              </div>
            )}

            {}
          </header>

          {/* Content */}

          <div className="flex flex-col items-start xl:px-[8rem] px-4 pt-16 md:pt-32">
            <h1 className="m-0 font-bold text-darkslategray text-4xl md:text-[85px] leading-[85px] font-custom tracking-tight">
              We Create <br className="hidden md:block" /> Startups.
            </h1>
            <p className="w-2/3 m-0 text-xl md:w-1/2 md:mt-8 md:text-2xl xl:w-full text-coral">
              We are startup studio that develops and launches new companies.
            </p>
            <a
              href="#Startups"
              className="px-6 py-4 mt-14 md:mt-6 font-bold text-white no-underline rounded-full bg-complementary-green tracking-wider hover:-translate-y-0.5 transition-all hover:shadow-md"
            >
              See our works
            </a>
          </div>
        </div>

        {/* Background Art */}

        <div className="absolute bottom-0 -right-64 md:right-0 -z-10">
          <img
            className=" opacity-50 md:opacity-100 w-2/3 md:w-144 lg:w-[40rem] xl:w-[50rem]"
            src={heroArt}
            alt="Illustration of Startups"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
