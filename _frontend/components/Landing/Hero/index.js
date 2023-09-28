import React, { useEffect, useState } from "react";
import heroArt from "@/assets/images/hero.png";
import { animationOnHeroMounted } from "@/utils/animations";
import CustomButton from "@/components/CustomButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.scss";

const Hero = () => {
  useEffect(() => {
    animationOnHeroMounted();
  });

  return (
    <>
      <Container className="landing-hero py-5">
        <Row>
          <Col md="8">
            <h1 className="title text-dark fw-bold fs-1">
              We Create Startups.
            </h1>
            <p className="subtitle text-primary-orange fs-5">
              We are startup studio that develops and launches new companies.
            </p>
            <CustomButton
              type={"button"}
              state={"primary"}
              size={"md"}
              name={"See our works"}
              className={"cta"}
              aria-expanded="false"
            >
              See our works
            </CustomButton>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Hero;
