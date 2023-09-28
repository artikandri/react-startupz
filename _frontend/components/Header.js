import React, { useState } from "react";
import logo from "@/assets/images/group-15.svg";
import CloseIcon from "@/assets/images/closeMenu.png";
import MenuIcon from "@/assets/images/hamburgerMenu.png";
import Button from "@/components/Button";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const onClickMenuItem = () => {
    return setShowMenu(!showMenu);
  };

  return (
    <header className="flex justify-between xl:px-[8rem] px-6 pt-4 md:pt-8">
      <div>
        <img src={logo} alt="Company Logo" />
      </div>
      <nav className="items-center hidden gap-12 mb-3 font-normal md:flex text-darkslategray">
        <a
          className="no-underline transition-all text-darkslategray  visited:text-darkslategray hover:text-coral hover:font-medium"
          href="#OurWorks"
        >
          Startups
        </a>
        <a
          className="no-underline transition-all text-darkslategray  visited:text-darkslategray hover:text-coral hover:font-medium"
          href="#Contact"
        >
          Contact
        </a>
        <Button
          type={"button"}
          state={"secondary"}
          name={"Work with us!"}
          aria-expanded="false"
        >
          Work with us!
        </Button>
      </nav>

      <button
        onClick={onClickMenuItem}
        className="p-0 m-0 bg-transparent border-0 md:hidden"
      >
        <img
          className="w-10 h-10 rounded-full "
          src={showMenu ? CloseIcon : MenuIcon}
        />
      </button>

      {showMenu && (
        <div className="fixed z-40 inset-1 top-20">
          <nav className="flex flex-col items-center gap-12 py-16 mb-3 font-normal visited:text-complementary-green text-complementary-green shadow-xl bg-white rounded-3xl backdrop-blur-md ">
            <a
              className="no-underline transition-all hover:text-coral hover:font-medium"
              href="#OurWorks"
              onClick={onClickMenuItem}
            >
              Startups
            </a>
            <a
              className="no-underline transition-all text-complementary-green visited:text-complementary-green hover:text-coral hover:font-medium"
              href="#Contact"
              onClick={onClickMenuItem}
            >
              Contact
            </a>

            <Button
              type={"button"}
              state={"secondary"}
              name={"Work with us!"}
              aria-expanded="false"
            >
              Work with us!
            </Button>
          </nav>
        </div>
      )}

      {}
    </header>
  );
};

export default Header;
