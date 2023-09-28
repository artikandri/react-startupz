import logo from "@/assets/images/group-15.svg";
import twitter from "@/assets/images/Vector.svg";
import Linkedin from "@/assets/images/Linkedin.svg";
import instagram from "@/assets/images/instagram.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const companies = [
  {
    text: "tolq",
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
    <Container>
      <Row>
        <Col sm="6" md="3">
          <img className="" src={logo} alt="logo" />
          <p className="">
            © 2020 Startupz. <br /> All rights reserved.
          </p>
        </Col>
        <Col sm="6" md="3">
          <h4>Companies</h4>
          <ul>
            {companies.map((company, index) => {
              return (
                <li key={index}>
                  <a href={company.url}>{company.text}</a>
                </li>
              );
            })}
          </ul>
        </Col>
        <Col sm="6" md="3">
          <h4>Companies</h4>
          <address>
            World Trade Center - The Hague <br /> Prinses Margrietplantsoen 33{" "}
            <br /> 2595 AM The Hague <br /> The Netherlands
          </address>

          <a className="" href="mailto:startupz@startupz.com">
            Send us an email
          </a>
        </Col>
        <Col sm="6" md="3">
          <h4>Contact</h4>
          <ul>
            {socialMedias.map((socialMedia, index) => {
              return (
                <li key={index}>
                  <a href="{socialMedia.url}">
                    <img src={socialMedia.icon} />
                    <span>{socialMedia.text}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
