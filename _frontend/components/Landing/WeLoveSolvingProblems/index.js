import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./index.scss";

const WeLoveSolvingProblems = () => {
  return (
    <Container className="landing-wlsp py-140 ">
      <Row className="">
        <Col className="text-center mx-auto" md="9">
          <h2 className="d-inline-block fw-bold text-primary-orange landing-wlsp__title">
            We love solving problems!
          </h2>
        </Col>
      </Row>
    </Container>
  );
};

export default WeLoveSolvingProblems;
