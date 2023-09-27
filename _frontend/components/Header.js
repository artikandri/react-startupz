import React, { useState } from "react";
import logo from "@/assets/images/group-15.svg";
import CloseIcon from "@/assets/images/close-circl.svg";
import MenuIcon from "@/assets/images/menu.svg";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const clickHandlerMenu = () => {
    return setShowMenu(!showMenu);
  };

  return (
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
  );
};

export default Header;
