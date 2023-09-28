import React, { useEffect, useState } from "react";
import heroArt from "@/assets/images/hero.png";
import { animationOnHeroMounted } from "@/utils/animations";
import CustomButton from "@/components/CustomButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Hero = () => {
  useEffect(() => {
    animationOnHeroMounted();
  });
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="title">We Create Startups.</h1>
            <p className="subtitle">
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
