import logo from "@/assets/images/group-15.svg";
import twitter from "@/assets/images/Vector.svg";
import Linkedin from "@/assets/images/Linkedin.svg";
import instagram from "@/assets/images/instagram.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const companies = [
  {
    text: "Tolq",
    url: "http://tolq.com",
  },
  {
    text: "LegalSite",
    url: "http://legalsite.co",
  },
  {
    text: "Codekeeper",
    url: "https://codekeeper.co/index.html",
  },
  {
    text: "Feedback Labs",
    url: "http://feedbacklabs.org",
  },
];

const socialMedias = [
  {
    text: "Twitter",
    icon: twitter,
    url: "http://twitter.com",
  },
  {
    text: "LinkedIn",
    icon: Linkedin,
    url: "http://linkedin.com",
  },
  {
    text: "Instagram",
    icon: instagram,
    url: "http://instagram.com",
  },
];

const Footer = () => {
  return (
    <div className="bg-light-gray footer py-90">
      <Container>
        <Row>
          <Col sm="6" md="3" className="mb-5">
            <img className="" src={logo} alt="logo" />
            <p className="text-medium-gray mt-5">
              © 2020 Startupz. <br /> All rights reserved.
            </p>
          </Col>
          <Col sm="6" md="3" className="mb-5">
            <h4 className="mb-3 fs-7">Companies</h4>
            <ul className="p-0 d-flex gap-2 flex-column">
              {companies.map((company, index) => {
                return (
                  <li key={index} className="">
                    <a
                      href={company.url}
                      className="link-primary text-decoration-none"
                    >
                      {company.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col sm="6" md="3" className="mb-5">
            <h4 className="mb-3 fs-7">Contact</h4>
            <address className="text-medium-gray">
              World Trade Center - The Hague <br /> Prinses Margrietplantsoen 33{" "}
              <br /> 2595 AM The Hague <br /> The Netherlands
            </address>

            <a
              className=""
              href="mailto:startupz@startupz.com"
              className="text-primary text-decoration-none"
            >
              Send us an email
            </a>
          </Col>
          <Col sm="6" md="3" className="mb-5">
            <h4 className="mb-3 fs-7">Follow us</h4>
            <ul className="p-0 d-flex flex-column gap-3">
              {socialMedias.map((socialMedia, index) => {
                return (
                  <li key={index}>
                    <a
                      href={socialMedia.url}
                      className="link-primary"
                      target="_blank"
                    >
                      <img src={socialMedia.icon} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
