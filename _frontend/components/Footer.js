import logo from "@/assets/images/group-15.svg";
import twitter from "@/assets/images/Vector.svg";
import Linkedin from "@/assets/images/Linkedin.svg";
import instagram from "@/assets/images/instagram.svg";

const Footer = ({ clickHandlerAlert }) => {
  return (
    <>
      <footer
        className="container xl:px-[8rem] px-6 py-24 grid md:grid-cols-2 lg:flex lg:justify-between gap-5 overflow-hidden"
        id="Contact"
      >
        <div className="flex flex-col items-start justify-between row-span-3 h-44 gl:h-44">
          <img className="h-10" src={logo} alt="logo" />
          <p className="text-lg text-gray-400 font-semibold ">
            © 2020 Startupz. <br /> All rights reserved.
          </p>
        </div>
        <div className="flex flex-col pt-3 xl:pl-28">
          <h5 className="text-lg font-medium">Companies</h5>
          <div className="flex flex-col gap-4 pt-6 font-medium no-underline text-complementary-green">
            <a
              className="transition-all hover:text-coral hover:font-medium"
              href="https://tolq.com/"
            >
              Tolq
            </a>
            <a
              className="transition-all hover:text-coral hover:font-medium"
              href="https://legalsite.co/"
            >
              LegalSite
            </a>
            <a
              className="transition-all hover:text-coral hover:font-medium"
              href="https://codekeeper.co/index.html"
            >
              Codekeeper
            </a>
            <a
              className="transition-all hover:text-coral hover:font-medium"
              href="https://feedbacklabs.org/"
            >
              Feedback Labs
            </a>
          </div>
        </div>
        <div className="flex flex-col pt-3 xl:pl-24">
          <h5 className="text-lg font-medium">Contact</h5>
          <div className="flex flex-col">
            <p className="pt-3 font-light text-gray-400">
              World Trade Center - The Hague <br /> Prinses Margrietplantsoen 33{" "}
              <br /> 2595 AM The Hague <br /> The Netherlands
            </p>
            <a
              className="pt-5 font-medium transition-all text-complementary-green hover:text-coral hover:font-medium"
              href="mailto:startupz@startupz.com"
            >
              Send us an email
            </a>
          </div>
        </div>
        <div className="pt-3 xl:pl-48">
          <h5 className="text-lg font-medium">Follow us</h5>
          <div className="flex flex-col gap-4 pt-3">
            <button
              onClick={clickHandlerAlert}
              className="p-0 m-0 transition-all bg-transparent border-0 hover:invert"
            >
              <img src={twitter} alt="tweeter" />
            </button>
            <button
              onClick={clickHandlerAlert}
              className="p-0 m-0 transition-all bg-transparent border-0 hover:invert"
            >
              <img src={Linkedin} alt="linkedin" />
            </button>
            <button
              onClick={clickHandlerAlert}
              className="p-0 m-0 transition-all bg-transparent border-0 hover:invert"
            >
              <img src={instagram} alt="Instagram" />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
