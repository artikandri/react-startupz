import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import heroArt from "@/assets/images/hero.png";
import CustomButton from "@/components/CustomButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NotFound = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md="6">
            <h1 className="title text-dark fw-bold fs-1">
              404 Page Not Found.
            </h1>
            <p className="subtitle text-primary-orange fs-5">
              This page does not exist.
            </p>
            <CustomButton
              type={"button"}
              state={"primary"}
              size={"md"}
              name={"See our works"}
              className={"cta"}
              aria-expanded="false"
            >
              <Link to="/" className="text-white text-decoration-none">
                Back to Home
              </Link>
            </CustomButton>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NotFound;
