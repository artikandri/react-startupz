import React, { useState } from "react";
import logo from "@/assets/images/group-15.svg";
import CustomButton from "@/components/CustomButton";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useMediaQuery } from "react-responsive";

const menuItems = [
  {
    text: "Startups",
    url: "#OurWorks",
    type: "link",
  },
  {
    text: "Contact",
    url: "#Contact",
    type: "link",
  },
  {
    text: "Work with us!",
    url: "#Hiring",
    type: "button",
    metadata: {
      state: "light",
    },
  },
];

const Header = () => {
  const isLarge = useMediaQuery({
    query: "(min-width: 769px)",
  });

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className="bg-transparent">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className={`${
                isLarge ? `ms-auto ` : "mx-auto text-center"
              } d-flex align-items-center`}
            >
              {menuItems.map((item, index) => {
                if (item.type === "link") {
                  return (
                    <Nav.Link key={index} href={item.url} className="text-dark">
                      {item.text}
                    </Nav.Link>
                  );
                } else if (item.type === "button") {
                  return (
                    <Nav.Link key={index}>
                      <CustomButton
                        type={"button"}
                        state={item.metadata.state}
                        size={"md"}
                        name={item.text}
                        aria-expanded="false"
                      >
                        {item.text}
                      </CustomButton>
                    </Nav.Link>
                  );
                }
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
