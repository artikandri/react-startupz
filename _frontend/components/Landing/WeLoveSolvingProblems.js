import React from "react";
import leftHand from "@/assets/images/untitled-artwork-12-11@2x.png";
import rightHand from "@/assets/images/untitled-artwork-12-1@2x.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const WeLoveSolvingProblems = () => {
  return (
    <Container>
      <Row>
        <Col className="text-align-center ">
          <img src={leftHand} />
          <h2>We love solving problems!</h2>
          <img src={rightHand} />
        </Col>
      </Row>
    </Container>
  );
};

export default WeLoveSolvingProblems;
