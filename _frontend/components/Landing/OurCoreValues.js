import React from "react";
import lamp from "@/assets/images/untitled-artwork-2@2x.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const values = [
  {
    title: "Innovation",
    text: "Startupz operates where entrepreneurship and technology intersect. We design solutions and turn them into businesses models.",
  },
  {
    title: "People",
    text: "Talent is what enable us to create great companies.",
  },
];

const OurCoreValues = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Our core values</h2>
          <img src={lamp} />
        </Col>
      </Row>
      <Row>
        {values.map((value, index) => {
          return (
            <Col key={index} md="6">
              <span>{"0" + (index + 1)}</span>
              <h3>{value.title}</h3>
              <p>Talent is what enable us to create great companies</p>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default OurCoreValues;
