import React from "react";
import leftHand from "@/assets/images/untitled-artwork-12-11@2x.png";
import rightHand from "@/assets/images/untitled-artwork-12-1@2x.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Quote = () => {
  return (
    <Container>
      <Row>
        <Col>
          <img src={leftHand} />
          <h2>
            Startups create a world that actually is better. Any problem that
            can be solved, will be solved by a startup, and that is a huge
            opportunity.
          </h2>
          <img src={rightHand} />
        </Col>
      </Row>
    </Container>
  );
};

export default Quote;
